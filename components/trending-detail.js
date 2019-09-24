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

  trendingDetailComponent = json => {
    return json.map((feature, key) => {
      return (
        <div
          className="trending-detail-card"
          key={key}
          style={{
            outline: "none"
          }}
        >
          <Card
            raised
            style={{
              width: "250px",
              height: "260px",
              marginBottom: "1em"
            }}
          >
            <Image
              src={feature.img}
              alt="image"
              style={{
                width: "250px",
                height: "210px"
              }}
            />

            <Card.Content>
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
    console.log(this.props);
    return (
      <div className="container">
        <div className="trending-detail-card">
          <div className="trending-detail-header-container">
            <h2 className="trending-detail-header">Also Featuring</h2>
            <div className="underscore" />
          </div>
          <Slider {...settings}>
            {this.trendingDetailComponent(this.props.featuring.featuring)}
          </Slider>
        </div>
      </div>
    );
  }
}
