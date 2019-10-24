import React, { Component } from 'react';

import './App.css'
import { Menu } from './components/MenuComponent';


class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Menu />
      </div>
    );
  }
}

export default App;
