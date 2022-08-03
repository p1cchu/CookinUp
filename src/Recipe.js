import React from "react";
import {
  Typography,
  CardContent,
  Card,
  CardMedia,
  Grow,
  Button
} from "@material-ui/core";
import Popup from "reactjs-popup";
import "./popup.scss";

export default function Recipe({ recipe }) {
  return (
    <>
      <Grow in={true} appear={true} timeout="auto">
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
            <div className="centered-container">
            <Popup
              trigger={<Button variant="contained"
              color="secondary" size="large"
              style={{ fontFamily: "Rock Salt"}}>Show recipe</Button>}
              position="right center"
              modal
              nested
            >
              {(close) => (
                <div className="modal">
                  <button className="close" onClick={close}>
                    &times;
                  </button>
                  <div className="header"> {recipe.title} </div>
                  <div className="content">
                    <Typography
                      variant="h6"
                      color="initial"
                      style={{ fontFamily: "Rock Salt" }}
                    >
                      Ingredients:
                    </Typography>
                    <Typography variant="body1" color="initial">
                      {recipe.extendedIngredients.map((el) => {
                        return <li key={el.id}>{el.original}</li>;
                      })}
                    </Typography>
                    <Typography
                      variant="h6"
                      color="initial"
                      style={{ fontFamily: "Rock Salt" }}
                    >
                      Recipe:
                    </Typography>
                    <Typography variant="body1" color="initial">
                      {recipe.analyzedInstructions[0].steps.map((el) => {
                        return <li key={el.number}>{el.step}</li>;
                      })}
                    </Typography>
                  </div>
                </div>
              )}
            </Popup>
            </div>
          </CardContent>
        </Card>
      </Grow>
    </>
  );
}
