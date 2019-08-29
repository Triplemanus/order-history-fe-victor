import React from 'react';
import './Card.css';

const Card = ({ id, name, description, price, image, deleteId }) => {

  return (
    <section>
      <div>
        <img src="{image}" alt="Purchased product" />
      </div>
      <article className="inventory-content">
        <h3>{this.name}</h3>
        <p>{this.description}</p>
      </article>
      <article>
        <h2>{this.price}</h2>
        <button >Remove From History</button>
      </article>
    </section>
    )
}

export default Card;