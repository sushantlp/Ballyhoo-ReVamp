import React from "react";
import Link from "next/link";
import Slider from "react-slick";
import { Dropdown } from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bulma/css/bulma.min.css";
import "./nav.css";

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const empty = [];
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 3000
    };

    return (
      <React.Fragment>
        <section className="hero is-medium">
          <div className="hero-head">
            <nav
              className="navbar is-transparent"
              role="navigation"
              aria-label="main navigation"
            >
              <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                  <img
                    src="https://bulma.io/images/bulma-logo.png"
                    width="112"
                    height="28"
                  />
                </a>

                <a
                  role="button"
                  className="navbar-burger burger"
                  aria-label="menu"
                  aria-expanded="false"
                  data-target="navbarBasicExample"
                >
                  <span aria-hidden="true" />
                  <span aria-hidden="true" />
                  <span aria-hidden="true" />
                </a>
              </div>

              <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                  <a className="navbar-item">Home</a>

                  <a className="navbar-item">Documentation</a>

                  <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link">More</a>

                    <div className="navbar-dropdown">
                      <a className="navbar-item">About</a>
                      <a className="navbar-item">Jobs</a>
                      <a className="navbar-item">Contact</a>
                      <hr className="navbar-divider" />
                      <a className="navbar-item">Report an issue</a>
                    </div>
                  </div>
                </div>

                <div className="navbar-end">
                  <div className="navbar-item">
                    <div className="buttons">
                      <a className="button is-primary">
                        <strong>Sign up</strong>
                      </a>
                      <a className="button is-light">Log in</a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>

          <Slider {...settings}>
            <img src="../static/1.jpg" alt="" className="carousel" />
            <img src="../static/2.jpg" alt="" className="carousel" />
            <img src="../static/4.jpg" alt="" className="carousel" />
          </Slider>
        </section>

        <div className="container">
          <div className="columns is-desktop">
            <div className="column is-4">
              <Dropdown
                placeholder="City"
                search
                fluid
                selection
                // style={{ height: "50px" }}
                options={empty}
                value={empty}
                // onChange={}
                icon={
                  <img
                    src="https://img.icons8.com/carbon-copy/20/000000/define-location.png"
                    style={{
                      marginRight: "-2vh",
                      float: "right",
                      color: "grey"
                    }}
                  />
                }
              />
            </div>
            <div className="column is-4">
              <Dropdown
                placeholder="City"
                search
                fluid
                selection
                // style={{ height: "50px" }}
                options={empty}
                value={empty}
                // onChange={}
                icon={
                  <img
                    src="https://img.icons8.com/ios/20/000000/marker.png"
                    style={{
                      marginRight: "-2vh",
                      float: "right",
                      color: "grey"
                    }}
                  />
                }
              />
            </div>
            <div className="column is-4">
              <Dropdown
                placeholder="City"
                search
                fluid
                selection
                // style={{ height: "50px" }}
                options={empty}
                value={empty}
                // onChange={}
                icon={
                  <img
                    src="https://img.icons8.com/ios/20/000000/marker.png"
                    style={{
                      marginRight: "-2vh",
                      float: "right",
                      color: "grey"
                    }}
                  />
                }
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
