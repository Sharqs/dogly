import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import { SSL_OP_TLS_ROLLBACK_BUG } from 'constants';

const STYLES = {
  color: 'rgb(53, 53, 53)'
}

class Nav extends Component{
  render(){
    return (
      <nav>
        <NavLink exact to='/dogs' activeStyle={STYLES}>Home</NavLink>
        <NavLink exact to='/dogs/Whiskey'activeStyle={STYLES} >Whiskey</NavLink>
        <NavLink exact to='/dogs/Tubby' activeStyle={STYLES}>Tubby</NavLink>
        <NavLink exact to='/dogs/Perry' activeStyle={STYLES}>Perry</NavLink>
        <NavLink exact to='/dogs/Duke' activeStyle={STYLES}>Duke</NavLink>
      </nav>
    )
  }
}
export default Nav;
