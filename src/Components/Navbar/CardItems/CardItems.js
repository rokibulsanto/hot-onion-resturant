import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';

const CardItems = (props) => {
  console.log(props.foods);
    const {image,title,text,price} = props.foods;
  
    return (

            <Card style={{width:'25%',float:'left',margin:'10px 3%'}}>
              <Card.Img variant="top" src={image} />
              <Card.Body>
              <Card.Title>{title}</Card.Title>
                <Card.Text>
                  {text}
                </Card.Text>
                <h4>Price:$ {price}</h4>
              </Card.Body>
            </Card>
    );
};

export default CardItems;