import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import Header from './Header';
import LeftNav from './LeftNav';
import RightNav from './RightNav';
import menuItems from '../../schema.json';
import '../css/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { items: {} };
  }

  componentWillMount() {
    const items = {...this.state.items};
    menuItems.map((item) => {
      items[`${item.name}`] = item;
    });
    this.setState({ items });
  }

  render() {
    const key = Object.keys(this.state.items)[0];

    return (
      <div className="main">
        <Col xs={6} md={4} className="nav-left">
          <Header />
          <LeftNav items={this.state.items} />
        </Col>
        <Col xs={12} md={8} className="nav-right">
          <RightNav items={this.state.items} item={key} />
        </Col>
      </div>
    );
  }
}

export default App;
