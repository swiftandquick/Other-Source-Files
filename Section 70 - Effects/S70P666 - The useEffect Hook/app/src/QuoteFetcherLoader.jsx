import { useState, useEffect } from "react";

const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";

// Fetch a quote from the API and display it on the component.  
// isLoading is initially true, display the p element if isLoading is true.  
// When the quote is finally fetched from the API, set isLoading to false so the p element no longer displays.   
export default function QuoteFetcherLoader() {
    const [quote, setQuote] = useState({text: "", author: ""});
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        async function fetchQuote() {
            const response = await fetch(RANDOM_QUOTE_URL);
            const jsonRESPONSE = await response.json();
            const randomQuote = jsonRESPONSE.quote;
            setQuote(randomQuote);
            setIsLoading(false);
        }
        fetchQuote();
    }, []);
    return (
        <div>
            <p className="Loader" style={{opacity: isLoading ? 1 : 0}}>Loading...</p>
            <h1>{quote.text}</h1>
            <h3>{quote.author}</h3>
        </div>
    );
}