import { useState, useEffect } from "react";

// Fetch a random quote from an API.  
const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";

// fetchQuote is an async function, because I need to use await to retrieve information from the API.  
// Use fetch() to retrieve the object in JSON format as a string, then use json() to convert the string to object.  
// jsonRESPONSE is an object that has a property called quote, and that is the quote that we want to retrieve.  
// The quote property is also an object that contains two objects, which are text and author.  
// A quote is fetched when the component is first re-rendered, a different quote will be fetched whenever I click on the button.  
// I use useEffect to generate the first quote, since useEffect does not take async function as its first argument, 
// I pass in an anonymous synchronous function as argument, then inside that function, I invoke fetchQuote() to fetch a quote from the API, 
// then I invoke getInitialQuote.  The function anonymous synchronous function inside useEffect will only invoke once as the second argument is an empty array.  
export default function QuoteFetcher() {
    const [quote, setQuote] = useState({text: "", author: ""});
    useEffect(() => {
        fetchQuote();
    }, []);
    async function fetchQuote() {
        const response = await fetch(RANDOM_QUOTE_URL);
        const jsonRESPONSE = await response.json();
        const randomQuote = jsonRESPONSE.quote;
        setQuote(randomQuote);
    }
    return (
        <div>
            <button onClick={fetchQuote}>Get Quote Using Handler</button>
            <h1>{quote.text}</h1>
            <h3>{quote.author}</h3>
        </div>
    );
}