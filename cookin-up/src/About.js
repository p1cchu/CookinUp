import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <h1>About</h1>
      <p>
        Getting hungry? Wanna cook something but don't have any ideas? Nearest
        shop is in a galaxy far far away...? You're in the right place! Cookin'
        Up is meant to help you find recipes that wil use ingredients you
        already have in your home. Just place your ingredients in input form on
        home screen, hit "Let's cook" and see what you can make! If some recipe
        would require some additional shopping don't worry - you will be
        informed what exactly is missing so you could easily get products you
        need to prepare those delicious meals. Cookin' Up helps also in reducing
        food waste - let's think about our planet for a while, shall we? Before
        you throw away any leftover food ingredients, think what you can still
        make of them. Some very tasty recipes are just one click away from you!
      </p>
      <p>
        This app is made for educational purpose only, it's not meant for any
        commercial use.
      </p>
      <p>Copyright 2021 p1cchu.</p>
      <Link to="/">
        <h2>Return to home screen</h2>
      </Link>
    </div>
  );
}
