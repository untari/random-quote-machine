import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {  connect } from 'react-redux';
import {newQuote} from '../action/index';
import Loading from './loading';
import './App.css';

class RandomQuote extends Component {
    constructor(){
        super();
        this.getNewQuote = this.getNewQuote.bind(this);
    }
    componentDidMount(){
        
        this.getNewQuote();
    }
    getNewQuote() {
        const randomQuoteIndex = Math.floor(Math.random() * 102);
        this.props.newQuote(randomQuoteIndex);
    }
    render(){
        if(this.props.loading){
            return <Loading />;
        }
        const { quote, author } = this.props.quotes[this.props.randomNumber];
        
        return(
            <div className="wrapper" >
                <div id="quote-box">
                    <div className="quote-text">
                        <i className="fa fa-quote-left"></i>
                        <q id="text">{quote}</q>
                    </div>
                    <div className="quote-author">
                        <span id="author">{author}</span>
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
const mapStateToProps = state => ({
    quotes: state.quotes.data,
    randomNumber: state.quotes.randomNumber,
    loading: state.quotes.loading
});
const mapDispatchToProps = dispatch => bindActionCreators({
    newQuote
}, dispatch );
export default connect(mapStateToProps, mapDispatchToProps)( RandomQuote);
