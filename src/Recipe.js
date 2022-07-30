import React from "react";
import {
  Typography,
  CardContent,
  Card,
  CardMedia,
  Link,
  Grow,
} from "@material-ui/core";

export default function Recipe({ recipe }) {
  return (
    <>
      <Grow in={true} appear={true} timeout="auto">
        <Card>
          <CardMedia component="img" image={recipe.image} />
          <CardContent>
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
        </Card>
      </Grow>
    </>
  );
}
