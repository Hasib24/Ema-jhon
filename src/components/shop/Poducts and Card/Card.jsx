import React from 'react';
import './Card.css'

const Card = ({card}) => {
    return (
        <div className='card'>
            Hellow from card! {card.length}
        </div>
    );
};

export default Card;