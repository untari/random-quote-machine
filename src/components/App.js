import React, { Component } from 'react';
import RandomQuote from './randomQuote';
import { Provider } from 'react-redux';
import { store } from '../store';
import './App.css';

class App extends Component{
  render(){
    return (
        <Provider store={store}>
            <RandomQuote />
        </Provider>
    );
  }
}

export default App;
