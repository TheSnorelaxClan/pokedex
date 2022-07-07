import React from "react";
import { Card, Button } from 'react-bootstrap';

class Pokemon extends React.Component{

  render(){
    return(
      <Card>
        <Card.Img src={this.props.img} alt={this.props.name}/>
        <Card.Body>
          <Button onClick={()=>this.props.addPokemon(this.props.name, this.props.types, this.props.id, this.props.img)} variant="primary">Add to library</Button>
        </Card.Body>
      </Card>
    )
  }
}

export default Pokemon;