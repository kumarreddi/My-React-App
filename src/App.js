import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';

const Button = (props)=>{
  return (
    <button onClick={props.onClick}>Get a Joke!</button>
  );
}

const Span = (props)=>{
  return (
    <span>{props.innerHTML}</span>
  );
}

class App extends Component {

  state={
    joke: ''
  }

  getJoke = (event)=>{
    event.preventDefault();
    Axios.get('https://geek-jokes.sameerkumar.website/api')
    .then(resp => 
          this.setState({joke: resp.data})
          );
  }
  
  render() {
    return (
      <div className="App">
        <Button onClick={this.getJoke} />
        <br />
        <Span innerHTML={this.state.joke} />
      </div>
    );
  }
}

export default App;
