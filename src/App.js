import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import DogProfile from './DogProfile';
import Doglist from './Doglist';
import dogDefaults from './dogDefaults';
import './App.css';

import Nav from './Nav';

class App extends Component {
  static defaultProps = {
    dogs: dogDefaults
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path='/dogs' render={() => <div><Nav /><Doglist dogs={this.props.dogs} /></div>} />
            <Route exact path='/dogs/:dog' render=
              {
                (rtProps) => {
                  return (<div><Nav /><DogProfile
                    dog={
                      this.props.dogs.filter(dog => rtProps.match.params.dog === dog.name)[0]
                    }
                    rtProps={rtProps}
                  /></div>)
                }}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
