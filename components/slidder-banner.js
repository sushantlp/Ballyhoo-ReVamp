
import Slider from "react-slick";

import Spinner from "./spinner";

import "./slidder-banner.css";

export default class SlidderBanner extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    if (
      this.props.homeScreen.status === "START" ||
      this.props.homeScreen.status === "FAIL"
    )
      return <Spinner />;
    
    if (this.props.homeScreen.homeScreen.banner.length === 0) return null;

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      fade: true
    };

    return (
      <div className="slidder-banner-container">
        <section>
        <div className="container">
          <Slider {...settings}>
            <img src="https://img.traveltriangle.com/public-product/mkt/honeymoon+small.jpg?tr=w-1000,h-120px" alt="" className="carousel" />
            <img src="https://img.traveltriangle.com/attachments/pictures/847253/original/family.jpg?tr=w-1366,h-305" alt="" className="carousel" />
        </Slider>
          </div>
        </section>
      </div>
    );
  }
}
