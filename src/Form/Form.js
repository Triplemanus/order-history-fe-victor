import React, { Component } from 'react';
import './Form.css';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageURL:'',
      name: '',
      description: '',
      price: ''
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.tartget.value });
  }

  addPurchase = event => {
    event.preventDefault();

  }

  render() {
    return (
      <form>
        <input 
        type="text"
        placeholder="Image URL"
        name='imageURL'
        value={this.state.imageURL}
        onChange={event => this.handleChange(event)}
        />
        <input 
        type="text"
        placeholder="Name"
        name='name'
        value={this.state.name}
        onChange={event => this.handleChange(event)}
        />
        <input 
        type="text"
        placeholder="Description"
        name='description'
        value={this.state.description}
        onChange={event => this.handleChange(event)}
        />
        <input 
        type="text"
        placeholder="Price"
        name='price'
        value={this.state.price}
        onChange={event => this.handleChange(event)}
        />
        <button onClick={event => this.submitPurchase(event)}>Add Purchase></button>
      </form>
      )
  }

}