import React, { Component } from 'react';

class SidebarRow extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <a href="">Click me</a>
      </div>
    );
  }
}

export default SidebarRow;
