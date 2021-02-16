import React from 'react';
import {Card,Button} from "react-bootstrap"

 export const FetchingDataFromJsonChild = ({itemCurrent}) => {
    return (
        <div>
            <h1>helloooo gyj</h1>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={itemCurrent.image} atl="image" />
  <Card.Body>
    <Card.Title>React</Card.Title>
    <Card.Text>
     this is react app
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
    <Button variant="primary">Go somewhere</Button>
    <Button variant="primary">Go somewhere</Button>
    
  </Card.Body>
</Card>
        </div>
    );
};

