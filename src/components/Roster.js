import React from 'react';
import axios from 'axios';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import './Roster.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allPokemon: [],
      team: [],
      showSwap: false,
    }
  }

  getPokemon = async () => {
    try {
      let results = await axios.get(`${process.env.REACT_APP_SERVER}/pokemon`);
      this.setState({
        allPokemon: results.data
      })
    } catch (error) {
      console.log('Error getting pokemon info ', error.response.data)
    }
  }  

  getTeam = async () => {
    try {
      let results = await axios.get(`${process.env.REACT_APP_SERVER}/team`);
      this.setState({
        team: results.data
      })
    } catch (error) {
      console.log('Error getting team info ', error.response.data)
    }
  }

  componentDidMount() {
    this.getPokemon();
    this.getTeam();
  }

  deletePokemon = async (id) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/pokemon/${id}`;
      await axios.delete(url);
      this.getPokemon();
    } catch (error) {
      console.log('Issue deleting pokemon!', error.response.data);
    }
  }

  updatePokemon = async (pokemonToUpdate) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/pokemon/${pokemonToUpdate._id}`;
      await axios.put(url, this.state.newPokemon);
      this.getTeam();
      this.setState({
        showSwap: false
      })
    } catch (error) {
      console.log('Updated Pokemon: We have an error: ', error.response.data);
    }
  }

  handleUpdate = (name, types, id, img) => {
    let newPokemon = {
      name: name,
      types: types,
      id: id,
      img: img
    }
    this.setState({
      showSwap: true,
      newPokemon: newPokemon
    })
  }



  render() {

    let pokemon = this.state.allPokemon.map((pokemon)=>{
      return(
        <Col className='md-5 mt-5'>
        <Card key={pokemon._id}>
          <Card.Img src={pokemon.img} alt={pokemon.name}/>
          <Card.Footer>
            <Button variant="dark" onClick={()=>this.deletePokemon(pokemon._id)}>Delete</Button>
            <Button variant="dark" onClick={()=>this.handleUpdate(pokemon.name, pokemon.types, pokemon.id, pokemon.img)}>Add to team</Button>
          </Card.Footer>
        </Card>
        </Col>
      )
    });

    let team = this.state.team.map((pokemon)=>{
      return(
        <Col className='md-5 mt-5'>
          <Card key={pokemon._id}>
            <Card.Img src={pokemon.img} alt={pokemon.name}/>
            {this.state.showSwap?
            <Card.Footer>
              <Button onClick={()=>this.updatePokemon(pokemon)}>Swap</Button>
            </Card.Footer>
            :''}
          </Card>
        </Col>
      )
    });

    return (
      <>
      <h2>Team</h2>
      <Container>
      <Row sm={3} lg={6}>
      {team}
      </Row>
      </Container>
      <h2>Library</h2>
      <Container>
      <Row xs={2} sm={4} md={6} lg={8}>
      {pokemon}
      </Row>
      </Container>
      </>
    );
  }
}

export default Header;
