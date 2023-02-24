const queryString = document.location.search;

const parameters = new URLSearchParams(queryString);

const quote = parameters.get("quote");

console.log(quote);




fetchQuote();