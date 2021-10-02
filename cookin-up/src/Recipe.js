import React from "react";

export default function Recipe({ recipe }) {
  return (
    <div>
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt="recipe" />
    </div>
  );
}
