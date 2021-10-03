import React from "react";

export default function Recipe({ recipe }) {
  return (
    <div>
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt="recipe" />
      <ul>
        Missing ingredients: {recipe.missedIngredients.map((el) => {
          return (
            <li key={el.id}>{el.name}</li>
          ) 
        })}
      </ul>
    </div>
  );
}
