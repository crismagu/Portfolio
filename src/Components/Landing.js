import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              className="avatar-img"
              src={require("../Components/Images/cristina_gutierrez.jpg")}
              alt="profile of cristina gutierrez"
            />
            <div className="banner-text">
              <h1>Software Developer</h1>
              <hr />
              <p>HTML| CSS| JavaScript | React | </p>
              <div className="social-links">
                {/*LinkedIn*/}
                <a
                  href="https://www.linkedin.com/in/cristina-m-gutierrez/"
                  target="_blank"
                  rel="noopener noreferrer"
                />
                <i className="fa fa-linkedin-square" aria-hidden="true" />

                {/*GitHub */}
                <a
                  href="https://www.linkedin.com/in/cristina-m-gutierrez/"
                  target="_blank"
                  rel="noopener noreferrer"
                />
                <i className="fa fa-github-square" aria-hidden="true" />
              </div>
            </div>
          </Cell>
        </Grid>
        ;
      </div>
    );
  }
}
export default Landing;
