import {  FETCH_QUOTES, NEW_QUOTE } from '../Redux';

// FETCH_QUOTES
export const fetchQuotes = () => dispatch => {
    fetch('data/quotes.json')
    
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      console.log('ok');
      return response.json();
    })
    .then(data => {
        dispatch({
            type: FETCH_QUOTES,
            payload: data.quotes
        });
    })
    .catch(error => {
        console.log(error);
    })
}

//NEW_QUOTE
export const newQuote = randomNo => ({
    type: NEW_QUOTE,
    payload: randomNo,
});
