import React from 'react';
import axios from 'axios';
// import { Button, Container, Form } from 'react-bootstrap';
import Footer from ./Footer.js


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
    this.getpokemon();
  }

  handlepokemonubmit = (e) => {
    e.preventDefault();
    let newpokemon = {
      title: e.target.title.value,
      description: e.target.description.value,
      status: e.target.status.checked
    }
    console.log(newpokemon);
    this.postpokemon(newpokemon);
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

  handleonHide = () => {
    this.setState({
      show: false
    });
  };

  render() {
    return (
      <>
        <h2>Pokemon</h2>
        <Header.js/>
        <Roster.js/>
        <Footer.js/>
        <xxx.js/>


      </>
    )
  }
}

export default App;