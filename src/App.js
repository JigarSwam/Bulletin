import React from 'react';
import logo from './logo.svg';
import './App.css';
import PopularNews from "./PopularNews";
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from "./SearchBar"
import Sources from "./Sources"
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tabs'


function App() {
  return (
    <div className="App">
      <img src={process.env.PUBLIC_URL + "/bulletin_logo.png"} alt="bulletin logo!"  height="200" width="auto"/>
      <Tabs> 

        <Tab eventKey="Popular" title="Popular News">
        <h1> Popular News </h1>
          <PopularNews index = {0}/>
        </Tab>

        <Tab eventKey="Search" title="Search">
          <SearchBar />
        </Tab>

        <Tab eventKey="Sources" title="Sources">
          <Sources index = {0}/>
        </Tab>

      </Tabs>
      
      
    </div>
  );
}

export default App;
