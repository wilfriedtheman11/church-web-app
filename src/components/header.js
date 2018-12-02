import React, { Component } from 'react';
import Nav from "./nav";

class Header extends Component {
  render() {
    return (

      <header>
      <Nav/>
        <div className="head">
            <h1>Grace< br/>Life< br/>Fellowship< br/>Church</h1>
            <div>
              <p></p>
              <div><a className="contact" href="#">Contact Us</a></div>
            </div>
        </div>

      </header>

    );
  }
}

export default Header;
