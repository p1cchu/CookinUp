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
  FormGroup,
  Switch,
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
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&includeIngredients=${ingredients}&number=12&sort=max-used-ingredients&addRecipeInformation=true&instructionsRequired=true&fillIngredients=true&addRecipeNutrition=true&ignorePantry=true&offset=${moreRecipes}`
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
            style={{ fontFamily: "Rock Salt" }}
          >
            <a href=".">Cookin' Up</a>
          </Typography>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <Button variant="outlined" color="secondary" style={{fontFamily: "Rock Salt"}}>
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
              style={{ marginBottom: '0.7em', fontFamily: "Rock Salt"}}
            >
              Hi! Choose your diet and meal type, enter cooking ingredients that you want to use, hit the red button and see what you can cook with them!
            </Typography>
            <FormControl>
              <FormLabel id="diet-type-radio">Diet type</FormLabel>
              <RadioGroup
                row
                aria-labelledby="diet-type-radio"
                name="diet-row-radio-buttons-group"
                defaultValue='regular'
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
              </RadioGroup>
            </FormControl>
            <FormControl style={{ marginBottom: '0.2em' }}>
              <FormLabel id="meal-type-radio">Meal type</FormLabel>
              <RadioGroup
                row
                aria-labelledby="meal-type-radio"
                name="meal-row-radio-buttons-group"
                defaultValue='random'
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
                <FormControlLabel
                  value="random"
                  control={<Radio />}
                  label="Random"
                />
              </RadioGroup>
            </FormControl>
            <FormGroup>
              <FormControlLabel control={<Switch />} label="Gluten free" />
            </FormGroup>
            <TextField
              fullWidth
              id="outlined-basic"
              label="First ingredient, second ingredient, etc..."
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
              style={{ margin: "1em 0 1em 0", fontFamily: "Rock Salt" }}
            >
              Let's cook!
            </Button>
          </Paper>
        </Grow>
      </Container>
      
<div className='divider'></div>

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
            style={{ marginBottom: "3em", fontFamily: "Rock Salt"}}
          >
            Get even more recipes!
          </Button>
        </div>
      )}
    </div>
  );
}

export default App;
