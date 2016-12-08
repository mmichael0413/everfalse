import React, { Component } from 'react';
import { PanelGroup, Panel } from 'react-bootstrap';
import '../css/LeftNav.css';
import menuItems from '../../schema.json';
import { titleize } from '../helpers';

class LeftNav extends Component {
  componentWillMount() {
    console.log(menuItems);
  }

  render() {
    return(
      <div className="left-panel">
        <h4 className="field-groups">Field Groups</h4>
        <PanelGroup accordion>
          <Panel header={ titleize(menuItems[0]['name']) } eventKey={1}>poop</Panel>
        </PanelGroup>
      </div>
    )
  }
}

export default LeftNav;