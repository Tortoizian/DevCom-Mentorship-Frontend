import React from 'react';
import { useState } from 'react';
import Login from './components/Login';
import BookingSummary from './components/BookingSummary';
import './App.css';

function App(){
  const [webpage, SetWebpage] = useState(0);


  if(webpage==0){
    return(
      <>
      
      <button onClick={()=>{SetWebpage(1)}}>Login page</button>
      <button onClick={()=>{SetWebpage(2)}}>Booking Summary </button>
      
      </>
    );

  }

    if(webpage==1){return (<Login SetWebpage={SetWebpage}/>);}
    if(webpage==2) {return (<BookingSummary/>); }
}
export default App;
