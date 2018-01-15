import React, { Component } from 'react';
import '../css/sidebar.css';

import SidebarRow from './SidebarRow';

class Sidebar extends Component {
  render() {
    return (
      <aside className="sidebar col-2">

        < SidebarRow className="sidebar-row sidebar-red"/>
        < SidebarRow className="sidebar-row sidebar-blue"/>
        < SidebarRow className="sidebar-row sidebar-green"/>
        < SidebarRow className="sidebar-row sidebar-orange"/>
        < SidebarRow className="sidebar-row sidebar-red"/>
        < SidebarRow className="sidebar-row sidebar-blue"/>
        < SidebarRow className="sidebar-row sidebar-green"/>
        < SidebarRow className="sidebar-row sidebar-orange"/>


      </aside>
    );
  }
}

export default Sidebar;
