import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import MainBlog from './components/MainBlog/MainBlog.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <MainBlog />
      </div>
    );
  }
}

export default App;
