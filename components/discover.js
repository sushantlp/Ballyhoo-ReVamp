import React from "react";
import Slider from "react-slick";
import { Card } from "semantic-ui-react";
import "./discover.css";

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

export default class Discover extends React.Component {
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
              <h2 className="discover-header">Discover</h2>
              <div className="underscore" />
            </div>
            <Slider {...settings}>
              <div>
                <div className="discover">
                  <img src="http://bit.ly/2FA5xIy" alt="" />
                </div>
                <span className="header-name">Restaurants</span>
              </div>

              <div>
                <div className="discover">
                  <img src="http://bit.ly/2FAH4Tn" alt="" />
                </div>
                <span className="header-name">Pubs</span>
              </div>

              <div>
                <div className="discover">
                  <img src="http://bit.ly/2Fzmvqf" alt="" />
                </div>
                <span className="header-name">Events</span>
              </div>

              <div>
                <div className="discover">
                  <img src="https://bit.ly/2U2yExZ" alt="" />
                </div>
                <span className="header-name">Saloons</span>
              </div>

              {/* <div>
                <div className="discover">
                  <img src="http://bit.ly/2FAhVbn" alt="" />
                </div>
                <span className="header-name">Saloons</span>
              </div> */}
            </Slider>
          </div>
        </div>
      </section>
    );
  }
}
