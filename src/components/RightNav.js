import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { capitalize, titleize } from '../helpers';
import '../css/RightNav.css';

class RightNav extends Component {
  constructor() {
    super();
    this.renderProperty = this.renderProperty.bind(this);
    this.renderUsage    = this.renderUsage.bind(this);
  }

  renderUsage(name) {
    return(
      <span key={name} className={`usage ${name}`}>{titleize(name)}</span>
    )
  }

  renderProperty(prop) {
    return(
      <div key={prop.name} className="prop">
        <h4>{titleize(prop.name)}</h4>
        <Row>
          <Col xs={6} md={4} className="prop-left">
            <div className="prop-left-title">Type</div>
            <div className="prop-left-title">Usage</div>
            <div className="prop-left-title">EverTrue Field Name</div>
          </Col>
          <Col xs={12} md={8} className="prop-right">
            <div className="prop-right-details">{capitalize(prop.data_type)}</div>
            <div className="prop-right-details usage">{prop.app_keys.map(this.renderUsage)}</div>
            <div className="prop-right-details name">{prop.name}</div>
          </Col>
        </Row>
      </div>
    )
  }

  render() {
    const key = this.props.item;
    const item = this.props.items[key];
    const props = item.containing_object === undefined ? item.properties : item.containing_object.properties;

    return(
      <div className="panel-contents-right">
        <h3 className="panel-header-right">{titleize(item.name)}</h3>
        {props.map(this.renderProperty)}
      </div>
    )
  }
}

export default RightNav;