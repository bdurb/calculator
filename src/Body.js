import React, { Component } from 'react';
import './Body.css';

export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      display: 0,
      displayTwo: 0
    })
  }

  handleAdd = () => {
    this.setState({display: this.state.display + 1})
  }

  handleAddTwo = () => {
    this.setState({displayTwo: this.state.displayTwo + 1})
  }

  handleMinus = () => {
    this.setState({display: this.state.display - 1})
  }

  handleMinusTwo = () => {
    this.setState({displayTwo: this.state.displayTwo - 1})
  }


  render() {
    return (
      <div className="main">
        <button onClick={this.handleAdd}>Click Me to Add!</button>
        <button onClick={this.handleMinus}>Click me to Subtract!</button>
        <h1>{this.state.display}</h1>
        <button onClick={this.handleAddTwo}>Click Me to Add!</button>
        <button onClick={this.handleMinusTwo}>Click me to Subtract!</button>
        <h1>{this.state.displayTwo}</h1>
        <h2>{this.state.display * this.state.displayTwo}</h2>
      </div>
    );
  }
} 