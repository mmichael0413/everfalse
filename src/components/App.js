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
    this.updateRightNav = this.updateRightNav.bind(this);
    this.state = { items: {}, currentItem: {} };
  }

  componentWillMount() {
    const items = {...this.state.items};
    menuItems.map((item) => {
      return items[`${item.name}`] = item;
    });
    const currentItem = Object.keys(items)[0];
    this.setState({ items, currentItem });
  }

  updateRightNav(name) {
    this.setState({ currentItem: name });
  }

  render() {
    return (
      <div className="main">
        <Col xs={6} md={4} className="nav-left">
          <Header />
          <LeftNav items={this.state.items} updateRightNav={this.updateRightNav} />
        </Col>
        <Col xs={12} md={8} className="nav-right">
          <RightNav items={this.state.items} currentItem={this.state.currentItem} />
        </Col>
      </div>
    );
  }
}

export default App;
