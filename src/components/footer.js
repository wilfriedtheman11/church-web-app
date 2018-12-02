import React, { Component } from 'react';


class Footer extends Component {
  render() {
    return (

      <footer>
          <h3>Grace Life Fellowship Church</h3>
          <p>8237 kenton Avenue <br/>Skokie, IL, 60076< br/> 7086067103</p>
          <ul>
            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
            <li><a href="#"><i className="fab fa-youtube"></i></a></li>
          </ul>
      </footer>

    );
  }
}

export default Footer;
