import React from 'react';
import logo from './logo.svg';
import './App.css';
import PopularNews from "./popularNews";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <h1> Popular News </h1>
      <PopularNews index = {0}/>
    </div>
  );
}

export default App;
