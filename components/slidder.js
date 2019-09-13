import Router from "next/router";
import { Dropdown } from "semantic-ui-react";
import Slider from "react-slick";

import Spinner from "./spinner";

import "./slidder.css";

export default class Slidder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityList: [],
      cityName: "Bengaluru"
    };
  }

  UNSAFE_componentWillMount() {
    console.log("UNSAFE_componentWillMount")
    if (this.props.cityLocality.cityLocality.length !== 0)
    this.createCityList(this.props.cityLocality.cityLocality, "Bengaluru");
  }

  UNSAFE_componentDidMount() {
    console.log("UNSAFE_componentDidMount")
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.cityLocality !== nextProps.cityLocality) {
      console.log("Inside")
      this.createCityList(nextProps.cityLocality.cityLocality, "Bengaluru");
    }
  }

  // Create City List
  createCityList = (props, cityName) => {
    const cityArray = props.map(obj => {
      const city = {};
      city.key = obj.city_id;
      city.value = obj.city_name;
      city.text = obj.city_name;
      return city;
    });

    // sessionStorage.setItem("CITY_LOCALITY", JSON.stringify(props));

    this.setCityName(cityName, 1);
    this.setState({
      cityList: cityArray
    });

  }

   // Set City Name
   setCityName = (name, id) => {
    this.setState({
      cityName: name
    });
  };


    // On City Change
    onChangeCity = (e, data) => {
      const bunch = this.state.cityList.filter(obj => {
        if (obj.value.toLowerCase() === data.value.toLowerCase()) return obj;
      });
      this.setCityName(data.value);
      this.props.cityChangeApiCall(bunch[0].key);
    };

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
    
      Router.push({ pathname: '/', query: { city: "bengaluru"}}, { shallow: true }, 'bengaluru');
      
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
                  options={this.state.cityList}
                  value={this.state.cityName}
                  onChange={(event, data) => this.onChangeCity(event, data)}
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
