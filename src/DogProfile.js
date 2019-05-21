import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import uuid from "uuidv4";

class DogProfile extends Component {
  render(){
    return (
    <div>
      <img src={this.props.dog.src} alt="" />
      <h2>{this.props.dog.name}</h2>
      <h4>{this.props.dog.age} years old</h4>
      <ul>{this.props.dog.facts.map(fact => <li key={uuid()}>{fact}</li>)}</ul>
      <Link to='/dogs'>Go Back</Link>
    </div>)
  }
}
export default DogProfile;