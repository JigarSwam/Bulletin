import React from 'react';
import logo from './logo.svg';
import './App.css';
import PopularNews from "./PopularNews";
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from "./SearchBar"


function App() {
  return (
    <div className="App">
      <img src="./bulletin_logo.png" alt="bulletin logo!"/>
      <SearchBar />

      <h1> Popular News </h1>
      <PopularNews index = {0}/>
    </div>
  );
}

export default App;
