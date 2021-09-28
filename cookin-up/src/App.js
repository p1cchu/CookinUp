import React, { useEffect } from "react";
import "./App.css";

function App() {
  const API_KEY = "ce6473422bf44e3f8b11c98c2e751ce6";
  const apiURL = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY}&ingredients=apples,+flour,+sugar&number=2`;

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`${apiURL}`);
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="App">
      <h1>Let's Cook This Shit App!!!</h1>
    </div>
  );
}

export default App;
