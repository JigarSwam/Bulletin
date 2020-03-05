import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from "./SearchBar"

function App() {
  return (
    <div className="App">
      <SearchBar />
      <h1> Popular News </h1>
      <PopularNews index = {0}/>
    </div>
  );
}

export default App;
