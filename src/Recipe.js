import React from "react";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className='recipe-card'>
      <h1>{title}</h1>
      <img src={image} alt="" />
      <p>Calories: {calories}</p>
      <h4>Ingredients</h4>
      <ul className="ingredients-list">
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recipe;
