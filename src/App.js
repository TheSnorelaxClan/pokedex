import { withAuth0 } from '@auth0/auth0-react';
import React from 'react';
import axios from 'axios';
import { Button, Form, Modal, Container, Row, } from 'react-bootstrap';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import Pokemon from './components/Pokemon'
import './App.css';

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

  postPokemon = async (newPokemon) => {
    let url = `${process.env.REACT_APP_SERVER}/pokemon`;
    try {
      await axios.post(url, newPokemon);
    } catch (error) {
      console.log('Error creating Pokemon: ', error.response.data)
    }
  }

  handlePokemonSubmit = (e) => {
    e.preventDefault();
    let newPokemon = {
      name: e.target.name.value,
      type: e.target.type.value,
      id: e.target.id.value,
      img: e.target.img.value
    }
    this.postPokemon(newPokemon);
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

  addPokemon = (name, types, id, img) => {
    let newPokemon = {
      name: name,
      types: types,
      id: id,
      img: img
    }
    this.postPokemon(newPokemon)
  }

  render() {

    let pokemon = this.state.typeData.map((pokemon) => {
      return (
        <Pokemon
          name={pokemon.name}
          img={pokemon.img}
          types={pokemon.types}
          key={pokemon._id}
          id={pokemon.id}
          addPokemon={this.addPokemon}
        />
      )
    });

    return (
      <>

        {this.props.auth0.isAuthenticated ? <LogoutButton /> : <LoginButton />}
        {this.props.auth0.isAuthenticated ? <Profile /> : <p>Please Login! </p>}

        <Container className="d-flex align-items-center justify-content-center text-center">
          <Form
            onSubmit={this.findByName}>
            <Form.Control
              className='mb-5'
              box-sizing='border-box'
              type="text"
              onInput={this.handlePokeName}
              placeholder="Enter Pokemon Name" />
            <Button className='mb-3' variant="outline-dark" type="submit">Catch 'em!</Button>
          </Form>
        </Container>

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
              <Button variant="dark" onClick={() => this.addPokemon(this.state.name, this.state.types, this.state.id, this.state.img)} >Add to library</Button>
            </Modal.Footer>
          </Modal>
        </Container>
        {this.state.showCards ?
          <Container>
            <Button variant="outline-dark" onClick={() => this.setState({ showCards: false })}>Back</Button>
            <Row xs={1} sm={2} md={3} lg={6}>
              {pokemon}
            </Row>
          </Container>
          : <Container className='type-icon-container'>
            <Row xs={1} sm={2} md={3} lg={6}>
              <img className="type-icon"
                src='./img/Pokemon_Type_Icon_Fire.png'
                alt='fire icon'
                onClick={() => this.findByType('Fire')} />
              <img className="type-icon"
                src='./img/Pokemon_Type_Icon_Water.png'
                alt='water icon'
                onClick={() => this.findByType('Water')} />
              <img className="type-icon"
                src='./img/Pokemon_Type_Icon_Grass.png'
                alt='grass icon'
                onClick={() => this.findByType('Grass')} />
              <img className="type-icon"
                src='./img/Pokemon_Type_Icon_Dark.png'
                alt='dark icon'
                onClick={() => this.findByType('Darkness')} />
              <img className="type-icon"
                src='./img/Pokemon_Type_Icon_Dragon.png'
                alt='dragon icon'
                onClick={() => this.findByType('Dragon')} />
              <img className="type-icon"
                src='./img/Pokemon_Type_Icon_Electric.png'
                alt='lightning icon'
                onClick={() => this.findByType('Lightning')} />
              <img className="type-icon"
                src='./img/Pokemon_Type_Icon_Fairy.png'
                alt='fairy icon'
                onClick={() => this.findByType('Fairy')} />
              <img className="type-icon"
                src='./img/Pokemon_Type_Icon_Fighting.png'
                alt='fighting icon'
                onClick={() => this.findByType('Fighting')} />
              <img className="type-icon"
                src='./img/Pokemon_Type_Icon_Normal.png'
                alt='colorless icon'
                onClick={() => this.findByType('Colorless')} />
              <img className="type-icon"
                src='./img/Pokemon_Type_Icon_Psychic.png'
                alt='psychic icon'
                onClick={() => this.findByType('Psychic')} />
              <img className="type-icon"
                src='./img/Pokemon_Type_Icon_Steel.png'
                alt='metal icon'
                onClick={() => this.findByType('Metal')} />
              <img className="type-icon"
                src='./img/Pokemon_Type_Icon_Ghost.png'
                alt='ghost icon'
                onClick={() => this.findByType('Psychic')} />
            </Row>
          </Container>}
      </>
    );
  }
}

export default withAuth0(App);