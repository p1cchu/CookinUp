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
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@material-ui/core";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import "./App.scss";
import RecipesList from "./RecipesList";

function App() {
  const API_KEY = "ce6473422bf44e3f8b11c98c2e751ce6";

  const [recipes, setRecipes] = useState(null);
  const [ingredients, setIngredients] = useState("");
  const [moreRecipes, setMoreRecipes] = useState(0);
  const [dietType, setDietType] = useState("");
  const [mealType, setMealType] = useState("");

  function getRecipes() {
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&includeIngredients=${ingredients}&diet=${dietType}&type=${mealType}&number=12&sort=max-used-ingredients&addRecipeInformation=true&instructionsRequired=true&fillIngredients=true&addRecipeNutrition=true&ignorePantry=true&offset=${moreRecipes}`
    )
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data);
        setMoreRecipes(moreRecipes + 10);
        console.log(data);
      })
      .catch(() => {
        alert(
          "Error: too many requests, API rate limit reached :(. Please try again later."
        );
      });
  }

  function handleTextFieldChange(e) {
    setIngredients(e.target.value);
  }

  function handleDietTypeChange(e) {
    setDietType(e.target.value);
  }

  function handleMealType(e) {
    setMealType(e.target.value);
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
            style={{ fontFamily: "Rock Salt" }}
          >
            <a href=".">Cookin' Up</a>
          </Typography>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <Button
              variant="outlined"
              color="secondary"
              style={{ fontFamily: "Rock Salt" }}
            >
              About
            </Button>
          </Link>
        </Toolbar>
      </AppBar>

      <Container maxWidth="sm">
        <Grow in={true} appear={true} timeout="auto">
          <Paper className="form" elevation={20}>
            <Typography
              variant="h6"
              align="center"
              style={{ marginBottom: "1em", fontFamily: "Rock Salt" }}
            >
              Hi! Choose your diet and meal type, enter cooking ingredients that
              you want to use, hit the red button and see what you can cook with
              them!
            </Typography>
            <FormControl>
              <FormLabel id="diet-type-radio">Diet type</FormLabel>
              <RadioGroup
                row
                aria-labelledby="diet-type-radio"
                name="diet-row-radio-buttons-group"
                defaultValue="regular"
                onChange={handleDietTypeChange}
              >
                <FormControlLabel
                  value="regular"
                  control={<Radio />}
                  label="Regular"
                />
                <FormControlLabel
                  value="vegetarian"
                  control={<Radio />}
                  label="Vegetarian"
                />
                <FormControlLabel
                  value="vegan"
                  control={<Radio />}
                  label="Vegan"
                />
                <FormControlLabel
                  value="gluten free"
                  control={<Radio />}
                  label="Gluten free"
                />
              </RadioGroup>
            </FormControl>
            <FormControl style={{ marginBottom: "0.5em" }}>
              <FormLabel id="meal-type-radio">Meal type</FormLabel>
              <RadioGroup
                row
                aria-labelledby="meal-type-radio"
                name="meal-row-radio-buttons-group"
                defaultValue=""
                onChange={handleMealType}
              >
                <FormControlLabel
                  value="main course"
                  control={<Radio />}
                  label="Main course"
                />
                <FormControlLabel
                  value="soup"
                  control={<Radio />}
                  label="Soup"
                />
                <FormControlLabel
                  value="side dish"
                  control={<Radio />}
                  label="Side dish"
                />
                <FormControlLabel
                  value="salad"
                  control={<Radio />}
                  label="Salad"
                />
                <FormControlLabel
                  value="sauce"
                  control={<Radio />}
                  label="Sauce"
                />
                <FormControlLabel
                  value="dessert"
                  control={<Radio />}
                  label="Dessert"
                />
                <FormControlLabel
                  value="appetizer"
                  control={<Radio />}
                  label="Appetizer"
                />
                <FormControlLabel
                  value="breakfast"
                  control={<Radio />}
                  label="Breakfast"
                />
                <FormControlLabel
                  value="snack"
                  control={<Radio />}
                  label="Snack"
                />
                <FormControlLabel
                  value="beverage"
                  control={<Radio />}
                  label="Beverage"
                />
                <FormControlLabel
                  value="drink"
                  control={<Radio />}
                  label="Drink"
                />
                <FormControlLabel value="" control={<Radio />} label="Random" />
              </RadioGroup>
            </FormControl>
            <TextField
              fullWidth
              id="outlined-basic"
              label="First ingredient, second ingredient, etc..."
              variant="outlined"
              color="secondary"
              size="medium"
              style={{ margin: "1em 0" }}
              onChange={handleTextFieldChange}
              onKeyPress={handleKeyPress}
            />
            <Button
              onClick={getRecipes}
              variant="contained"
              color="secondary"
              startIcon={<DinnerDiningIcon fontSize="large" />}
              size="large"
              href="#list-top"
              style={{ margin: "1em 0 1em 0", fontFamily: "Rock Salt" }}
            >
              Let's cook!
            </Button>
          </Paper>
        </Grow>
      </Container>

      <div className="divider"></div>

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
            style={{ marginBottom: "3em", fontFamily: "Rock Salt" }}
          >
            Get even more recipes!
          </Button>
        </div>
      )}
    </div>
  );
}

export default App;
