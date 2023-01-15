import React, { Component } from 'react';
import './Components/Navbar/Navbar.css'

class Navbar extends Component {
  render() {
    return (
      <nav>
        <a href="https://www.notion.so/">Home</a>
        <a href="https://www.notion.so/">About</a>
        <a href="https://www.notion.so/">Contact</a>
      </nav>
    );
  }
}

export default Navbar;