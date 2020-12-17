import React from 'react'; 
import './App.css';
import Card from './Card'; 

function App() {
  return (
    <div className="App">
      <header className="homepage">
        <h1>Start of Tinder Memes app!</h1>; 
        {/* Add spacing between cards? */}
        <Card url="https://tse2.mm.bing.net/th?id=OIP.7b2nem-RbKmraEUU8SOH4AAAAA&pid=Api"/>
        
        {/*
        <Card url="https://qph.fs.quoracdn.net/main-qimg-6d32bddfb0b0e98a46bb87d8cfafa8e1-c"/>
        
        <Card url="https://qph.fs.quoracdn.net/main-qimg-e8615c16d14b07c8210591ceb5317fc0"/>
        */}
        
      </header>
    </div>
  );
}

export default App;
