import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';

const CardItems = (props) => {
  console.log(props.foods);
    const {image,title,text} = props.foods;
  
    return (
         <div>
        <CardDeck>
            <Card>
              <Card.Img variant="top" src={image} />
              <Card.Body>
              <Card.Title>{title}</Card.Title>
                <Card.Text>
                  {text}
                </Card.Text>
                
              </Card.Body>
            </Card>

                <Card>
                  <Card.Img variant="top" src={image} />
                  <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                    {text}
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card>
                  <Card.Img variant="top" src={image} />
                  <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                    {text}
                    </Card.Text>
                  </Card.Body>
                </Card>

       </CardDeck>
       
</div>
    );
};

export default CardItems;