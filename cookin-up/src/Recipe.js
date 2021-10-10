import React from "react";
import {
  Typography,
  CardContent,
  CardMedia,
  Container,
  Button,
  Link,
} from "@material-ui/core";
import "./App.css";

export default function Recipe({ recipe }) {
  return (
    <>
      <Container maxWidth="xs">
        <CardMedia title="recipe" classname="recipe"/>
        <CardContent style={{backgroundColor: "white", marginBottom: "2em", boxShadow: "5px 2px 20px black"}}>
          <img src={recipe.image} alt="recipe" />
          <Link
            href={recipe.sourceUrl}
            target="_blank"
            style={{ textDecoration: "none", color: "black" }}
          >
            <Typography variant="h4" color="initial">
              {recipe.title}
            </Typography>
          </Link>
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
          </Typography>
        </CardContent>
      </Container>
    </>
  );
}
