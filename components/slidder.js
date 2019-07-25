import Slider from "react-slick";
import { Dropdown } from "semantic-ui-react";

import "bulma/css/bulma.min.css";
import "semantic-ui-css/semantic.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slidder.css";

export default class Slidder extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const empty = [];
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
      <React.Fragment>
        <section className="hero is-medium">
          <Slider {...settings}>
            <img src="../static/1.jpg" alt="" className="carousel" />
            <img src="../static/2.jpg" alt="" className="carousel" />
            <img src="../static/4.jpg" alt="" className="carousel" />
          </Slider>
        </section>

        <div className="Search">
          <div className="container">
            <div className="columns is-desktop">
              <div className="column is-3 is-offset-1">
                <Dropdown
                  placeholder="City"
                  search
                  fluid
                  selection
                  options={empty}
                  value={empty}
                  icon={
                    <img
                      src="https://img.icons8.com/carbon-copy/20/000000/define-location.png"
                      style={{
                        marginRight: "-2vh",
                        float: "right",
                        color: "grey"
                      }}
                    />
                  }
                />
              </div>

              <div className="column is-6">
                <Dropdown
                  placeholder="City"
                  search
                  fluid
                  selection
                  // style={{ height: "50px" }}
                  options={empty}
                  value={empty}
                  // onChange={}
                  icon={
                    <img
                      src="https://img.icons8.com/wired/20/000000/search.png"
                      style={{
                        marginRight: "-2vh",
                        float: "right",
                        color: "grey"
                      }}
                    />
                  }
                />
              </div>

              <div className="column is-2">
                <a className="button is-danger">SUBMIT</a>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
