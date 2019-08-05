import Slider from "react-slick";
import "./detail-slider.css";

export default class DetailSlider extends React.Component {
  constructor(props) {
    super(props);
  }

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
        {/* <div className="sub-container">
          <span className="activity-photos-link">
            <span className="camera">
              <img src="https://img.icons8.com/color/25/000000/google-images.png" />
            </span>
            <span>See gallery</span>
          </span>
        </div> */}

        <div className="top-left">
          <p className="buttons">
            <a className="button is-medium">
              <span className="icon">
                <img src="https://img.icons8.com/ios-filled/20/000000/camera.png" />
              </span>
              <span className="text">See Gallery</span>
            </a>
          </p>
        </div>

        <section className="hero is-medium">
          <Slider {...settings}>
            <img src="../static/1.jpg" alt="" className="carousel" />
            <img src="../static/2.jpg" alt="" className="carousel" />
            <img src="../static/4.jpg" alt="" className="carousel" />
          </Slider>
        </section>
      </div>
    );
  }
}
