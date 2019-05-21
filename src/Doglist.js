import React, { Component } from 'react';
import Dog from './Dog';
import uuid from 'uuidv4';

class Doglist extends Component{
  constructor(props){
    super(props);
    this.state = {
      dogs: []
    }
  }

  render(){
    let dogs = this.props.dogs.map(dog => <Dog key={uuid()} {...dog} />)
    return (
    <div> 
      <br />
      <br />
      <h1>HELLOZ. WE HAVE DOGZ. CLICK ON THEM FOR MORE INFO.</h1>
      <div className='DogContainer'>{dogs}</div>
       
    </div>)
  }
}
export default Doglist;