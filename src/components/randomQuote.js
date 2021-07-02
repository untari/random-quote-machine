import React, { Component } from 'react';
import Loading from './loading';
import './App.css';

class RandomQuote extends Component {
    constructor(){
        super();
        
    }
    render(){
        return(
            <div className="wrapper" >
                <div id="quote-box">
                    <div className="quote-text">
                        
                    </div>
                    <div className="quote-author">
                    
                    </div>
                    <div className="button">
                        <a href={`https://twitter.com/intent/tweet?hashtags=quotes,freecodecamp&related=freecodecamp&text="${quote}" %0D%0A- ${author}%0D%0A`}
                        className="button"
                        id="tweet-quote"
                        title="Tweet this quote!"
                        target="_blank"
                        rel="noopener noreferrer"> TWEET</a>
                        <button className="button" id="new-quote">New Quotes</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default RandomQuote;
