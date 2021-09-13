//loading data part
const loadQuotes=()=>{
 fetch('https://api.kanye.rest/')
 .then(res=>res.json())
 .then(data=>displayQuote(data))
}

//function to display part
const displayQuote=(data)=>{
 const quoteElement=document.getElementById('quote');
 quoteElement.innerText=data.quote;
}

