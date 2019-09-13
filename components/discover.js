import Link from "next/link";
import Router from 'next/router'
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
        top: "-8em",
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
  constructor(props) {
    super(props);
  }

  onClickDiscover = (discover) => {

    
    console.log(discover)

    if (parseInt(discover.response_type,10) === 1) 
      sessionStorage.setItem("F&B", JSON.stringify({api_type : discover.api_type, key : discover.key, response_type : discover.response_type}));
    else if (parseInt(discover.response_type,10) === 2)
    sessionStorage.setItem("EVENT", JSON.stringify({api_type : discover.api_type, key : discover.key, response_type : discover.response_type}));
    else if (parseInt(discover.response_type,10) === 3)
    sessionStorage.setItem("ACTIVITY", JSON.stringify({api_type : discover.api_type, key : discover.key, response_type : discover.response_type}));
    else if (parseInt(discover.response_type,10) === 2)
    sessionStorage.setItem("ESCAPE", JSON.stringify({api_type : discover.api_type, key : discover.key, response_type : discover.response_type}));
    else 
    sessionStorage.setItem("SALOON", JSON.stringify({api_type : discover.api_type, key : discover.key, response_type : discover.response_type}));
  
    //   const id = 1;
  //   Router.push({
  //     pathname: '/list',
  //     query: { slug: id }
      
  // }, '' + id);

  }

  discoverArray = json => {
    return json.map((discover, key) => {
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
            onClick={() => this.onClickDiscover(discover)}
          >
            <Image
              src={discover.img}
              size="small"
              circular
              style={{
                boxShadow: "0 2px 8px 0 rgba(51, 60, 63, 0.22)",
                width: "150px",
                height: "150px",
                borderWidth: "0.11em",
                borderStyle: "solid",
                borderColor: "rgba(60,59,59,1)"
              }}
            />
            <p
              style={{
                fontFamily: "Quicksand, sans-serif",
                paddingLeft: "2em",
                paddingTop: "1em"
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
      <div className="container" style={{ marginBottom: "1em" }}>
        <div className="discover-container">
          <div className="discover-header-container">
            <h2 className="discover-header">Discover</h2>
            <div className="underscore" />
          </div>
          <div>
            <Slider {...settings}>
              {this.discoverArray(discover)}
              <div/>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
