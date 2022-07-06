import { withAuth0 } from '@auth0/auth0-react';
import React from 'react';
import axios from 'axios';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import { Button, Container, Form } from 'react-bootstrap';


const SERVER = process.env.REACT_APP_SERVER;
const API_URL = `${SERVER}/pokemon`;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: []
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
      title: e.target.title.value,
      description: e.target.description.value,
      status: e.target.status.checked
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
      show: false
    });
  };

  render() {
    return (
      <>      

      <h2> User Profile </h2>
      {this.props.auth0.isAuthenticated ? <LogoutButton /> : <LoginButton />}
      {this.props.auth0.isAuthenticated ? <Profile /> : <h3>Please Login! </h3>}
    

        <h2>Pokemon</h2>
        {/* <Header.js/>
        <Roster.js/>
        <Footer.js/>
        <xxx.js/> */}

      </>
    );
  }
}

export default withAuth0(App);