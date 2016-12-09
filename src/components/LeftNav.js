import React, { Component } from 'react';
import { PanelGroup, Panel } from 'react-bootstrap';
import { titleize } from '../helpers';
import '../css/LeftNav.css';

import Scroll from 'react-scroll';
const scroller = Scroll.scroller;

class LeftNav extends Component {
  constructor() {
    super();
    this.renderBody     = this.renderBody.bind(this);
    this.scrollToProp   = this.scrollToProp.bind(this);
  }

  renderBody(key, index) {
    const item = this.props.items[key];
    const props = item.containing_object === undefined ? item.properties : item.containing_object.properties;

    if (props !== undefined) {
      return(
        <Panel key={item.name} header={titleize(item.name)} eventKey={index} onClick={() => this.props.updateRightNav(item.name)}>
          {props.map(
            (prop) => 
              <div key={prop.name} className="panel-body-prop" onClick={() => this.scrollToProp(prop.name)}>
                {titleize(prop.name)}<br/>
              </div>
          )}
        </Panel>
      )
    } else {
      return(
        <Panel key={item.name} header={titleize(item.name)} eventKey={index} onClick={() => this.props.updateRightNav(item.name)}>
          <div key={item.name} className="panel-body-prop" onClick={() => this.scrollToProp(item.name)}>{titleize(item.name)}</div>
        </Panel>
      )
    }
  }

  scrollToProp(name) {
    scroller.scrollTo(name, {
      duration: 1000,
      delay: 100,
      smooth: true,
    });
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

LeftNav.propTypes = {
  items: React.PropTypes.object.isRequired
}

export default LeftNav;