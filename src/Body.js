import React, { Component } from 'react';
import {Container, Row, Col } from 'reactstrap';

export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      display: ''
    })
  }


  render() {
    return (
      <Container className="App">
        <Row className="row">
          <Col className="col-md-8">
            <h1>Hello</h1>
          </Col>
        </Row>
      </Container>
    );
  }
} 