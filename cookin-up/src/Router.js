import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import About from "./About";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  );
}
