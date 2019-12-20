import React from "react";
import LandingPage from "./Landing";
import { Switch, Route } from "react-router-dom";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Resume from "./Resume";
import Projects from "./Projects";
const main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/aboutme" component={AboutMe} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/projects" component={Projects} />
    <Route exact path="/resume" component={Resume} />
  </Switch>
);
export default main;
