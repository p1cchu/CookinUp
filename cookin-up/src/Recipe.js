import React from "react";
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
import "./App.css";

export default function Recipe({ recipe }) {
  return (
    <>
      <Container maxWidth="xs" >
        <CardMedia title="recipe" />
        <CardContent>
        <img src={recipe.image} alt="recipe"/>
          <Typography variant="h4" color="initial">
            {recipe.title}
          </Typography>
          <Typography variant="body1" color="initial">
            
            <Typography
              variant="h5"
              color="initial"
              style={{ padding: "0.5em" }}
            >
              Missing ingredients:{" "}
            </Typography>

            <ul>
              {recipe.missedIngredients.map((el) => {
                return <li key={el.id}>{el.name}</li>;
              })}
            </ul>
            <Button
              href={recipe.sourceUrl}
              target="_blank"
              variant="contained"
              color="secondary"
            >
              Get full recipe
            </Button>
          </Typography>
        </CardContent>
      </Container>
    </>
  );
}
