import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class Dog extends Component {
  render() {

    return (
      <div className="dog">
        <img src={this.props.src} alt="" />
        <br />
        <Link to={`/dogs/${this.props.name}`}>{this.props.name}</Link>
      </div>)
  }
}
export default Dog;