import Slider from "react-slick";
import "./slidder-banner.css";

export default class SlidderBanner extends React.Component {
  bannerImageArray = (json, keyword) => {
    return json
      .filter(image => parseInt(image.banner_type, 10) === 1)
      .map((image, key) => {
        return (
          <figure className="image" key={key}>
            <img src={image.img} alt={keyword} className="carousel" />
          </figure>
        );

        // return (
        //   <img src={image.img} alt={keyword} className="carousel" key={key} />
        // );
      });
  };

  render() {
    if (
      this.props.homeScreen.status === "START" ||
      this.props.homeScreen.status === "FAIL"
    )
      return <div />;

    if (this.props.homeScreen.homeScreen.banner.length === 0) return null;

    let flag = [];
    const banner = this.props.homeScreen.homeScreen.banner;

    flag = banner.filter(function(image) {
      return parseInt(image.banner_type, 10) === 1;
    });

    if (flag.length === 0) return null;

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
              {this.bannerImageArray(banner, this.props.keyword)}
            </Slider>
          </div>
        </section>
      </div>
    );
  }
}
