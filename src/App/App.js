import React, { Component } from 'react';
import './App.css';
import CardContainer from '../CardContainer/CardContainer';
import Form from '../Form/Form';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cards: [ 
      //   id: '',
      // image: '',
      // name: '',
      // description: '',
      // price: 0 
    ]
    }
    this.deleteOrder = this.deleteOrder.bind(this);
  }

  deleteOrder(cardID) {

  }
  componentDidMount() {
    let orders;
    fetch('http://localhost:3001/api/v1/purchases	')
    .then(response => response.json())
    .then(data => {
      orders = data.map(order => {
        this.setState({ cards: [...this.state.cards, {
          id: order.id, 
          image: order.img,
          name: order.name,
          description: order.description,
          price: order.price}]})
      });
    })
    .catch(error => console.log(error));
   // this.state = this.state.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
  }

  addPurchase = (newPurchase) => {
   

  }
  deleteOrder(orderId) {

  }

  render() {
    console.log("Hola! state is ", this.state)
    return (
      <div className="App">
        <header>
          <h1 className='app-title'>My Order History</h1>
          <div className='purchase-form'>
            <Form addPurchase={this.addPurchase} />
          </div>
        </header>
        <div className='purchase-container'>
          <CardContainer cards={this.state.cards} deleteOrder={this.deleteOrder} />
        </div>
      </div>
    );
  }
}

export default App;
