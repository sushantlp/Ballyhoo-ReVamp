import Slider from "react-slick";
import Lightbox from "lightbox-react";

import "lightbox-react/style.css";
import "./detail-slider.css";

export default class DetailSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      lightBox: false,
      bundleImage: []
    };
  }

  intializeImageArray = (bool, bundleImage) => {
    this.setState({ lightBox: bool, bundleImage });
  };

  movePrevRequest = (photoIndex, bundleImage) => {
    this.setState({
      photoIndex: (photoIndex + bundleImage - 1) % bundleImage
    });
  };

  moveNextRequest = (photoIndex, bundleImage) => {
    this.setState({
      photoIndex: (photoIndex + 1) % bundleImage
    });
  };

  render() {
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

    if (parseInt(this.props.detailUrlParam.result_type, 10) === 1) {
      console.log(this.props.foodCategoryData.foodCategoryData);
    } else {
    }

    const images =
      parseInt(this.props.detailUrlParam.result_type, 10) === 1 &&
      this.props.foodCategoryData.foodCategoryData.details.images.length > 0
        ? this.props.foodCategoryData.foodCategoryData.details.images
        : parseInt(this.props.detailUrlParam.result_type, 10) !== 1 &&
          this.props.categoryData.categoryData.details.offer_images.length > 0
        ? this.props.categoryData.categoryData.details.offer_images
        : null;

    return (
      <div className="detail-slider-container">
        {images !== null ? (
          <div className="top-left">
            <p
              className="buttons"
              onClick={() => this.intializeImageArray(true, images)}
            >
              <a className="button is-medium is-rounded">
                <span className="icon">
                  <img
                    src="https://img.icons8.com/color/20/000000/camera.png"
                    alt={this.props.keyword}
                  />
                </span>
                <span className="text letter-spacing-1px">See Gallery</span>
              </a>
            </p>
          </div>
        ) : null}

        <section className="hero is-medium">
          <Slider {...settings}>
            {this.props.slidderImage.slidderImage.map((value, key) => {
              return (
                <img
                  src={value}
                  alt={this.props.keyword}
                  className="carousel"
                  key={key}
                />
              );
            })}
          </Slider>
        </section>

        {this.state.lightBox && (
          <Lightbox
            mainSrc={this.state.bundleImage[this.state.photoIndex]}
            nextSrc={
              this.state.bundleImage[
                (this.state.photoIndex + 1) % this.state.bundleImage.length
              ]
            }
            prevSrc={
              this.state.bundleImage[
                (this.state.photoIndex + this.state.bundleImage.length - 1) %
                  this.state.bundleImage.length
              ]
            }
            onCloseRequest={() => this.intializeImageArray(false)}
            onMovePrevRequest={() =>
              this.movePrevRequest(
                this.state.photoIndex,
                this.state.bundleImage.length
              )
            }
            onMoveNextRequest={() =>
              this.moveNextRequest(
                this.state.photoIndex,
                this.state.bundleImage.length
              )
            }
          />
        )}
      </div>
    );
  }
}
