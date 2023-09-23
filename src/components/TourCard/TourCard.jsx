import React from 'react';

const TourCard = ({item}) => {
    console.log(item)
    return (
        <div>
           <h2>{item.title}</h2> 
           <h2>{item.description}</h2>
           <img src={item.image} alt='' />
           <h2>{item.category}</h2>
           <h2>{item.price} сом</h2>
        </div>
    );
};

export default TourCard;