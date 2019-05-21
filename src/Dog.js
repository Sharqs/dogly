import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Dog extends Component {
  render() {

    return (
      <div>
        <img src={this.props.src} alt="" />
        <Link to={`/dogs/${this.props.name}`}>{this.props.name}</Link>
      </div>)
  }
}
export default Dog;