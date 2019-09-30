import Router from "next/router";
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

export default class TrendingDetail extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  onClickFeature = feature => {
    this.props.changeLoadingState();
    const city = this.props.routeParam.city;
    const title = feature.title.replace(/ /g, "-").toLowerCase();

    const bunch = this.props.cityLocality.cityLocality.filter(obj => {
      if (obj.city_name.toLowerCase() === city.toLowerCase()) return obj;
    });

    const secrets = `${bunch[0].city_id}b${feature.api_type}b${feature.key}b${
      feature.response_type
    }b${1}b${0}`;
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

  trendingDetailComponent = (json, bool) => {
    return json.map((feature, key) => {
      return (
        <div
          className="trending-detail-card"
          key={key}
          style={{
            outline: "none",
            display: bool ? "inline-block" : "auto",
            marginLeft: bool ? "1em" : "auto"
          }}
          onClick={() => this.onClickFeature(feature)}
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
              src={feature.img}
              alt="image"
              style={{
                width: bool ? "280px" : "250px",
                height: "210px"
              }}
            />

            <Card.Content style={{ textAlign: "center" }}>
              <Card.Header>
                <span className="city-title">{feature.title}</span>
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

    const featuring = this.props.featuring.featuring;

    if (featuring.length === 0) return null;

    return (
      <div className="container">
        <div className="trending-detail-card">
          <div className="trending-detail-header-container">
            <h2 className="trending-detail-header">Also Featuring</h2>
            <div className="underscore" />
          </div>

          {featuring.length >= 4 ? (
            <Slider {...settings}>
              {this.trendingDetailComponent(featuring, false)}
            </Slider>
          ) : (
            this.trendingDetailComponent(featuring, true)
          )}
        </div>
      </div>
    );
  }
}
