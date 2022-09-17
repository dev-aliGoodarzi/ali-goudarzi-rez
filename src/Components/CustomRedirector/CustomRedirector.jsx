//React
import React, { Component } from "react";
//React
//Images
//Images
//CSS
import "./CustomRedirector.css";
//CSS
//Modules
//Modules

class CustomRedirection extends Component {
  componentDidMount() {
    setTimeout(() => {
      window.location.href = this.props.selectedOutsideRoute;
    }, 2000);
    if (window.innerWidth < 500) {
      window.scrollTo({ top: 127 });
    } else {
      window.scrollTo({ top: 50 });
    }
  }
  render() {
    return (
      <div className="custom-redirector">
        <h1>Redirecting </h1>
        <div class="sea">
          <div class="circle-wrapper">
            <div class="bubble"></div>
            <div class="submarine-wrapper">
              <div class="submarine-body">
                <div class="window"></div>
                <div class="engine"></div>
                <div class="light"></div>
              </div>
              <div class="helix"></div>
              <div class="hat">
                <div class="leds-wrapper">
                  <div class="periscope"></div>
                  <div class="leds"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2>
          <span role="img" aria-label="smile">
            😊
          </span>
          Be patient , about 2sec Time need . Please Wait{" "}
          <span role="img" aria-label="smile">
            😊
          </span>
        </h2>
      </div>
    );
  }
}

export default CustomRedirection;
