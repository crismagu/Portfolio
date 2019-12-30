import React, { Component } from "react";
import {
  Tab,
  Tabs,
  Grid,
  Cell,
  Card,
  CardActions,
  CardTitle,
  Button,
  CardMenu,
  IconButton,
  CardText
} from "react-mdl";
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 1 };
  }
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://dwglogo.com/wp-content/uploads/2017/09/1460px-React_logo.png) center / cover"
              }}
            >
              React Project #1{" "}
            </CardTitle>
            <CardText>This is examle text to see if wrks</CardText>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>This is React</h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activetab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>JavaScript</Tab>
          <Tab>React</Tab>
        </Tabs>
        <section className="projects-grid">
          <Grid className="projects-grid">
            <Cell col={12}>
              <div className="content">{this.state.toggleCategories}</div>
            </Cell>
          </Grid>
        </section>
      </div>
    );
  }
}
export default Projects;
