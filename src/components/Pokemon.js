import React from "react";
import { Card, Button, Col } from 'react-bootstrap';

class Pokemon extends React.Component{

  render(){
    return(
      <Col className='md-5 mt-5'>
      <Card
      className="d-flex align-items-center justify-content-center text-center bg-transparent"
      >
        <Card.Img src={this.props.img} alt={this.props.name}/>
        <Card.Body>
          <Button variant="dark" onClick={()=>this.props.addPokemon(this.props.name, this.props.types, this.props.id, this.props.img)}>Add to library</Button>
        </Card.Body>
      </Card>
      </Col>
    )
  }
}

export default Pokemon;