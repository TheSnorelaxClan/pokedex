import React from 'react';
// import ReactDOM from 'react-dom';
import { Card, Container, Row, Col } from 'react-bootstrap';
class Header extends React.Component {
  render() {
    return (
      <>
        <br />
        <br />
        <h2 class="text-center">Project Team </h2>
        <br />
        <br />
        <br />
        <Container>

          <Col className='md-5 mt-5 h-100'>
            <Container><Row className="d-flex justify-content-between h-100 mt-10 p-3" xs={1} sm={2} md={3} lg={5} >
            
            <Card style={{ width: '15rem' }} className="h-100 x-10 p-3 card-container">
              <Card.Title>
                <p> Brentice Loper</p>
              </Card.Title>
              <Card.Text>
                <p>Pokemon Breeder </p>
              </Card.Text>
              <Card.Img
                className="type-icon"
                src='./img/Pokemon_Type_Icon_Fighting.png'
                alt='fighting icon'
              />

              <Card.Body>
                <Card.Text>
                  <p>I’m Brentice Loper! I was an Aviation Ordnanceman in the United States Navy. I was enlisted for four years and separated in 2019. I’m on my way to be a full stack developer by way of Code Fellows and moving onto a software developer career soon after graduating. I currently have an associates in Computer Science and should have a completed bachelors by the end of 2023.</p>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="h-100 p-3 card-container" style={{ width: '15rem' }} >
              <Card.Title>
                <p> Matthew Larkin</p>
              </Card.Title>
              <Card.Text>
                <p>Pokemon Gym Leader </p>
              </Card.Text>
              <Card.Img
                className="type-icon"
                src='./img/Pokemon_Type_Icon_Dark.png'
                alt='dark icon'
              />
              <Card.Body>
                <Card.Text>
                  <p>Matthew is an Air Force veteran with over six years of experience in IT, working as both a Network Technician and a System Administrator. Now he is attending Code Fellows to further develop himself and pursue his goal of becoming a software developer. He is passionate about using code to create adaptable, customer oriented solutions.</p>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: '15rem' }} className="h-100 p-3 card-container">
              <Card.Title>
                <p> Ricky Plaza</p>
              </Card.Title>
              <Card.Text>
                <p>Pokemon Master </p>
              </Card.Text>
              <Card.Img
                className="type-icon"
                src='./img/Pokemon_Type_Icon_Dragon.png'
                alt='dragon icon'
              />
              <Card.Body>
                <Card.Text>
                  <p>I am an U.S. Army veteran who has began a career as a software developer. I did this to be able to use my skills of problem solving and staying calm under pressure as an asset to thrive in the technology field. I was interested in entering a stem field and staying up to date with current day technologies. My ideal environment is a dynamic high pace and competitive work place where I can use my skills to complete the mission.</p>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: '15rem' }} className="h-100 p-3 card-container">
              <Card.Title>
                <p> Rui Guo</p>
              </Card.Title>
              <Card.Text>
                <p>Pokemon Novice</p>
              </Card.Text>
              <Card.Img
                className="type-icon"
                src='./img/Pokemon_Type_Icon_Grass.png'
                alt='grass icon'
                onClick={() => this.findByType('Grass')} />

              <Card.Body>
                <Card.Text>
                  <p>Rui Guo is U.S Army veteran. He graduated from LSU and joined in the U.S Army after in order to pursue my military career. His heart make him want to re-join the IT industry after his military contract. "so here I am." he said.                                                                            </p>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: '15rem' }} className="h-100 p-3 card-container">
              <Card.Title>
                <p>Stephanie Hill</p>
              </Card.Title>
              <Card.Text>
                <p>Pokemon Trainer</p>
              </Card.Text>
              <Card.Img
                className="type-icon"
                src='./img/Pokemon_Type_Icon_Electric.png'
                alt='lightning icon'
              />

              <Card.Body>
                <Card.Text>
                  <p>Stephanie is currently a student at Code Fellows working on a career change. She has spent many years working in seasonal hospitality which has given her expertise in customer service, teamwork, and working efficiently under pressure. She is devoted to developing her skill set so she can pursue a career in tech developing equitable software solutions that both assist and inspire a diverse group of users.</p>
                </Card.Text>
              </Card.Body>
            </Card>
            </Row>
            </Container>
          </Col>
        </Container>
      </>
    );
  }
}

export default Header;
