import React from 'react';
import {Card ,Button,CardGroup,Row ,Col,Container} from 'react-bootstrap';

const Game = (props) => {
    // console.log(props);

    const{index,name,price,picture,_id,email ,quantity}=props.game;
    return (
       <div >
          
   <div>
   <Card style={{ width: '22rem' }}>
  <Card.Img variant="top" src={picture} />
  <Card.Body>
    <Card.Title>Name : {name}</Card.Title>
    <Card.Title>Price : {price}</Card.Title>
    <Card.Title>Id :{_id}</Card.Title>
    <Card.Title>Email: {email}</Card.Title>
    <Card.Title>Available Now : {quantity}</Card.Title>
    
    <Button
       onClick={()=>props.HandleClick(props.game)}
    variant="primary m-4">Order Now</Button>
  </Card.Body>
</Card>
   </div>
           
           
       </div> 
    );
};

export default Game;