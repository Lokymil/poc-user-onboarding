import React, { Component } from 'react';
import './App.css';
import Menu from './Menu/Menu';
import Header from './Header/Header';
import Content from './Content/Content';
import UserOnBoarding from './UserOnBoarding/UserOnBoarding';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <div className='content'>
          <Header />
          <Content />
        </div>
        <UserOnBoarding />
      </div>
    );
  }
}

export default App;
