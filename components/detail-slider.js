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
      bundleImage: [
        "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_550,h_732/Mobile/City/fgnqmyilabm0v5q4ho3b.webp",
        "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_550,h_732/Mobile/City/hu4nbdi0t2rmybyiv8bn.webp",
        "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_550,h_732/Mobile/City/zvyyrmyaxucotwv5xftg.webp",
        "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_550,h_732/Mobile/City/b2hxnhawzl33zqsokrmc.webp",
        "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_550,h_732/Mobile/City/zxa9xen670fegz4nnjpk.webp"
      ]
    };
  }

  intializeImageArray = bool => {
    this.setState({ lightBox: bool });
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

    return (
      <div className="detail-slider-container">
        <div className="top-left">
          <p className="buttons" onClick={() => this.intializeImageArray(true)}>
            <a className="button is-medium is-rounded">
              <span className="icon">
                <img src="https://img.icons8.com/color/20/000000/camera.png" />
              </span>
              <span className="text">See Gallery</span>
            </a>
          </p>
        </div>

        <section className="hero is-medium">
          <Slider {...settings}>
            <img
              src="https://cdn.getyourguide.com/img/location_img-45-2534149437-88.jpg"
              alt=""
              className="carousel"
            />
            <img
              src="https://cdn.getyourguide.com/img/tour_img-1883457-99.jpg"
              alt=""
              className="carousel"
            />
            <img
              src="https://cdn.getyourguide.com/img/tour_img-1883417-99.jpg"
              alt=""
              className="carousel"
            />

            <img
              src="https://cdn.getyourguide.com/img/tour_img-1883442-99.jpg"
              alt=""
              className="carousel"
            />

            <img
              src="https://cdn.getyourguide.com/img/tour_img-2170432-99.jpg"
              alt=""
              className="carousel"
            />
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
