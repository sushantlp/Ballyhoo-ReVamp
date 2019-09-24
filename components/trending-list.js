import Router from "next/router";
import Slider from "react-slick";
import { Card, Image } from "semantic-ui-react";
import "./trending-list.css";
import FilterDisplay from "./filter-display";

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
        top: "-10.2em",
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

export default class TrendingList extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  onClickRecommendation = recommendation => {
    const city = this.props.routeParam.city;
    const secret = this.props.routeParam.secret;
    const title = recommendation.title.replace(/ /g, "-").toLowerCase();

    // Index Zero=cityId, One=apiType, Two=Key, Three=responseType, Four=page
    const slice = secret.split("-");

    const secrets = `${slice[0]}-${recommendation.api_type}-${
      recommendation.key
    }-${recommendation.response_type}-${1}-${0}`;
    Router.push(
      {
        pathname: "/list",
        query: {
          city: city,
          title: title,
          secret: secrets
        }
      },
      `/${city}/${title}/${secrets}`
    );
  };

  trendingListComponent = (json, bool) => {
    return json.map((recommendation, key) => {
      return (
        <div
          className="trending-list-card"
          style={{
            paddingLeft: "0.5em",
            outline: "none",
            display: bool ? "inline-block" : "auto",
            marginLeft: bool ? "1em" : "auto"
          }}
          key={key}
          onClick={() => this.onClickRecommendation(recommendation)}
        >
          <Card
            raised
            style={{
              width: bool ? "280px" : "250px",
              height: "260px",
              marginBottom: "1em"
            }}
          >
            <Image
              src={recommendation.img}
              alt="image"
              style={{
                width: bool ? "280px" : "250px",
                height: "210px"
              }}
            />
            <Card.Content>
              <Card.Header>
                <span className="city-title">{recommendation.title}</span>
              </Card.Header>
            </Card.Content>
          </Card>
        </div>
      );
    });
  };

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
    const recommendation = this.props.recommendation.recommendation;

    if (recommendation.length === 0) return null;

    return (
      <div className="container">
        <div className="trending-list-container">
          <div className="trending-list-header-container">
            <h2 className="trending-list-header">Recommendation</h2>
            <div className="underscore" />
          </div>
          {recommendation.length > 4 ? (
            <Slider {...settings}>
              {this.trendingListComponent(recommendation, false)}
            </Slider>
          ) : (
            this.trendingListComponent(recommendation, true)
          )}
        </div>
      </div>
    );
  }
}
