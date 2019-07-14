import React from "react";
import Slider from "react-slick";
import { Card } from "semantic-ui-react";
import "./featured.css";

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

export default class Featured extends React.Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };

    return (
      <section className="section">
        <div className="container">
          <div>
            <div className="featured-container">
              <h2 className="featured-header">Featured</h2>
              <div className="underscore" />
            </div>
            <Slider {...settings}>
              <div className="featured">
                <Card>
                  <img
                    src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
                    alt=""
                  />
                </Card>
              </div>

              <div className="featured">
                <Card>
                  <img
                    src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                    alt=""
                  />
                </Card>
              </div>

              <div className="featured">
                <Card>
                  <img
                    src="https://react.semantic-ui.com/images/avatar/large/elliot.jpg"
                    alt=""
                  />
                </Card>
              </div>

              <div className="featured">
                <Card>
                  <img
                    src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
                    alt=""
                  />
                </Card>
              </div>

              <div className="featured">
                <Card>
                  <img
                    src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
                    alt=""
                  />
                </Card>
              </div>

              <div className="featured">
                <Card>
                  <img
                    src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
                    alt=""
                  />
                </Card>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    );
  }
}
