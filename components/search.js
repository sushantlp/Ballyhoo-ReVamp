import { Dropdown } from "semantic-ui-react";
import "./search.css";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityList: [],
      cityName: "Bengaluru"
    };
  }

  componentDidMount() {
    if (this.props.cityLocality.cityLocality.length !== 0) {
      this.createCityList(this.props.cityLocality.cityLocality);

      const bunch = this.props.cityLocality.cityLocality.filter(obj => {
        return (
          parseInt(obj.city_id, 10) ===
          parseInt(this.props.listUrlParam.city_id, 10)
        );
      });

      this.setCityName(bunch[0].city_name);
    }
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
    // const bunch = this.state.cityList.filter(obj => {
    //   if (obj.value.toLowerCase() === data.value.toLowerCase()) return obj;
    // });
    this.setCityName(data.value);
  };

  render() {
    const empty = [];

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
                  placeholder="City"
                  search
                  fluid
                  selection
                  style={{ height: "50px" }}
                  options={empty}
                  defaultValue={empty}
                  // onChange={}
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
                <a
                  className="button is-danger"
                  style={{ height: "50px", fontWeight: "700" }}
                >
                  SUBMIT
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
