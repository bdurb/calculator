import React, { Component } from 'react';
import './Body.css';

export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      display: '0'
    })
  }


  render() {
    return (
      <div className="main">
        <h1>Do some calculations here</h1>
      </div>
    );
  }
} 