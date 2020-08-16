import React, { Component } from 'react'

import { Navbar,NavDropdown,Nav,Col,Container,Row,Card,ListGroupItem,ListGroup } from 'react-bootstrap';
import './Dummy.css'

export class Dummy extends Component {
    render() {
        return (
            <div>

{/* <Container>
  <Row>
    <Col  sm={6} md={4} lg={4} xl={3}>
    <Card style={{ width: '35rem' }} bsClass="Card">
  <Card.Img variant="top" src="holder.js/100px180?text=Image cap"/>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
    </Col>



    <Col sm={6} md={4} lg={4} xl={3}>

    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180?text=Image cap"/>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
    </Col>




    <Col  sm={6} md={4} lg={4} xl={3}>

 <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180?text=Image cap"/>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
    </Col>



    <Col sm={6} md={4} lg={4} xl={3}>

 <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180?text=Image cap"/>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
    </Col><Col  sm={6} md={4} lg={4} xl={3}>

<Card style={{ width: '18rem' }}>
 <Card.Img variant="top" src="holder.js/100px180?text=Image cap"/>
 <Card.Body>
   <Card.Title>Card Title</Card.Title>
   <Card.Text>
     Some quick example text to build on the card title and make up the bulk of
     the card's content.
   </Card.Text>
 </Card.Body>
 <ListGroup className="list-group-flush">
   <ListGroupItem>Cras justo odio</ListGroupItem>
   <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
   <ListGroupItem>Vestibulum at eros</ListGroupItem>
 </ListGroup>
 <Card.Body>
   <Card.Link href="#">Card Link</Card.Link>
   <Card.Link href="#">Another Link</Card.Link>
 </Card.Body>
</Card>
   </Col><Col   sm={12} md={4} lg={4} xl={3}>

<Card style={{ width: '18rem' }}>
 <Card.Img variant="top" src="holder.js/100px180?text=Image cap"/>
 <Card.Body>
   <Card.Title>Card Title</Card.Title>
   <Card.Text>
     Some quick example text to build on the card title and make up the bulk of
     the card's content.
   </Card.Text>
 </Card.Body>
 <ListGroup className="list-group-flush">
   <ListGroupItem>Cras justo odio</ListGroupItem>
   <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
   <ListGroupItem>Vestibulum at eros</ListGroupItem>
 </ListGroup>
 <Card.Body>
   <Card.Link href="#">Card Link</Card.Link>
   <Card.Link href="#">Another Link</Card.Link>
 </Card.Body>
</Card>
   </Col><Col sm={12} md={4} lg={4} xl={3}>

<Card style={{ width: '18rem' }}>
 <Card.Img variant="top" src="holder.js/100px180?text=Image cap"/>
 <Card.Body>
   <Card.Title>Card Title</Card.Title>
   <Card.Text>
     Some quick example text to build on the card title and make up the bulk of
     the card's content.
   </Card.Text>
 </Card.Body>
 <ListGroup className="list-group-flush">
   <ListGroupItem>Cras justo odio</ListGroupItem>
   <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
   <ListGroupItem>Vestibulum at eros</ListGroupItem>
 </ListGroup>
 <Card.Body>
   <Card.Link href="#">Card Link</Card.Link>
   <Card.Link href="#">Another Link</Card.Link>
 </Card.Body>
</Card>
   </Col>
    
  </Row>
 </Container> */}

<div class="container">
  <div class="select-wrapper">
    <select class="select">
      <option value="1" selected="selected">Option Number 1</option>
      <option value="2">A Much Longer Option Than Option 1</option>
      <option value="3">Option 3</option>
      <option value="4">Option 4</option>
      <option value="5">Option 5</option>
    </select>
    <span class="select-icon entypo-arrow-combo"></span>
  </div>
</div>
            </div>
        )
    }
}

export default Dummy







