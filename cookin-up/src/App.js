import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
} from "@material-ui/core";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import "./App.css";
import RecipesList from "./RecipesList";

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
    if (e.key === "Enter") {
      getRecipes();
    }
  }

  return (
    <div className="App">
      <CssBaseline />
      <AppBar
        className="AppBar"
        position="sticky"
        style={{ backgroundColor: "pink", color: "black" }}
      >
        <Toolbar className="Toolbar">
          <Typography
            variant="h4"
            className="header"
            style={{ fontFamily: "Lobster" }}
          >
            Cookin' Up (something good...)
          </Typography>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <Button
              className="aboutButton"
              variant="contained"
              color="secondary"
              style={{margin: "1em"}}
            >
              About
            </Button>
          </Link>
        </Toolbar>
      </AppBar>

      <section className="form">
        <input
          type="text"
          placeholder="Add your ingredients..."
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          style={{padding: "0 2em"}}
        />
      
      <Button
      
        onClick={getRecipes}
        variant="contained"
        color="secondary"
        startIcon={<DinnerDiningIcon fontSize="large" />}
        style={{marginLeft: "2em", padding: "1em"}}
        size="large"
      >
        Let's cook!
      </Button >
      </section>

      <div className="recipesList">
      {recipes && <RecipesList recipes={recipes} />}
      
      
     </div>
     {recipes && (<div style={{display: "flex", justifyContent: "center", marginBottom: "5em", marginTop: "2em"}}>
        <Button onClick={getRecipes} variant="contained" color="secondary" size="large">
          Get even more recipes!
        </Button>
        </div>
      )}
       
    </div>
  );
}

export default App;
