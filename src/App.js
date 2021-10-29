import logo from './logo.svg';
import './App.css';
import React from 'react';
import Design from './components/destop.js'
import Mobileview from './components/mobileview.js'
function App() {
  return (
    <div className="App">
       <h1>Desktop Design</h1>
      <Design/> 
      <h1>Mobile Design</h1>
      <Mobileview/>
    </div>
  );
}

export default App;
