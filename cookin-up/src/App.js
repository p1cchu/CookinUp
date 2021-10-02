import React, { useState } from "react";
import "./App.css";
import RecipesList from "./RecipesList";

function App() {
  const API_KEY = "ce6473422bf44e3f8b11c98c2e751ce6";

  const [recipes, setRecipes] = useState(null);
  const [ingredients, setIngredients] = useState("");

  function handleChange(e) {
    setIngredients(e.target.value);
  }

  function getRecipes() {
    fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY}&ingredients=${ingredients}&number=10&ranking=2`
    )
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data);
        console.log(data);
      })
      .catch(() => {
        console.log("error");
      });
  }

  return (
    <div className="App">
      <h1>Cookin' Up</h1>
      <h2>(something good)</h2>
      <section className="form">
        <input
          type="text"
          placeholder="Please, add your ingredients..."
          onChange={handleChange}
        />
      </section>
      <button onClick={getRecipes}>Let's cook!</button>
      {recipes && <RecipesList recipes={recipes} />}
    </div>
  );
}

export default App;
