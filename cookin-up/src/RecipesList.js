import React from "react";
import Recipe from "./Recipe";
import "./App.css";

export default function RecipesList({ recipes }) {
  return (
    <>
      <h1 className="recipesList">
        {recipes.results.map((el) => {
          return <Recipe key={el.id} recipe={el} />;
        })}
      </h1>
    </>
  );
}
