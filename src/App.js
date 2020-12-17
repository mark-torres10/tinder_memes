import React from 'react'; 
import './App.css';
import Card from './Card'; 

function App() {
  return (
    <div className="App">
      <div className="top-of-app">
        <h1>Start of Tinder Memes app!</h1>
      </div>
      <div className="homepage">
        {/* Add cards */}
        {/*<Card url="https://tse2.mm.bing.net/th?id=OIP.7b2nem-RbKmraEUU8SOH4AAAAA&pid=Api"/>*/}
        
        
        <Card url="https://qph.fs.quoracdn.net/main-qimg-6d32bddfb0b0e98a46bb87d8cfafa8e1-c"/>
        {/*
        <Card url="https://qph.fs.quoracdn.net/main-qimg-e8615c16d14b07c8210591ceb5317fc0"/>
        */}
      </div>
      <div className="bottom-of-app">
        <h1> Hello! </h1>
      </div>
    </div>
  );
}

export default App;
