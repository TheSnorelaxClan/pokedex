import React from 'react';
import axios from 'axios';
import { Button, Form, Modal, Container, Card } from 'react-bootstrap';
// import Footer from './components/Footer';
import Roster from './components/Roster';
// import AboutUs from './components/AboutUs';
import AboutPokedex from './components/AboutPokedex';


const SERVER = process.env.REACT_APP_SERVER;
const API_URL = `${SERVER}/pokemon`;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
      pokeNameObj: {},
      showModal: false
    }
  }

  getPokemon = async () => {
    console.log('I fired');
    try {
      let results = await axios.get(`${process.env.REACT_APP_SERVER}/pokemon`);
      console.log(results.data);
      this.setState({
        pokemon: results.data

      })
    } catch (error) {
      console.log('we have an error: ', error.response.data)
    }
  }

  postPokemon = async (pokemon) => {
    console.log('I fired');
    let config = {
      method: 'post',
      url: `${process.env.REACT_APP_SERVER}/pokemon`,
      data: pokemon
    }
    try {
      let results = await axios(config);
      console.log(results.data);
      this.setState({
        pokemon: [...this.state.pokemon, results.data]

      })
    } catch (error) {
      console.log('we have an error: ', error.response.data)
    }
  }

  deletePokemon = async (id) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/pokemon/${id}`;
      await axios.delete(url);
      // this.getPokemon();
      let updatedPokemon = this.state.pokemon.filter(pokemon => pokemon._id !== id);
      this.setState({
        pokemon: updatedPokemon
      });
    } catch (error) {
      console.log('we have an error: ', error.response.data);
    }
  }

  updatePokemon = async (pokemonToUpdate) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/pokemon/${pokemonToUpdate._id}`;
      let updatedpokemon = await axios.put(url, pokemonToUpdate);
      let updatedpokemonArray = this.state.pokemon.map(existingpokemon => {
        return existingpokemon._id === pokemonToUpdate._id
          ? updatedpokemon.data
          : existingpokemon
      });
      this.setState({
        pokemon: updatedpokemonArray
      });
    } catch (error) {
      console.log('we have an error: ', error.response.data);
    }
  }

  componentDidMount() {
    this.getPokemon();
  }

  handlePokemonSubmit = (e) => {
    e.preventDefault();
    let newPokemon = {
      name: e.target.name.value,
      type: e.target.type.value,
      id: e.target.id.value,
      img: e.target.img.value
    }
    console.log(newPokemon);
    this.postPokemon(newPokemon);
  }

  handleDelete = async (pokemonToDelete) => {
    const url = `${API_URL}/${pokemonToDelete._id}`;

    try {
      const response = await axios.delete(url);
      console.log(response.data);
      const filteredpokemon = this.state.pokemon.filter(pokemon => pokemon._id !== pokemonToDelete._id);
      this.setState({ pokemon: filteredpokemon });
    } catch (error) {
      console.error(error);
    }
  }

  handleOpen = () => {
    this.setState({
      show: true
    })
  }

  handleOnHide = () => {
    this.setState({
      showModal: false
    });
  };

  handlePokeName = (e) => {
    this.setState({
      searchQuery: e.target.value
    });
  }

  findByName = async (e) => {
    e.preventDefault();
    try {
      let pokemonURL = `https://api.pokemontcg.io/v2/cards?X-Api-Key=${process.env.REACT_APP_X_API_KEY}&q=name:${this.state.searchQuery}`
      let pokeNameObj = await axios.get(pokemonURL);

      this.setState({
        pokeNameObj: pokeNameObj.data.data[0],
        name: pokeNameObj.data.data[0].name,
        id: pokeNameObj.data.data[0].id,
        types: pokeNameObj.data.data[0].types,
        img: pokeNameObj.data.data[0].images.large,
        showModal: true
      })

    } catch (error) {
      console.log('error', error)
      this.setState({
        error: true,
        errorMsg: `Error: ${error.message}. Please Refresh & Try Again.`
      })
    }
  }
  
  render() {
    console.log('Pke name', this.state.searchQuery);
    console.log('Poke Obj', this.state.pokeNameObj);
    console.log('Poke img', this.state.img);
    return (
      <>
        <h2>Pokemon</h2>
        <Form
          onSubmit={this.findByName}>
          <Form.Control
            className='mb-3 mt-3'
            box-sizing='border-box'
            type="text"
            onInput={this.handlePokeName}
            placeholder="Enter Pokemon Name" />
          <Button className='mb-3' variant="outline-dark" type="submit">Catch 'em!</Button>
        </Form>
        <Container>
          <Modal className='h-100 p-5'
            show={this.state.showModal}
            onHide={this.handleOnHide}
          >
            <Modal.Header closeButton>
              <Modal.Title>{this.state.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img className="img-fluid"
                src={this.state.img}
                alt={this.state.name}
              />
            </Modal.Body>
          </Modal>
        </Container>
        <Card className='h-100 p-3'>
          <Card.Header className='text-center'>
            {this.state.name}
          </Card.Header>
          <Card.Img variant="top" src={this.state.img} />
          <Card.Body className='mt-3 mb-3'>
            <Card.Text>{this.state.types}</Card.Text>
          </Card.Body>
        </Card>
        <Roster />
        {/* <AboutUs/> */}
        <AboutPokedex />
        {/* <Footer /> */}


      </>
    )
  }
}

export default App;