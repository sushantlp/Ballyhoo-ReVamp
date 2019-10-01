import Router from "next/router";
import Slider from "react-slick";
import { Image } from "semantic-ui-react";

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
        top: "-7.2em",
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
  onClickDiscover = (discover, props) => {
    props.changeLoadingState();

    const { city, city_id } = Router.router.query;
    const title = discover.title.replace(/ /g, "-").toLowerCase();
    const secret = `${city_id}b${discover.api_type}b${discover.key}b${
      discover.response_type
    }b${1}b${0}`;
    Router.push(
      {
        pathname: "/list",
        query: {
          city: city,
          title: title,
          secret: secret
        }
      },
      `/${city}/${title}/${secret}`
    );
  };

  discoverArray = (json, props) => {
    return json.map((discover, key) => {
      const titleLength = discover.title.length;

      return (
        // <Link
        //   href="/list?slug=something"
        //   as="/something"
        //   key={key}
        //   prefetch
        // >
        <div
          className="discover-slider"
          key={key}
          onClick={() => this.onClickDiscover(discover, props)}
        >
          <Image
            src={discover.img}
            size="small"
            circular
            style={{
              boxShadow: "0 2px 8px 0 rgba(51, 60, 63, 0.22)",
              // width: "150px",
              // height: "150px",
              width: "75%",
              height: "75%",
              borderWidth: "0.11em",
              borderStyle: "solid",
              borderColor: "#ff3860"
            }}
          />
          <p
            style={{
              fontFamily: "Quicksand, sans-serif",
              paddingLeft: titleLength > 7 ? "1.7em" : "2.5em",
              paddingTop: "0.5em",
              fontSize: "18px",
              color: "black"
            }}
          >
            {discover.title}
          </p>
        </div>
        // </Link>
      );
    });
  };

  render() {
    if (
      this.props.homeScreen.status === "START" ||
      this.props.homeScreen.status === "FAIL"
    )
      return <div />;

    if (this.props.homeScreen.homeScreen.discover.length === 0) return null;

    const discover = this.props.homeScreen.homeScreen.discover;
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      className: "discover-slick",
      centerMode: true,
      centerPadding: "0px",
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };

    return (
      <div className="container" style={{ marginTop: "3em" }}>
        <div className="discover-container">
          <div className="discover-header-container">
            <h2 className="discover-header">Top Picks</h2>
            <div className="underscore" />
          </div>
          <div>
            <Slider {...settings}>
              {this.discoverArray(discover, this.props)}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
