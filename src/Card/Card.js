import React from 'react';
import './Card.css';

const Card = ({ id, image, name, description, price, deleteOrder }) => {
  console.log('Image url is ', {image})
  return (
    <section className='order-history'>
      <div>
        <img className="image" src={image} alt="Purchased product" />
      </div>
      <article className="inventory-content">
        <h3>{name}</h3>
        <p>{description}</p>
      </article>
      <article>
        <h2>${price}</h2>
        <button onClick={() => deleteOrder(id)}>Remove From History</button>
      </article>
    </section>
    )
}

export default Card;