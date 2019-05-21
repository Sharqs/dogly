import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

const STYLES = {
  color: "blue"
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
