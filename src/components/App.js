import React, { Component } from 'react';
import RandomQuote from './randomQuote';
import { Provider } from 'react-redux';
import './App.css';

class App extends Component{
  render(){
    return (
        <Provider>
            <RandomQuote />
        </Provider>
    );
  }
}

export default App;
