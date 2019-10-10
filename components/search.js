import Router from "next/router";
import { Dropdown } from "semantic-ui-react";
import "./search.css";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectSearch: {},
      cityList: [],
      searchList: [],
      cityName: "",
      submit: true
    };
  }

  componentDidMount() {
    if (this.props.cityLocality.cityLocality.length !== 0) {
      this.createCityList(this.props.cityLocality.cityLocality);

      const bunch = this.props.cityLocality.cityLocality.filter(obj => {
        return (
          parseInt(obj.city_id, 10) ===
          parseInt(this.props.urlParam.city_id, 10)
        );
      });

      this.setCityName(bunch[0].city_name);
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

    sessionStorage.setItem("CITY_LOCALITY", JSON.stringify(props));
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

  // On City Change
  onChangeCity = (e, data) => {
    this.setCityName(data.value);
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

  // On Search Change
  onChangeSearch = (e, data) => {
    const bunch = this.props.searchData.searchData.filter(obj => {
      if (obj.keyword.toLowerCase() === data.value.toLowerCase()) return obj;
    });

    if (this.state.submit)
      this.setState({
        submit: false
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

  onClickButton = () => {
    const bunch = this.state.cityList.filter(obj => {
      if (obj.value.toLowerCase() === this.state.cityName.toLowerCase())
        return obj;
    });

    const city = bunch[0].value.replace(/ /g, "-").toLowerCase();

    let title = this.state.selectSearch.keyword.replace(/[^a-zA-Z ]/g, "");
    title = title.replace(/ /g, "-").toLowerCase();
    title = title.replace(/-+/gi, "-");

    const secret = `${bunch[0].key}b${this.state.selectSearch.type}b${
      this.state.selectSearch.key
    }b${this.state.selectSearch.response_type}b${1}b${1}`;
    Router.push(
      {
        pathname: "/list",
        query: {
          city: city,
          title: title,
          secret: secret
        }
      },
      `/${city}/${title}/${secret}`,
      { shallow: false }
    );

    // this.props.onSearchKeyChange(
    //   bunch[0].key,
    //   this.state.selectSearch.type,
    //   this.state.selectSearch.key,
    //   this.state.selectSearch.response_type,
    //   1,
    //   1
    // );
  };

  render() {
    if (this.state.cityName === "") return null;
    return (
      <div
        className="search-container"
        style={{
          backgroundImage: `url(${this.props.slidderImage.slidderImage[0]})`
        }}
      >
        <section>
          <div className="container is-fluid">
            <div className="columns">
              <div className="column is-3 is-offset-1">
                <Dropdown
                  placeholder="City"
                  search
                  fluid
                  selection
                  style={{ height: "50px" }}
                  options={this.state.cityList}
                  defaultValue={this.state.cityName}
                  onChange={(event, data) => this.onChangeCity(event, data)}
                  icon={
                    <img
                      src="https://img.icons8.com/carbon-copy/20/000000/define-location.png"
                      style={{
                        marginRight: "-1.1em",
                        marginTop: "0.3em",
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
                        marginRight: "-1.1em",
                        marginTop: "0.3em",
                        float: "right",
                        color: "grey"
                      }}
                    />
                  }
                />
              </div>

              <div className="column is-2">
                {this.state.submit ? (
                  <a
                    className="button is-danger"
                    style={{
                      height: "50px",
                      fontWeight: "700",
                      cursor: "not-allowed",
                      opacity: "0.80"
                    }}
                  >
                    SUBMIT
                  </a>
                ) : (
                  <a
                    className="button is-danger"
                    style={{ height: "50px", fontWeight: "700" }}
                    onClick={() => this.onClickButton(this.props)}
                  >
                    SUBMIT
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
