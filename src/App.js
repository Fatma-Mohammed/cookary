import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";
const App = () => {
  const APP_ID = "303aeecc";
  const APP_KEY = "b21661e5a989f5e5dfe869b91caf3f16";

  const [recipes, setRecipes] = useState([]);
  const [search,setSearch] = useState('');
  const [query,setQuery] = useState('chicken');
  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = () => {
    fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
      .then((response) => response.json())
      .then((data) => setRecipes(data.hits));
  };

  const updateSearch = e =>{
    setSearch(e.target.value);
  }
  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input type="text" className="search-bar" value={search} onChange={updateSearch}/>
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
        />
      ))}
    </div>
  );
};

export default App;
