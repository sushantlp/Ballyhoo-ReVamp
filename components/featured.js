import Slider from "react-slick";
import { Image } from "semantic-ui-react";
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
        float: "right",
        top: "-10.6em",
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
        top: "11.8em",
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

export default class Featured extends React.Component {
  constructor(props) {
    super(props);
  }

  featuredArray = json => {
    return json.map((featured, key) => {
      return (
        <div className="featured-slider" key={key}>
          <Image
            src={featured.img}
            size="large"
            style={{
              // boxShadow: "0 2px 8px 0 rgba(51, 60, 63, 0.22)",
              width: "230px",
              height: "330px",
              borderWidth: "0.1em",
              borderStyle: "solid",
              borderColor: "rgba(60,59,59,1)"
            }}
          />
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

    if (this.props.homeScreen.homeScreen.featured.length === 0) return null;

    const featured = this.props.homeScreen.homeScreen.featured;

    const settings = {
      dots: true,
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 4,
      className: "featured-slick",
      // centerMode: true,
      centerPadding: "0px",
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };

    return (
      <div className="container" style={{ marginBottom: "1em" }}>
        <div className="featured-container">
          <div className="featured-header-container">
            <h2 className="featured-header">Featured</h2>
            <div className="underscore" />
          </div>
          <Slider {...settings}>{this.featuredArray(featured)}</Slider>
        </div>
      </div>
    );
  }
}
