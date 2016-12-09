import React, { Component } from 'react';
import { PanelGroup, Panel } from 'react-bootstrap';
import { titleize } from '../helpers';
import '../css/LeftNav.css';

class LeftNav extends Component {
  constructor() {
    super();
    this.renderBody = this.renderBody.bind(this);
  }

  renderBody(key, index) {
    const item = this.props.items[key];

    return(
      <Panel key={item.name} header={titleize(item.name)} eventKey={index}>
        {item.name}
      </Panel>
    )
  }

  render() {
    const itemIds = Object.keys(this.props.items);

    return(
      <div>
        <h4 className="field-groups">Field Groups</h4>
        <PanelGroup accordion>
          {itemIds.map((id, index) => this.renderBody(id, index))}
        </PanelGroup>
      </div>
    )
  }
}

export default LeftNav;