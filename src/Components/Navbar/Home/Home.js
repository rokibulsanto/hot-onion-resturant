import React, { useState } from 'react';
import CardItems from '../CardItems/CardItems';
import Data from '../FakeData/Data';

const Home = () => {
    const [allFood,setAllFood] = useState([Data]);
    console.log(allFood);
    
   
    return (
        <div>
            <div style={{textAlign:'center'}}>
                <button>Breakfast</button>
                <button>Lunch</button>
                <button>Dinner</button>
            </div>
            
            {
                allFood.map(fd => <CardItems foods ={fd}></CardItems>)
            }
        </div>
    );
};

export default Home;