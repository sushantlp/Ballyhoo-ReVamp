import Slider from "react-slick";
import { Card, Image } from "semantic-ui-react";

import "./trending-detail.css";

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
        top: "-12.8em",
        left: "3em",
        // top: "-33.8em",
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

export default class TrendingDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      className: "trending-slick",
      // centerPadding: "0px",
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };

    return (
      <div className="container">
        <div className="trending-detail-card">
          <div className="trending-detail-header-container">
            <h2 className="trending-detail-header">Trending</h2>
            <div className="underscore" />
          </div>
          <Slider {...settings}>
            <div className="trending-detail-card">
              <Card
                raised
                style={{
                  width: "250px",
                  height: "300px",
                  marginBottom: "1em"
                }}
              >
                <Image
                  src="https://cdn-imgix.headout.com/tour/2636/TOUR-IMAGE/84609881-4697-4b73-bb46-9998b2fd7aa2-1866-dubai-burj-khalifa-at-the-top-01-4-.jpg?auto=compress&fm=pjpg&w=510&h=315&crop=faces&fit=min"
                  alt="image"
                  style={{
                    width: "250px",
                    height: "210px"
                  }}
                />

                <div className="ribbon ribbon-top-left">
                  <span>Featured</span>
                </div>

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

            <div className="trending-detail-card">
              <Card
                raised
                style={{
                  width: "250px",
                  height: "300px",
                  marginBottom: "1em"
                }}
              >
                <Image
                  src="https://cdn-imgix.headout.com/tour/15250/TOUR-IMAGE/afd9d294-0065-4914-950f-42fb2c087afd-8541-dubai-dubai-frame-01.jpg?auto=compress&fm=pjpg&w=510&h=315&crop=faces&fit=min"
                  alt="image"
                  style={{
                    width: "250px",
                    height: "210px"
                  }}
                />

                <div className="ribbon ribbon-bottom-right">
                  <span style={{ backgroundColor: "#ffdd57", color: "black" }}>
                    Exculsive
                  </span>
                </div>

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

            <div className="trending-detail-card">
              <Card
                raised
                style={{
                  width: "250px",
                  height: "300px",
                  marginBottom: "1em"
                }}
              >
                <Image
                  src="https://cdn-imgix.headout.com/cities/paris/images/mobile/morning.jpg?auto=compress&fm=pjpg&w=412.5&h=486&crop=faces&fit=min"
                  alt="image"
                  style={{
                    width: "250px",
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

            <div className="trending-detail-card">
              <Card
                raised
                style={{
                  width: "250px",
                  height: "300px",
                  marginBottom: "1em"
                }}
              >
                <Image
                  src="https://cdn-imgix.headout.com/tour/13905/TOUR-IMAGE/b23dc05c-1b19-4eb4-a205-fb9f0f2e29ab-7654-paris-Palace-of-Versailles-All-Access-Passport-Entry-with-Audioguide-01.jpg?auto=compress&fm=pjpg&w=510&h=315&crop=faces&fit=min"
                  alt="image"
                  style={{
                    width: "250px",
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
