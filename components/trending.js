import React from "react";
import Slider from "react-slick";
import { Card, Image } from "semantic-ui-react";
import "./trending.css";

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

export default class Trending extends React.Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      className: "trending-slick",
      centerMode: true,
      centerPadding: "0px",
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };

    return (
      <div className="container">
        <div className="trending-container">
          <div className="trending-header-container">
            <h2 className="trending-header">Trending</h2>
            <div className="underscore" />
          </div>
          <Slider {...settings}>
            <div>
              <Card raised>
                <Image
                  src="http://bit.ly/2FG2kH9"
                  alt=""
                  // style={{
                  //   width: "50em"
                  // }}
                />
                <Card.Content>
                  <Card.Header
                    style={{
                      fontWeight: "200",
                      color: "black",
                      fontSize: "1.1em"
                    }}
                  >
                    Activities
                  </Card.Header>
                </Card.Content>
              </Card>
            </div>

            <div>
              <Card raised>
                <Image
                  src="http://bit.ly/2Fzn2IL"
                  alt=""
                  // style={{
                  //   width: "50em",
                  //   height: "auto"
                  // }}
                />
                <Card.Content>
                  <Card.Header
                    style={{
                      fontWeight: "200",
                      color: "black",
                      fontSize: "1.1em"
                    }}
                  >
                    Activities
                  </Card.Header>
                </Card.Content>
              </Card>
            </div>

            <div>
              <Card raised>
                <Image
                  src="https://bit.ly/2U2yExZ"
                  alt=""
                  // style={{
                  //   width: "50em",
                  //   height: "auto"
                  // }}
                />
                <Card.Content>
                  <Card.Header
                    style={{
                      fontWeight: "200",
                      color: "black",
                      fontSize: "1.1em"
                    }}
                  >
                    Saloons
                  </Card.Header>
                </Card.Content>
              </Card>
            </div>

            <div>
              <Card raised>
                <Image
                  src="http://bit.ly/2FAUT4k"
                  alt=""
                  // style={{
                  //   width: "50em",
                  //   height: "auto"
                  // }}
                />
                <Card.Content>
                  <Card.Header
                    style={{
                      fontWeight: "200",
                      color: "black",
                      fontSize: "1.1em"
                    }}
                  >
                    Saloons
                  </Card.Header>
                </Card.Content>
              </Card>
            </div>

            <div>
              <Card raised>
                <Image
                  src="http://bit.ly/2FAUT4k"
                  alt=""
                  // style={{
                  //   width: "512px",
                  //   height: "auto"
                  // }}
                />
                <Card.Content>
                  <Card.Header
                    style={{
                      fontWeight: "200",
                      color: "black",
                      fontSize: "1.1em"
                    }}
                  >
                    Escapes
                  </Card.Header>
                </Card.Content>
              </Card>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
