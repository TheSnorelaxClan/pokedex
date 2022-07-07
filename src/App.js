import { withAuth0 } from '@auth0/auth0-react';
import React from 'react';
import axios from 'axios';
import { Button, Form, Modal, Container } from 'react-bootstrap';
import Roster from './components/Roster';
import AboutPokedex from './components/AboutPokedex';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import Pokemon from './components/Pokemon'
import './App.css';
// import Content from './components/Content';
// import Footer from './components/Footer';




const SERVER = process.env.REACT_APP_SERVER;
const API_URL = `${SERVER}/pokemon`;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
      pokeNameObj: {},
      showModal: false,
      typeData: [],
      showCards: false,
    }
  }

  getPokemon = async () => {
    console.log('Get Pokemon: ');
    try {
      let results = await axios.get(`${process.env.REACT_APP_SERVER}/pokemon`);
      console.log(results.data);
      this.setState({
        pokemon: results.data

      })
    } catch (error) {
      console.log('We have an error: ', error.response.data)
    }
  }

  postPokemon = async (newPokemon) => {
    let url=`${process.env.REACT_APP_SERVER}/pokemon`;
    try {
      await axios.post(url, newPokemon);
    } catch (error) {
      console.log('Error creating Pokemon: ', error.response.data)
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
      console.log('Delete Pokemon: e have an error: ', error.response.data);
    }
  }

  updatePokemon = async (pokemonToUpdate) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/pokemon/${pokemonToUpdate._id}`;
      let updatedPokemon = await axios.put(url, pokemonToUpdate);
      let updatedPokemonArray = this.state.pokemon.map(existingPokemon => {
        return existingPokemon._id === pokemonToUpdate._id
          ? updatedPokemon.data
          : existingPokemon
      });
      this.setState({
        pokemon: updatedPokemonArray
      });
    } catch (error) {
      console.log('Updated Pokemon: We have an error: ', error.response.data);
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
      const filteredPokemon = this.state.pokemon.filter(pokemon => pokemon._id !== pokemonToDelete._id);
      this.setState({ pokemon: filteredPokemon });
    } catch (error) {
      console.error('Handle Delete: We have an error!', error);
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
      pokeName: e.target.value,
    });
  }

  findByName = async (e) => {
    e.preventDefault();
    try {
      let pokemonURL = `${process.env.REACT_APP_SERVER}/getname/${this.state.pokeName}`
      let pokeNameObj = await axios.get(pokemonURL);

      this.setState({
        pokeNameObj: pokeNameObj.data[0],
        name: pokeNameObj.data[0].name,
        id: pokeNameObj.data[0].id,
        types: pokeNameObj.data[0].types,
        img: pokeNameObj.data[0].img,
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

  findByType = async (type) => {
    try {
      let pokemonURL = `${process.env.REACT_APP_SERVER}/gettype/${type}`
      let pokeTypeObj = await axios.get(pokemonURL);

      this.setState({
        showCards: true,
        typeData: pokeTypeObj.data,
      })

    } catch (error) {
      console.log('error', error)
      this.setState({
        error: true,
        errorMsg: `Error: ${error.message}. Please Refresh & Try Again.`
      })
    }
  }

  addPokemon = (name, types, id, img)=>{
    let newPokemon={
      name: name,
      types: types,
      id: id,
      img: img
    }
    this.postPokemon(newPokemon)
  }
  
  render() {

    let pokemon = this.state.typeData.map((pokemon)=>{
      return(
      <Pokemon
      name={pokemon.name}
      img={pokemon.img}
      types={pokemon.types}
      key={pokemon.id}
      id={pokemon.id}
      addPokemon={this.addPokemon}
      />
    )});

    return (
      <>

      <h2> User Profile </h2>
      {this.props.auth0.isAuthenticated ? <LogoutButton /> : <LoginButton />}
      {this.props.auth0.isAuthenticated ? <Profile /> : <h3>Please Login! </h3>}
    

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
            <Modal.Footer>
            <Button onClick={()=>this.addPokemon(this.state.name, this.state.types, this.state.id, this.state.img)} variant="primary">Add to library</Button>
            </Modal.Footer>
          </Modal>
        </Container>
        {/* <Card className='h-100 p-3'>
          <Card.Header className='text-center'>
            {this.state.name}
          </Card.Header>
          <Card.Img variant="top" src={this.state.img} />
          <Card.Body className='mt-3 mb-3'>
            <Card.Text>{this.state.types}</Card.Text>
          </Card.Body>
        </Card> */}
        {this.state.showCards?
          <Container>
            <Button onClick={()=>this.setState({showCards: false})}>Back</Button>
            {pokemon}
          </Container>
        :<Container>
          <h2 onClick={()=>this.findByType('Fire')}>Fire</h2>
          <h2 onClick={()=>this.findByType('Water')}>Water</h2>
          <h2 onClick={()=>this.findByType('Grass')}>Grass</h2>
        </Container>}
        <Roster />
        {/* <AboutUs/> */}
        <AboutPokedex />
        {/* <Footer /> */}


      </>
    );
  }
}

export default withAuth0(App);