import React from 'react';
import logo from './../logo.svg';
import './Menu.css';

const Menu = () => <nav id='menu'>
  <div id='logo'>
    <img src={logo} className="App-logo" alt="logo" />
  </div>
  <ul>
    <li id='manage-coverage'><button>Manage</button></li>
    <li id='request-coverage'><button>Request</button></li>
    <li id='eolis'><button>Eolis</button></li>
  </ul>
</nav>;

export default Menu;