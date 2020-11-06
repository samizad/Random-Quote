import React,{Component} from 'react'
import QuoteAndAuthor from './components/quoteandauthor';
import quotes from './QuoteDB';
export default class App extends Component{


  //state
  state ={
    quote: quotes[0].quote,

    Author: quotes[0].Author 
  }
//generate different quote function
  generateRandomQuote = (arr) =>{
    //get random numbers
    let num = Math.floor(Math.random() * quotes.length)

    let newQuote = quotes[num];
    
    //update state

    this.setState({
      quote: newQuote.quote,
      author: newQuote.author
    })
this.shuffleQuote(quotes)
  }
// shuffleQuote randomize the quote at different clicks
shuffleQuote =(arr) =>{
  return arr.sort(function(){
    return 0.5 - Math.random()
  });
}
//The last thing we will do on the App.js is to return 
//the QuoteAndAuthor.js component with the generateRandomQuote 
//function and state object
render(){
  return(
    <div className="container">
      <h1 className="text-center">Random Quotes</h1>
      <QuoteAndAuthor
        generateRandomQuote={this.generateRandomQuote} 
        quote={this.state}
      />
    </div>
  )
}
}
