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
  render() {
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
          <Slider {...settings}>
            <div className="featured-slider">
              <Image
                src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/super-30-et00064569-03-11-2017-12-22-53.jpg"
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

            <div className="featured-slider">
              <Image
                src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/the-lion-king-2019-et00089130-23-11-2018-01-42-40.jpg"
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

            <div className="featured-slider">
              <Image
                src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/spider-man-far-from-home-et00106002-28-06-2019-04-58-31.jpg"
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

            <div className="featured-slider">
              <Image
                src="https://in.bmscdn.com/Events/moviecard/sunburn-goa-2019-et00104928-2019-7-1-t-12-0-5.jpg"
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

            <div className="featured-slider">
              <Image
                src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/annabelle-comes-home-et00099889-31-03-2019-10-15-19.jpg"
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

            <div className="featured-slider">
              <Image
                src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/arjun-reddy-et00080853-31-07-2018-04-53-00.jpg"
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
          </Slider>
        </div>
      </div>
    );
  }
}
