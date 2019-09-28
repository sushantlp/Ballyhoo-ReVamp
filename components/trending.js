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

export default class Trending extends React.Component {
  trendingArray = json => {
    const calculate = json.length;
    return json.map((trending, key) => {
      let description = trending.offer_description;
      if (description.length >= 60) {
        description = description.slice(0, 60) + " ...";
      }

      return (
        <div
          className="trending-card"
          key={key}
          onClick={() => this.props.categoryApiCall(trending.offer_id)}
        >
          <Card
            raised
            style={{
              width: calculate > 4 ? "250px" : "275px",

              height: "300px",
              marginBottom: "2em"
            }}
          >
            <Image
              src={trending.img}
              alt="image"
              style={{
                width: calculate > 4 ? "250px" : "275px",
                height: "210px"
              }}
            />

            {trending.offer_promoted === 1 ? (
              <div className="ribbon ribbon-top-left">
                <span>Featured</span>
              </div>
            ) : null}

            {trending.offer_exclusive === 1 ? (
              <div className="ribbon ribbon-bottom-right">
                <span style={{ backgroundColor: "#ffdd57", color: "black" }}>
                  Exculsive
                </span>
              </div>
            ) : null}

            <Card.Content>
              <Card.Header>
                <span className="city-title">{trending.offer_title}</span>
              </Card.Header>

              <a
                className="product-title block"
                // href="/tour/8541/united-arab-emirates/dubai/dubai-frame-skip-the-line-tickets"
              >
                {description}
              </a>
            </Card.Content>
          </Card>
        </div>
      );
    });
  };

  render() {
    if (
      this.props.homeScreen.status === "START" ||
      this.props.homeScreen.status === "FAIL"
    )
      return <div />;

    const trending = this.props.homeScreen.homeScreen.trending_escapes;
    if (trending.length === 0) return <div />;
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
        <div className="trending-container">
          <div className="trending-header-container">
            <h2 className="trending-header">Trending Packages</h2>
            <div className="underscore" />
          </div>
          <Slider {...settings}>{this.trendingArray(trending)}</Slider>
        </div>
      </div>
    );
  }
}
