import React, { Component } from 'react';
import '../css/navigation.css';

import Clock from '../Components/Clock';

class Navigation extends Component {
  render() {
    return (
      <nav className="navigation container-fluid">
        <div className="nav-container">

          <div className="col-6 brand">
            <h1>ÖSTRAGYMNASIET</h1>
          </div>
          <div className="col-4">
            <p>Navigation here</p>
          </div>
          
          < Clock currentDate = {this.props.currentDate} />

        </div>
      </nav>
    );
  }
}

export default Navigation;
