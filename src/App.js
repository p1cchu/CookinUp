import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  AppBar,
  CssBaseline,
  Toolbar,
  Button,
  Paper,
  Container,
  TextField,
  Grow,
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
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&includeIngredients=${ingredients}&number=10&sort=max-used-ingredients&addRecipeInformation=true&instructionsRequired=true&fillIngredients=true&ignorePantry=true&offset=${moreRecipes}`
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
        position="sticky"
        style={{ backgroundColor: "pink", color: "black" }}
      >
        <Toolbar className="Toolbar">
          <Typography
            variant="h4"
            className="header"
            style={{ fontFamily: "Lobster" }}
          >
            <a href=".">Cookin' Up</a>
          </Typography>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <Button variant="outlined" color="secondary">
              About
            </Button>
          </Link>
        </Toolbar>
      </AppBar>

      <Container maxWidth="sm">
        <Grow in={true} appear={true} timeout="auto">
          <Paper className="form" elevation={20} style={{ height: "30em" }}>
            <Typography
              variant="h5"
              align="center"
              style={{ fontFamily: "Rock Salt" }}
            >
              Enter your cooking ingredients separated by comma (eg. "first ingredient,
              second, etc."):
            </Typography>
            <TextField
              fullWidth
              id="outlined-basic"
              variant="outlined"
              color="secondary"
              size="large"
              style={{ marginTop: "1em" }}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
            />
            <Button
              onClick={getRecipes}
              variant="contained"
              color="secondary"
              startIcon={<DinnerDiningIcon fontSize="large" />}
              size="large"
              style={{ margin: "1em 0 1em 0" }}
            >
              Let's cook!
            </Button>
          </Paper>
        </Grow>
      </Container>

      <div className="recipesList" id="list-top">
        {recipes && <RecipesList recipes={recipes} />}
      </div>
      {recipes && (
        <div
          className="recipesList"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Button
            onClick={getRecipes}
            variant="contained"
            color="secondary"
            size="large"
            href="#list-top"
            style={{ marginBottom: "3em" }}
          >
            Get even more recipes!
          </Button>
        </div>
      )}
    </div>
  );
}

export default App;
