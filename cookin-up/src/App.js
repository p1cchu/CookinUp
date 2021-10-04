import React, { useState } from "react";
import "./App.css";
import RecipesList from "./RecipesList";
import About from "./About";

function App() {
  const API_KEY = "ce6473422bf44e3f8b11c98c2e751ce6";

  const [recipes, setRecipes] = useState(null);
  const [ingredients, setIngredients] = useState("");
  const [moreRecipes, setMoreRecipes] = useState(0);

  function handleChange(e) {
    setIngredients(e.target.value);
  }

  function getRecipes() {
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&includeIngredients=${ingredients}&number=10&sort=min-missing-ingredients&addRecipeInformation=true&fillIngredients=true&ignorePantry=flase&offset=${moreRecipes}`
    )
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data);
        setMoreRecipes(moreRecipes + 10);
        console.log(data);
      })
      .catch(() => {
        console.log("error");
      });
  }

  function handleKeyPress(e) {
    if(e.key === 'Enter') {
      getRecipes();
    }
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
          onKeyPress={handleKeyPress}
        />
      </section>
      <button onClick={getRecipes}>Let's cook!</button>
      {recipes && <RecipesList recipes={recipes} />}
      {recipes && <button onClick={getRecipes}>Get even more recipes!</button>}
      <About />
    </div>
  );
}

export default App;
