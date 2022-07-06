import { withAuth0 } from '@auth0/auth0-react';
import React from 'react';
import axios from 'axios';
import { Button, Form, Modal, Container, Card } from 'react-bootstrap';
import Roster from './components/Roster';
import AboutPokedex from './components/AboutPokedex';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
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
      showModal: false
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

  postPokemon = async (pokemon) => {
    console.log('Post Pokemon: ', pokemon);
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
      console.log('Post Pokemon: We have an error: ', error.response.data)
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
  
  render() {
    console.log('Poke name', this.state.pokeName);
    console.log('Poke Obj', this.state.pokeNameObj);
    console.log('Poke img', this.state.img);
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
    );
  }
}

export default withAuth0(App);