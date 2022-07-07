import React from 'react';
import axios from 'axios';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import './Roster.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allPokemon: [],
    }
  }

  getPokemon = async () => {
    try {
      let results = await axios.get(`${process.env.REACT_APP_SERVER}/pokemon`);
      this.setState({
        allPokemon: results.data
      })
    } catch (error) {
      console.log('We have an error: ', error.response.data)
    }
  }

  componentDidMount() {
    this.getPokemon();
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

  render() {

    let pokemon = this.state.allPokemon.map((pokemon)=>{
      return(
      <Col className='md-5 mt-5'>
      <Card key={pokemon._id}>
        <Card.Img src={pokemon.img} alt={pokemon.name}/>
        <Card.Footer>
          <Button variant="dark" onClick={()=>this.deletePokemon(pokemon._id)}>Delete</Button>
        </Card.Footer>
      </Card>
    </Col>
    )});

    return (
      <>
     <h2>Library</h2>
     <Container>
     <Row xs={1} sm={2} md={3} lg={5}>
     {pokemon}
     </Row>
     </Container>
     </>
    );
  }
}

export default Header;
