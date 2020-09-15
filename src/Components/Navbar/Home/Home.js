import React, { useEffect, useState } from 'react';
import { CardDeck } from 'react-bootstrap';
import CardItems from '../CardItems/CardItems';
import Data from '../FakeData/Data';

const Home = () => {
    const [allFood,setAllFood] = useState(Data);
    console.log(allFood);
    const [category,setCategory] = useState('Lunch');
    useEffect(()=> {
       const filterData =  Data.filter(item => item.category === category)
       setAllFood(filterData);
    },[category])
   
    return (
        <div>
            <div style={{textAlign:'center',margin:'0px 6px 2px 2px'}}>
                <button onClick={()=> setCategory('Breakfast')}>Breakfast</button>
                <button onClick={()=> setCategory('Lunch')}>Lunch</button>
                <button onClick={()=> setCategory('Dinner')}>Dinner</button>
            </div>
            <div className="row">
            
            {
                allFood.map(fd => <CardItems foods ={fd}></CardItems>)
            }
            </div>
           
        </div>
    );
};

export default Home;