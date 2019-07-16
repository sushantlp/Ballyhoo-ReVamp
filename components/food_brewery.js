import React from "react";

import "./food_brewery.css";

export default class FoodBrewery extends React.Component {
  render() {
    return (
      <div className="container" style={{ marginBottom: "1em" }}>
        <div className="food-brewery-container">
          <div className="food-brewery-header-container">
            <h2 className="food-brewery-header">F&B</h2>
            <div className="underscore" />
          </div>

          <div class="box">
            <div class="card">
              <div class="imgBx">
                <img src="http://bit.ly/2FA5xIy" alt="images" />
              </div>
              <div class="details">
                <h2>
                  Restaurants
                  {/* <br /> */}
                  {/* <span>Director</span> */}
                </h2>
              </div>
            </div>

            <div class="card">
              <div class="imgBx">
                <img src="http://bit.ly/2FAH4Tn" alt="images" />
              </div>
              <div class="details">
                <h2>
                  Pubs
                  {/* <br />
                    <span>Producer</span> */}
                </h2>
              </div>
            </div>

            <div class="card">
              <div class="imgBx">
                <img src="http://bit.ly/2Fzmvqf" alt="images" />
              </div>
              <div class="details">
                <h2>
                  Events
                  {/* <br />
                    <span>Actor</span> */}
                </h2>
              </div>
            </div>

            <div class="card">
              <div class="imgBx">
                <img src="https://bit.ly/2U2yExZ" alt="images" />
              </div>
              <div class="details">
                <h2>
                  Events
                  {/* <br />
                    <span>Actor</span> */}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
