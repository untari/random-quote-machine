import {  NEW_QUOTE } from '../Redux';
export const newQuote = randomNo => ({
    type: NEW_QUOTE,
    payload: randomNo,
});
