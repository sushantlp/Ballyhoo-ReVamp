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
        float: "right",
        top: "-13em",
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
        top: "8em",
        float: "left",
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
      slidesToShow: 4,
      slidesToScroll: 1,
      className: "trending-slick",
      centerMode: true,
      centerPadding: "-3px",
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
            <div className="trending-card">
              <Card
                raised
                style={{
                  width: "260px",
                  height: "300px",
                  marginBottom: "1em"
                }}
              >
                <Image
                  src="https://cdn-imgix.headout.com/tour/15250/TOUR-IMAGE/afd9d294-0065-4914-950f-42fb2c087afd-8541-dubai-dubai-frame-01.jpg?auto=compress&fm=pjpg&w=510&h=315&crop=faces&fit=min"
                  alt="image"
                  style={{
                    width: "260px",
                    height: "210px"
                  }}
                />
                <Card.Content>
                  <Card.Header>
                    <span className="city-title">NEW YORK</span>
                  </Card.Header>

                  <a
                    className="product-title block"
                    href="/tour/8541/united-arab-emirates/dubai/dubai-frame-skip-the-line-tickets"
                  >
                    Dubai Frame - Skip the Line Tickets
                  </a>
                </Card.Content>
              </Card>
            </div>

            <div className="trending-card">
              <Card
                raised
                style={{
                  width: "260px",
                  height: "300px",
                  marginBottom: "1em"
                }}
              >
                <Image
                  src="https://cdn-imgix.headout.com/tour/2636/TOUR-IMAGE/84609881-4697-4b73-bb46-9998b2fd7aa2-1866-dubai-burj-khalifa-at-the-top-01-4-.jpg?auto=compress&fm=pjpg&w=510&h=315&crop=faces&fit=min"
                  alt="image"
                  style={{
                    width: "260px",
                    height: "210px"
                  }}
                />
                <Card.Content>
                  <Card.Header>
                    <span className="city-title">NEW YORK</span>
                  </Card.Header>

                  <a
                    className="product-title block"
                    href="/tour/8541/united-arab-emirates/dubai/dubai-frame-skip-the-line-tickets"
                  >
                    Dubai Frame - Skip the Line Tickets
                  </a>
                </Card.Content>
              </Card>
            </div>

            <div className="trending-card">
              <Card
                raised
                style={{
                  width: "260px",
                  height: "300px",
                  marginBottom: "1em"
                }}
              >
                <Image
                  src="https://cdn-imgix.headout.com/tour/15250/TOUR-IMAGE/afd9d294-0065-4914-950f-42fb2c087afd-8541-dubai-dubai-frame-01.jpg?auto=compress&fm=pjpg&w=510&h=315&crop=faces&fit=min"
                  alt="image"
                  style={{
                    width: "260px",
                    height: "210px"
                  }}
                />
                <Card.Content>
                  <Card.Header>
                    <span className="city-title">NEW YORK</span>
                  </Card.Header>

                  <a
                    className="product-title block"
                    href="/tour/8541/united-arab-emirates/dubai/dubai-frame-skip-the-line-tickets"
                  >
                    Dubai Frame - Skip the Line Tickets
                  </a>
                </Card.Content>
              </Card>
            </div>

            <div className="trending-card">
              <Card
                raised
                style={{
                  width: "260px",
                  height: "300px",
                  marginBottom: "1em"
                }}
              >
                <Image
                  src="https://cdn-imgix.headout.com/cities/paris/images/mobile/morning.jpg?auto=compress&fm=pjpg&w=412.5&h=486&crop=faces&fit=min"
                  alt="image"
                  style={{
                    width: "260px",
                    height: "210px"
                  }}
                />
                <Card.Content>
                  <Card.Header>
                    <span className="city-title">NEW YORK</span>
                  </Card.Header>

                  <a
                    className="product-title block"
                    href="/tour/8541/united-arab-emirates/dubai/dubai-frame-skip-the-line-tickets"
                  >
                    Dubai Frame - Skip the Line Tickets
                  </a>
                </Card.Content>
              </Card>
            </div>

            <div className="trending-card">
              <Card
                raised
                style={{
                  width: "260px",
                  height: "300px",
                  marginBottom: "1em"
                }}
              >
                <Image
                  src="https://cdn-imgix.headout.com/tour/13905/TOUR-IMAGE/b23dc05c-1b19-4eb4-a205-fb9f0f2e29ab-7654-paris-Palace-of-Versailles-All-Access-Passport-Entry-with-Audioguide-01.jpg?auto=compress&fm=pjpg&w=510&h=315&crop=faces&fit=min"
                  alt="image"
                  style={{
                    width: "260px",
                    height: "210px"
                  }}
                />
                <Card.Content>
                  <Card.Header>
                    <span className="city-title">NEW YORK</span>
                  </Card.Header>

                  <a
                    className="product-title block"
                    href="/tour/8541/united-arab-emirates/dubai/dubai-frame-skip-the-line-tickets"
                  >
                    Dubai Frame - Skip the Line Tickets
                  </a>
                </Card.Content>
              </Card>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
