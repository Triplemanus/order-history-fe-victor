import React, { Component } from 'react';
import './App.css';
import Card from '../Card/Card';

class App extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      image: '',
      name: '',
      description: '',
      price: 0
    }
  }

  deleteHistory(cardID) {

  }
  componentDidMount() {
    let orders;
    fetch('http://localhost:3001/api/v1/purchases	')
    .then(response => response.json())
    .then(data => {
      orders = data.map(order => {
        this.setState({ 
          id: order.id, 
          image: order.img,
          name: order.name,
          description: order.description,
          price: order.price});
      });
    })
    .catch(error => console.log(error));
    this.state = this.state.bind(this);
  };

  handleClick() {
    
  }
  render() {
    console.log("Hola! state is ", this.state)
    return (
      <div className="App">
        <header>
          <h1 className='app-title'>My Order History</h1>
          <div className='purchase-form'>

          </div>
        </header>
        <div className='purchase-container'>
          <Card data={this.state}  />
        </div>
      </div>
    );
  }
}

export default App;
