import Router from "next/router";
import { Dropdown } from "semantic-ui-react";
import Slider from "react-slick";

import Spinner from "./spinner";

import "./slidder.css";

export default class Slidder extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // Router.push({
    //   pathname: '/detail/jp-nagar',
    //   query: { name: 'Zeit' }
    // })
  }

  slidderImageArray = json => {
    return json.map((image, key) => {
      return <img src={image} alt="" className="carousel" key={key} />;
    });
  };

  render() {
    if (
      this.props.cityLocality.status === "START" ||
      this.props.cityLocality.status === "FAIL"
    )
      return <Spinner />;

    if (
      this.props.homeScreen.status === "START" ||
      this.props.homeScreen.status === "FAIL"
    )
      return <Spinner />;

    const empty = [];
    const carousel = this.props.homeScreen.homeScreen.carousel;
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
          <Slider {...settings}>{this.slidderImageArray(carousel)}</Slider>
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
                  style={{ height: "50px" }}
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
                  style={{ height: "50px" }}
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
                <a
                  className="button is-danger"
                  style={{ height: "50px", fontWeight: "700" }}
                >
                  SUBMIT
                </a>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
