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
    const props = item.containing_object === undefined ? item.properties : item.containing_object.properties;

    if (props !== undefined) {
      return(
        <Panel key={item.name} header={titleize(item.name)} eventKey={index}>
          {props.map(
            (prop) => <div key={prop.name} className="panel-body-prop">{titleize(prop.name)}<br/></div>
          )}
        </Panel>
      )
    } else {
      return(
        <Panel key={item.name} header={titleize(item.name)} eventKey={index}>
          <div key={item.name} className="panel-body-prop">{titleize(item.name)}</div>
        </Panel>
      )
    }
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