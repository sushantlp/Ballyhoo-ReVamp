import React from "react";
import Slider from "react-slick";
import { Card, Image } from "semantic-ui-react";

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
        float: "right",
        top: "-8em",
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
        float: "left",
        top: "5em",
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
      slidesToShow: 6,
      slidesToScroll: 1,
      className: "center",
      centerMode: true,
      centerPadding: "0px",
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };

    return (
      <section className="section">
        <div className="container">
          <div className="discover-container">
            <div className="discover-header-container">
              <h2 className="discover-header">Discover</h2>
              <div className="underscore" />
            </div>

            <div>
              <Slider {...settings}>
                <div>
                  <Image
                    src="../static/discover-1.jpg"
                    size="small"
                    circular
                    style={{
                      boxShadow: "0px 3px 5px 0px rgba(247, 85, 106, 1)",
                      width: "150px",
                      height: "150px"
                    }}
                  />
                  <h2
                    style={{
                      paddingLeft: "3.5em",
                      paddingTop: "1em",
                      fontWeight: "bold"
                    }}
                  >
                    Pubs
                  </h2>
                </div>

                <div>
                  <Image
                    src="../static/discover-2.jpg"
                    size="small"
                    circular
                    style={{
                      boxShadow: "0px 3px 5px 0px rgba(247, 85, 106, 1)",
                      width: "150px",
                      height: "150px"
                    }}
                  />
                  <h2
                    style={{
                      paddingLeft: "2em",
                      paddingRight: "2em",
                      paddingTop: "1em",
                      paddingBottom: "1em",
                      fontWeight: "bold"
                    }}
                  >
                    Restaurants
                  </h2>
                </div>
                <div>
                  <Image
                    src="../static/discover-3.jpg"
                    size="small"
                    circular
                    style={{
                      boxShadow: "0px 3px 5px 0px rgba(247, 85, 106, 1)",
                      width: "150px",
                      height: "150px"
                    }}
                  />
                  <h2
                    style={{
                      paddingLeft: "3.5em",
                      paddingTop: "1em",
                      fontWeight: "bold"
                    }}
                  >
                    Pubs
                  </h2>
                </div>
                <div>
                  <Image
                    src="../static/discover-1.jpg"
                    size="small"
                    circular
                    style={{
                      boxShadow: "0px 3px 5px 0px rgba(247, 85, 106, 1)",
                      width: "150px",
                      height: "150px"
                    }}
                  />
                  <h2
                    style={{
                      paddingLeft: "3.5em",
                      paddingTop: "1em",
                      fontWeight: "bold"
                    }}
                  >
                    Events
                  </h2>
                </div>

                <div>
                  <Image
                    src="../static/discover-2.jpg"
                    size="small"
                    circular
                    style={{
                      boxShadow: "0px 3px 5px 0px rgba(247, 85, 106, 1)",
                      width: "150px",
                      height: "150px"
                    }}
                  />

                  <h2
                    style={{
                      paddingLeft: "3.5em",
                      paddingTop: "1em",
                      fontWeight: "bold"
                    }}
                  >
                    Saloons
                  </h2>
                </div>
                <div>
                  <Image
                    src="../static/discover-3.jpg"
                    size="small"
                    circular
                    style={{
                      boxShadow: "0px 3px 5px 0px rgba(247, 85, 106, 1)",
                      width: "150px",
                      height: "150px"
                    }}
                  />

                  <h2
                    style={{
                      paddingLeft: "2em",
                      paddingRight: "2em",
                      paddingTop: "1em",
                      paddingBottom: "1em",
                      fontWeight: "bold"
                    }}
                  >
                    Restaurants
                  </h2>
                </div>
                <div>
                  <Image
                    src="../static/discover-1.jpg"
                    size="small"
                    circular
                    style={{
                      boxShadow: "0px 3px 5px 0px rgba(247, 85, 106, 1)",
                      width: "150px",
                      height: "150px"
                    }}
                  />
                  <h2
                    style={{
                      paddingLeft: "3.5em",
                      paddingTop: "1em",
                      fontWeight: "bold"
                    }}
                  >
                    Pubs
                  </h2>
                </div>

                <div>
                  <Image
                    src="../static/discover-2.jpg"
                    size="small"
                    circular
                    style={{
                      boxShadow: "0px 3px 5px 0px rgba(247, 85, 106, 1)",
                      width: "150px",
                      height: "150px"
                    }}
                  />

                  <h2
                    style={{
                      paddingLeft: "3.5em",
                      paddingTop: "1em",
                      fontWeight: "bold"
                    }}
                  >
                    Events
                  </h2>
                </div>
                <div>
                  <Image
                    src="../static/discover-3.jpg"
                    size="small"
                    circular
                    style={{
                      boxShadow: "0px 3px 5px 0px rgba(247, 85, 106, 1)",
                      width: "150px",
                      height: "150px"
                    }}
                  />

                  <h2
                    style={{
                      paddingLeft: "3.5em",
                      paddingTop: "1em",
                      fontWeight: "bold"
                    }}
                  >
                    Saloons
                  </h2>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
