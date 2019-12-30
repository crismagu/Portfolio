import React from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./Components/Main";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header className="header-color" title="Title" scroll>
          <Navigation>
            <Link to="/aboutme">Who Am I?</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/resume">My Experiences</Link>
            <Link to="/contact">Connect With Me</Link>
          </Navigation>
        </Header>
        <Drawer title="Title">
          <Navigation>
            <Link to="/aboutme">Who Am I?</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/resume">My Experiences</Link>
            <Link to="/contact">Connect With Me</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
