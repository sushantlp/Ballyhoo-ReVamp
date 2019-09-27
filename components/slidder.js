import Router from "next/router";

import { Dropdown } from "semantic-ui-react";
import Slider from "react-slick";

import Spinner from "./spinner";

import "./slidder.css";

export default class Slidder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectSearch: {},
      cityList: [],
      searchList: [],
      cityName: "Bengaluru"
    };
  }

  componentDidMount() {
    if (this.props.cityLocality.cityLocality.length !== 0) {
      const { city, city_id } = Router.router.query;
      if (city !== undefined && city_id !== undefined) {
        const bunch = this.props.cityLocality.cityLocality.filter(obj => {
          return parseInt(obj.city_id, 10) === parseInt(city_id, 10);
        });

        this.createCityList(this.props.cityLocality.cityLocality);

        if (bunch.length === 0) {
          this.setCityName("Bengaluru");
          Router.push(
            {
              pathname: Router.router.route,
              query: { city: "bengaluru", city_id: 1 }
            },
            `/bengaluru/${1}`,
            { shallow: true }
          );
        } else {
          const city = bunch[0].city_name.replace(/ /g, "-").toLowerCase();
          this.setCityName(bunch[0].city_name);
          Router.push(
            {
              pathname: Router.router.route,
              query: { city: city, city_id: bunch[0].city_id }
            },
            `/${city}/${bunch[0].city_id}`,
            { shallow: true }
          );
        }
      } else {
        this.createCityList(this.props.cityLocality.cityLocality);
        this.setCityName("Bengaluru");
        Router.push(
          {
            pathname: Router.router.route,
            query: { city: "bengaluru", city_id: 1 }
          },
          `/bengaluru/${1}`,
          { shallow: true }
        );
      }
    }
    if (this.props.searchData.searchData.length !== 0)
      this.createSearchList(this.props.searchData.searchData);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.cityLocality !== nextProps.cityLocality)
      this.createCityList(nextProps.cityLocality.cityLocality, "Bengaluru");

    if (this.props.searchData !== nextProps.searchData)
      this.createSearchList(nextProps.searchData.searchData);
  }

  // Create City List
  createCityList = props => {
    const cityArray = props.map(obj => {
      const city = {};
      city.key = obj.city_id;
      city.value = obj.city_name;
      city.text = obj.city_name;
      return city;
    });

    this.setState({
      cityList: cityArray
    });
  };

  // Set City Name
  setCityName = name => {
    this.setState({
      cityName: name
    });
  };

  // Create Search List
  createSearchList = props => {
    const searchArray = props.map(obj => {
      const search = {};
      search.key = obj.key;
      search.value = obj.keyword;
      search.text = obj.keyword;
      return search;
    });
    this.setState({
      searchList: searchArray
    });
  };

  // On City Change
  onChangeCity = (e, data) => {
    const bunch = this.state.cityList.filter(obj => {
      if (obj.value.toLowerCase() === data.value.toLowerCase()) return obj;
    });
    this.setCityName(data.value);
    this.props.cityChangeApiCall(bunch[0].key);
    const city = bunch[0].text.replace(/ /g, "-").toLowerCase();
    this.setCityName(bunch[0].text);
    Router.push(
      {
        pathname: Router.router.route,
        query: { city: city, city_id: bunch[0].key }
      },
      `/${city}/${bunch[0].key}`,
      { shallow: true }
    );
  };

  // On Search Change
  onChangeSearch = (e, data) => {
    const bunch = this.props.searchData.searchData.filter(obj => {
      if (obj.keyword.toLowerCase() === data.value.toLowerCase()) return obj;
    });

    this.setState({
      selectSearch: {
        key: bunch[0].key,
        keyword: bunch[0].keyword,
        response_type: bunch[0].response_type,
        type: bunch[0].type
      }
    });
  };

  slidderImageArray = json => {
    return json.map((image, key) => {
      return <img src={image} alt="" className="carousel" key={key} />;
    });
  };

  onClickButton = props => {
    props.changeLoadingState();
    const { city, city_id } = Router.router.query;
    const title = this.state.selectSearch.keyword
      .replace(/ /g, "-")
      .toLowerCase();
    const secret = `${city_id}-${this.state.selectSearch.type}-${
      this.state.selectSearch.key
    }-${this.state.selectSearch.response_type}-${1}-${1}`;
    Router.push(
      {
        pathname: "/list",
        query: {
          city: city,
          title: title,
          secret: secret
        }
      },
      `/${city}/${title}/${secret}`
    );
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
      <div className="slidder-container">
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
                  defaultValue={this.state.cityName}
                  onChange={(event, data) => this.onChangeCity(event, data)}
                  style={{ height: "50px" }}
                  icon={
                    <img
                      src="https://img.icons8.com/carbon-copy/20/000000/define-location.png"
                      style={{
                        marginTop: "0.3em",
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
                  placeholder="Explore"
                  search
                  fluid
                  selection
                  style={{ height: "50px" }}
                  options={this.state.searchList}
                  onChange={(event, data) => this.onChangeSearch(event, data)}
                  icon={
                    <img
                      src="https://img.icons8.com/wired/20/000000/search.png"
                      style={{
                        marginTop: "0.3em",
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
                  onClick={() => this.onClickButton(this.props)}
                >
                  SUBMIT
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
