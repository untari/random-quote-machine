import React, { Component } from 'react';
import RandomQuote from './randomQuote';
import './App.css';

class App extends Component{
  render(){
    return (
        <div className="App">
            <RandomQuote />
        </div>
    );
  }
}

export default App;
