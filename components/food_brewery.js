import React from "react";
import Slider from "react-slick";
import { Card } from "semantic-ui-react";
import "./food_brewery.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        position: "relative",
        backgroundColor: "#ffffff",
        boxShadow: "0 2px 8px 0 rgba(51, 60, 63, 0.22)",
        right: "-98%",
        top: "-143px",
        zIndex: "1"
      }}
      onClick={onClick}
    >
      <img
        src="https://img.icons8.com/ios/20/000000/more-than-filled.png"
        style={{
          color: "black",
          fontSize: "1.4em",
          paddingLeft: "0.5em",
          paddingTop: "0.5em"
        }}
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{
        ...style,
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        position: "relative",
        backgroundColor: "#ffffff",
        boxShadow: "0 2px 8px 0 rgba(51, 60, 63, 0.22)",
        top: "175px",
        left: "-16px",
        zIndex: "1"
      }}
      onClick={onClick}
    >
      <img
        src="https://img.icons8.com/ios/20/000000/less-than-filled.png"
        style={{
          color: "black",
          fontSize: "1.4em",
          paddingLeft: "0.5em",
          paddingTop: "0.5em"
        }}
      />
    </div>
  );
}

export default class FoodBrewery extends React.Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };

    return (
      <section className="section">
        <div className="container">
          <div>
            <div className="discover-container">
              <h2 className="discover-header">F&B</h2>
              <div className="underscore" />
            </div>
            {/* <Slider {...settings}> */}
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
            {/* </Slider> */}
          </div>
        </div>
      </section>
    );
  }
}
