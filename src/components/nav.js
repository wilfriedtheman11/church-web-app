import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <nav>
          <ul>
              <li className="logo">Grace Life<span> Fellowship Church</span></li>
          </ul>
          <ul>
              <li><a href="#">Messages</a></li>
              <li><a href="#">Calendar</a></li>
              <li><a href="#">Mission Work</a></li>
              <li><a href="#">Music</a></li>
          </ul>
      </nav>
    );
  }
}

export default Nav;
