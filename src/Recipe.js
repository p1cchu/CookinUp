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
        <Link
          href={recipe.sourceUrl}
          target="_blank"
          style={{ textDecoration: "none", color: "black" }}
        >
          <Card>
            <CardMedia component="img" image={recipe.image} />
            <CardContent>
              <Typography
                variant="h4"
                color="initial"
                style={{ fontFamily: "Rock Salt" }}
              >
                {recipe.title}
              </Typography>
              <Typography
                variant="h5"
                color="initial"
                style={{ padding: "0.5em", fontFamily: "Beth Ellen" }}
              >
                Missing ingredients:{" "}
              </Typography>

              <Typography
                variant="h6"
                color="initial"
                style={{ fontFamily: "Beth Ellen" }}
              >
                <ul>
                  {recipe.missedIngredients.map((el) => {
                    return <li key={el.id}>{el.name}</li>;
                  })}
                </ul>
              </Typography>
            </CardContent>
          </Card>
        </Link>
      </Grow>
    </>
  );
}
