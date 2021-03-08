import React from 'react';
import {Card,CardImg,ListGroup,ListGroupItem,}  from 'react-bootstrap';
import "./MainHeader.css";
export const MainHeader = () => {
    return (
        <div>

<Card className="fk" style={{ width: '27rem' }}>
  <Card.Img width="400px"  src="Assets/Pickupbiz.jpg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga placeat minima consectetur officiis, nam eligendi voluptate explicabo tempora aliquam eveniet?
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">if you are bad i m your dad</Card.Link>
  </Card.Body>
</Card>
<button>submit</button>





        </div>
 );
}