import Slider from "react-slick";
import "./slidder-banner.css";

export default class SlidderBanner extends React.Component {
  constructor(props) {
    super(props);
  }

  bannerImageArray = json => {
    return json.map((image, key) => {
      return <img src={image.img} alt="" className="carousel" key={key} />;
    });
  };

  render() {
    if (
      this.props.homeScreen.status === "START" ||
      this.props.homeScreen.status === "FAIL"
    )
      return <div />;

    if (this.props.homeScreen.homeScreen.banner.length === 0) return null;

    const banner = this.props.homeScreen.homeScreen.banner;

    if (parseInt(banner.banner_type, 10) === 2) return null;
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
            <Slider {...settings}>{this.bannerImageArray(banner)}</Slider>
          </div>
        </section>
      </div>
    );
  }
}
