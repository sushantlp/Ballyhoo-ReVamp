import Slider from "react-slick";

import Spinner from "./spinner";

import "./slidder-banner.css";

export default class SlidderBanner extends React.Component {
  constructor(props) {
    super(props);
  }

  bannerImageArray = json => {
    return json.banner.map((image, key) => {
      return <img src={image.img} alt="" className="carousel" key={key} />;
    });
  };

  render() {
    if (
      this.props.homeScreen.status === "START" ||
      this.props.homeScreen.status === "FAIL"
    )
      return <Spinner />;

    if (this.props.homeScreen.homeScreen.banner.length === 0) return null;

    const homeScreen = this.props.homeScreen.homeScreen;
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
            <Slider {...settings}>{this.bannerImageArray(homeScreen)}</Slider>
          </div>
        </section>
      </div>
    );
  }
}
