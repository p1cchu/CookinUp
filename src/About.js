import React from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  AppBar,
  Toolbar,
  Button,
  Paper,
  Container,
  Grow,
  CssBaseline
} from "@material-ui/core";

export default function About() {
  return (
    <div className="About">
      <CssBaseline/>
      <AppBar
        position="sticky"
        style={{ backgroundColor: "pink", color: "black" }}
      >
        <Toolbar className="Toolbar">
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <Typography
              variant="h4"
              className="header"
              style={{ fontFamily: "Lobster" }}
            >
              Cookin' Up
            </Typography>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button variant="outlined" color="secondary">
              Return to home screen
            </Button>
          </Link>
        </Toolbar>
      </AppBar>

      <div className="about-text">
        <Container maxWidth="md">
          <Grow in={true} appear={true} timeout="auto">
            <Paper elevation={20} style={{ padding: "3em", bottom: "200px" }}>
              <Typography
                variant="h5"
                color="initial"
                align="center"
                // style={{ margin: "2.5em", paddingTop:"0.1em" }}
              >
                <p>
                  Getting hungry? Wanna cook something but don't have any ideas?{" "}
                  <br />
                  Nearest shop is in a galaxy far far away...? You're in the
                  right place! <br />{" "}
                </p>
              </Typography>
              <Typography
                variant="body1"
                color="initial"
                align="justify"
                // style={{ padding: "0 2em",}}
              >
                Cookin' Up is meant to help you find recipes that wil use
                ingredients you already have in your home. Just place your
                ingredients in input form on home screen, hit "Let's cook" and
                see what you can make! If some recipe would require some
                additional shopping don't worry - you will be informed what
                exactly is missing so you could easily get products you need to
                prepare those delicious meals. Cookin' Up helps also in reducing
                food waste - let's think about our planet for a while, shall we?
                Before you throw away any leftover food ingredients, think what
                you can still make of them. Some very tasty recipes are just one
                click away from you!
                <Typography
                  variant="body2"
                  color="initial"
                  align="center"
                  // style={{ padding: "0.5em"}}
                >
                  <p>
                    This app is made for educational purpose only, it's not
                    meant for any commercial use.
                  </p>
                  <p>
                    Copyright 2022{" "}
                    <a href="http://github.com/p1cchu" target="_blank">
                      p1cchu
                    </a>
                    .
                  </p>
                </Typography>
              </Typography>
            </Paper>
          </Grow>
        </Container>
      </div>
    </div>
  );
}
