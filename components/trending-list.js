import Slider from "react-slick";
import { Card, Image } from "semantic-ui-react";

import "./trending-list.css";

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

export default class TrendingList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.recommendation);
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
          <Slider {...settings}>
            {recommendation.map((value, key) => {
              return (
                <div className="trending-list-card" key={key}>
                  <Card
                    raised
                    style={{
                      width: "250px",
                      height: "280px",
                      marginBottom: "1em"
                    }}
                  >
                    <Image
                      src={value.img}
                      alt="image"
                      style={{
                        width: "250px",
                        height: "210px"
                      }}
                    />
                    <Card.Content>
                      <Card.Header>
                        <span className="city-title">{value.title}</span>
                      </Card.Header>
                    </Card.Content>
                  </Card>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}
