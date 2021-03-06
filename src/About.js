import React from "react";
import { Link } from "react-router-dom";
import { Typography, AppBar, Toolbar, Button } from "@material-ui/core";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";

export default function About() {
  return (
    <div className="About">
      <AppBar
        className="AppBar"
        position="sticky"
        style={{ backgroundColor: "pink", color: "black" }}
      >
        <Toolbar className="Toolbar">
        <Link to="/" style={{ textDecoration: "none", color: "black"}}>
          <Typography
            variant="h4"
            className="header"
            style={{ fontFamily: "Lobster" }}
          >
            Cookin' Up
          </Typography>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button
              className="aboutButton"
              variant="outlined"
              color="secondary"
            >
              Return to home screen
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
      <div className="about-text">
      <Typography
        variant="h4"
        color="initial"
        align="center"
        style={{ margin: "2.5em", paddingTop:"0.1em" }}
      >
        <p>
          Getting hungry? Wanna cook something but don't have any ideas? <br />
          Nearest shop is in a galaxy far far away...? You're in the right
          place! <br />{" "}
        </p>
      </Typography>
      <Typography
        variant="h5"
        color="initial"
        align="justify"
        style={{ padding: "0 2em",}}
      >
        <p>
          Cookin' Up is meant to help you find recipes that wil use ingredients
          you already have in your home. Just place your ingredients in input
          form on home screen, hit "Let's cook" and see what you can make! If
          some recipe would require some additional shopping don't worry - you
          will be informed what exactly is missing so you could easily get
          products you need to prepare those delicious meals. Cookin' Up helps
          also in reducing food waste - let's think about our planet for a
          while, shall we? Before you throw away any leftover food ingredients,
          think what you can still make of them. Some very tasty recipes are
          just one click away from you!
        </p>
        <Typography
          variant="body1"
          color="initial"
          align="center"
          style={{ padding: "0.5em"}}
        >
          <p>
            This app is made for educational purpose only, it's not meant for
            any commercial use.
          </p>
          <p>Copyright 2021 p1cchu.</p>
        </Typography>
      </Typography>
    </div>
    </div>
  );
}
