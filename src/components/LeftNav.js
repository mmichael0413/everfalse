import React, { Component } from 'react';
import { PanelGroup, Panel } from 'react-bootstrap';
import '../css/LeftNav.css';
import content from '../../schema.json';

class LeftNav extends Component {
  componentWillMount() {
    console.log(content);
  }

  render() {
    return(
      <div className="left-panel">
        <h4 className="field-groups">Field Groups</h4>
        <PanelGroup accordion>
          <Panel header="Panel 1" eventKey="1">Panel 1 content</Panel>
          <Panel header="Panel 2" eventKey="2">Panel 2 content</Panel>
        </PanelGroup>
      </div>
    )
  }
}

export default LeftNav;