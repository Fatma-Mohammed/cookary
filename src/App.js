import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";
import Header from "./Header";
const App = () => {
  const APP_ID = "303aeecc";
  const APP_KEY = "b21661e5a989f5e5dfe869b91caf3f16";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = () => {
    fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data.hits);
        // console.log(data.hits);
      });
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <Header
        getSearch={getSearch}
        search={search}
        updateSearch={updateSearch}
      />
      <div className="recipe-container">
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={Math.floor(recipe.recipe.calories)}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}

      </div>
      
    </div>
  );
};

export default App;
