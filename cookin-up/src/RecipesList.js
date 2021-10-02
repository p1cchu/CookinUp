import React from "react";
import Recipe from "./Recipe";

export default function RecipesList({ recipes }) {
  return (
    <div>
      <h1>
        {recipes.map((el) => {
          return <Recipe key={el.id} recipe={el} />;
        })}
      </h1>
    </div>
  );
}
