import React from 'react';
import './CardContainer.css'
import Card from '../Card/Card';

const CardContainer = ({cards, deleteOrder}) => {
  const orderCards = cards.map(card => {
    return (
      <Card 
      id={card.id}
      image={card.image}
      name={card.name}
      description={card.description}
      price={card.price}
      key={card.id}
      deleteOrder={deleteOrder}
      />
    )
  })

  return(
    <div className='cards-container'>
      {orderCards}
    </div>
  )
}



export default CardContainer

