import React, { Component } from 'react';
import '../css/App.css';
import { Col } from 'react-bootstrap';
import Header from './Header';
import LeftNav from './LeftNav';

class App extends Component {
  render() {
    return (
      <div className="main">
        <Col xs={6} md={4} className="left-nav">
          <Header />
          <LeftNav />
        </Col>
        <Col xs={12} md={8}>
        </Col>
      </div>
    );
  }
}

export default App;
