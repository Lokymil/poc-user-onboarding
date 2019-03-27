import React from 'react';
import './Header.css';

const Header = () => <div className='header'>
  <div className='header--button'><button className='header-company-context'>Company</button></div>
  <div className='header--button'><button className='header-nav-account'>User</button></div>
  <div className='header--button'><button className='header-nav-support'>Contact</button></div>
</div>;

export default Header;