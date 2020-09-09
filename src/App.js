import React,{useEffect, useState } from 'react';
import './App.css';

const App = () =>{
  const APP_ID = "303aeecc";
  const APP_KEY = "b21661e5a989f5e5dfe869b91caf3f16";

  
  useEffect(() => {
    getRecipes();
  },[]);

  const getRecipes = () => {
    fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
    .then(response => response.json())
    .then(data => console.log(data));
  }
  
  return(
      <div className="App">
        <form className="search-form">
          <input type="text" className="search-bar"/>
          <button type="submit" className="search-button">Search</button>
        </form>
      </div>
  );
}

export default App;
