import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

import {Card ,Button} from 'react-bootstrap';

const Game = (props) => {
   

    const{name,price,picture,_id,email ,quantity}=props.game;
    return (
       <div >
          
         <div>
   <Card style={{ width: '22rem',backgroundColor: "rgba(200, 113, 240, 0.534)" ,padding:'10px',marginTop:"30px"}}>
  <Card.Img variant="top" src={picture} />
  <Card.Body>
    <Card.Title>Name : {name}</Card.Title>
    <Card.Title>Price : {price}</Card.Title>
    <Card.Title>Id :{_id}</Card.Title>
    <Card.Title>Email: {email}</Card.Title>
    <Card.Title>Available Now : {quantity}</Card.Title>
    
    <Button
       onClick={()=>props.HandleClick(props.game)}
    variant="primary m-4">Order Now <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon> </Button>
  </Card.Body>
</Card>
   </div>
           
           
       </div> 
    );
};

export default Game;