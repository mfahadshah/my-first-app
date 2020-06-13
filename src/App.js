import React from 'react';
import './App.css';
//import './Hello'
import Hello from './Hello';

function App({name}) {
  return (
    <div>Hello From App.js
     <br/>
      <strong>My name is {name}</strong>
      <Hello color={"green"} fontSize={"thirty"} BgColor={"bg-blue"}/>
    </div>
  );
}

export default App;
