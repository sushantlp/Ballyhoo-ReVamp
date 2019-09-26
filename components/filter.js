import "./filter.css";
import "bulma-checkradio";

export default class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolling: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll, true);
  }

  handleScroll = event => {
    if (document.body.scrollTop > 53) {
      if (this.state.scrolling === false)
        this.setState({
          scrolling: true
        });
    } else {
      if (this.state.scrolling === true)
        this.setState({
          scrolling: false
        });
    }
  };

  render() {
    return (
      <div
        className="filter-container"
        style={{
          top: this.state.scrolling ? "1em" : "0",
          pointerEvents: "none",
          cursor: "not-allowed"
        }}
      >
        <div
          className="box"
          style={{
            pointerEvents: "none",
            cursor: "not-allowed"
          }}
        >
          {parseInt(this.props.urlParam.response_type, 10) === 1 ? (
            <React.Fragment>
              <h3 className="google mb1-5 mt0-5">Package</h3>
              <div className="columns is-desktop is-multiline is-narrow">
                <div className="field">
                  <div className="column">
                    <input
                      className="is-checkradio has-background-color is-danger"
                      id="exampleCheckboxBackgroundColorDanger"
                      type="checkbox"
                      name="exampleCheckboxBackgroundColorDanger"
                      checked="checked"
                    />
                    <label>Buffet</label>
                  </div>

                  <div className="column">
                    {" "}
                    <input
                      className="is-checkradio"
                      id="exampleCheckboxBackgroundColorDanger"
                      type="checkbox"
                      name="exampleCheckboxBackgroundColorDanger"
                    />
                    <label>Happy hour</label>
                  </div>
                  <div className="column">
                    {" "}
                    <input
                      className="is-checkradio"
                      id="exampleCheckboxBackgroundColorDanger"
                      type="checkbox"
                      name="exampleCheckboxBackgroundColorDanger"
                    />
                    <label>Events</label>
                  </div>
                  <div className="column">
                    <input
                      className="is-checkradio"
                      id="exampleCheckboxBackgroundColorDanger"
                      type="checkbox"
                      name="exampleCheckboxBackgroundColorDanger"
                    />
                    <label>Packages</label>
                  </div>
                </div>
              </div>
              {/* <div className="divider" /> */}
              <h3 className="google mb1-5">Food</h3>
              <div className="columns is-desktop is-multiline is-narrow">
                <div className="field">
                  <div className="column">
                    <input
                      className="is-checkradio has-background-color is-danger"
                      id="exampleCheckboxBackgroundColorDanger"
                      type="checkbox"
                      name="exampleCheckboxBackgroundColorDanger"
                      checked="checked"
                    />
                    <label>Veg</label>
                  </div>

                  <div className="column">
                    <input
                      className="is-checkradio"
                      id="exampleCheckboxBackgroundColorDanger"
                      type="checkbox"
                      name="exampleCheckboxBackgroundColorDanger"
                    />
                    <label>Non veg</label>
                  </div>

                  <div className="column">
                    <input
                      className="is-checkradio"
                      id="exampleCheckboxBackgroundColorDanger"
                      type="checkbox"
                      name="exampleCheckboxBackgroundColorDanger"
                    />
                    <label>Both</label>
                  </div>
                </div>
              </div>
              {/* <div className="divider" /> */}
            </React.Fragment>
          ) : null}

          {parseInt(this.props.urlParam.response_type, 10) === 2 ? (
            <React.Fragment>
              {" "}
              <h3 className="google mb1-5 mt0-5">Budget Per Person</h3>
              <div className="columns is-desktop is-multiline is-narrow">
                <div className="field">
                  <div className="column">
                    <input
                      className="is-checkradio has-background-color is-danger"
                      id="exampleCheckboxBackgroundColorDanger"
                      type="checkbox"
                      name="exampleCheckboxBackgroundColorDanger"
                      checked="checked"
                    />
                    <label>Less then 500</label>
                  </div>

                  <div className="column">
                    <input
                      className="is-checkradio"
                      id="exampleCheckboxBackgroundColorDanger"
                      type="checkbox"
                      name="exampleCheckboxBackgroundColorDanger"
                    />
                    <label>500 - 1000</label>
                  </div>

                  <div className="column">
                    <input
                      className="is-checkradio"
                      id="exampleCheckboxBackgroundColorDanger"
                      type="checkbox"
                      name="exampleCheckboxBackgroundColorDanger"
                    />
                    <label>1000 - 3000</label>
                  </div>

                  <div className="column">
                    <input
                      className="is-checkradio"
                      id="exampleCheckboxBackgroundColorDanger"
                      type="checkbox"
                      name="exampleCheckboxBackgroundColorDanger"
                    />
                    <label>More then 3000</label>
                  </div>
                </div>
              </div>
              <h3 className="google mb1-5">Date</h3>
              <div className="columns is-desktop is-multiline is-narrow">
                <div className="field">
                  <div className="column">
                    <input
                      className="is-checkradio has-background-color is-danger"
                      id="exampleCheckboxBackgroundColorDanger"
                      type="checkbox"
                      name="exampleCheckboxBackgroundColorDanger"
                      checked="checked"
                    />
                    <label>Current month</label>
                  </div>

                  <div className="column">
                    <input
                      className="is-checkradio"
                      id="exampleCheckboxBackgroundColorDanger"
                      type="checkbox"
                      name="exampleCheckboxBackgroundColorDanger"
                    />
                    <label>Next month</label>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ) : null}

          {parseInt(this.props.urlParam.response_type, 10) === 3 ? (
            <React.Fragment>
              {" "}
              <h3 className="google mb1-5 mt0-5">Budget Per Person</h3>
              <div className="columns is-desktop is-multiline is-narrow">
                <div className="field">
                  <div className="column">
                    <input
                      className="is-checkradio has-background-color is-danger"
                      id="exampleCheckboxBackgroundColorDanger"
                      type="checkbox"
                      name="exampleCheckboxBackgroundColorDanger"
                      checked="checked"
                    />
                    <label>Less then 500</label>
                  </div>

                  <div className="column">
                    <input
                      className="is-checkradio"
                      id="exampleCheckboxBackgroundColorDanger"
                      type="checkbox"
                      name="exampleCheckboxBackgroundColorDanger"
                    />
                    <label>500 - 1000</label>
                  </div>

                  <div className="column">
                    <input
                      className="is-checkradio"
                      id="exampleCheckboxBackgroundColorDanger"
                      type="checkbox"
                      name="exampleCheckboxBackgroundColorDanger"
                    />
                    <label>1000 - 3000</label>
                  </div>

                  <div className="column">
                    <input
                      className="is-checkradio"
                      id="exampleCheckboxBackgroundColorDanger"
                      type="checkbox"
                      name="exampleCheckboxBackgroundColorDanger"
                    />
                    <label>More then 3000</label>
                  </div>
                </div>
              </div>
              {/* <div className="divider" /> */}
            </React.Fragment>
          ) : null}

          {parseInt(this.props.urlParam.response_type, 10) === 5 ? (
            <React.Fragment>
              {" "}
              <h3 className="google mb1-5 mt0-5">Budget Per Person</h3>
              <div className="columns is-desktop is-multiline is-narrow">
                <div className="field">
                  <div className="column">
                    <input
                      className="is-checkradio has-background-color is-danger"
                      id="exampleCheckboxBackgroundColorDanger"
                      type="checkbox"
                      name="exampleCheckboxBackgroundColorDanger"
                      checked="checked"
                    />
                    <label>Less then 500</label>
                  </div>

                  <div className="column">
                    <input
                      className="is-checkradio"
                      id="exampleCheckboxBackgroundColorDanger"
                      type="checkbox"
                      name="exampleCheckboxBackgroundColorDanger"
                    />
                    <label>500 - 1000</label>
                  </div>

                  <div className="column">
                    <input
                      className="is-checkradio"
                      id="exampleCheckboxBackgroundColorDanger"
                      type="checkbox"
                      name="exampleCheckboxBackgroundColorDanger"
                    />
                    <label>1000 - 3000</label>
                  </div>

                  <div className="column">
                    <input
                      className="is-checkradio"
                      id="exampleCheckboxBackgroundColorDanger"
                      type="checkbox"
                      name="exampleCheckboxBackgroundColorDanger"
                    />
                    <label>More then 3000</label>
                  </div>
                </div>
              </div>
              <h3 className="google mb1-5">Gender</h3>
              <div className="columns is-desktop is-multiline is-narrow">
                <div className="field">
                  <div className="column">
                    <input
                      className="is-checkradio has-background-color is-danger"
                      id="exampleCheckboxBackgroundColorDanger"
                      type="checkbox"
                      name="exampleCheckboxBackgroundColorDanger"
                      checked="checked"
                    />
                    <label>Male</label>
                  </div>

                  <div className="column">
                    <input
                      className="is-checkradio"
                      id="exampleCheckboxBackgroundColorDanger"
                      type="checkbox"
                      name="exampleCheckboxBackgroundColorDanger"
                    />
                    <label>Female</label>
                  </div>

                  <div className="column">
                    <input
                      className="is-checkradio"
                      id="exampleCheckboxBackgroundColorDanger"
                      type="checkbox"
                      name="exampleCheckboxBackgroundColorDanger"
                    />
                    <label>Both</label>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ) : null}

          {parseInt(this.props.urlParam.response_type, 10) === 4 ? (
            <React.Fragment>
              {" "}
              <h3 className="google mb1-5 mt0-5">Budget Per Person</h3>
              <div className="columns is-desktop is-multiline is-narrow">
                <div className="field">
                  <div className="column">
                    <input
                      className="is-checkradio has-background-color is-danger"
                      id="exampleCheckboxBackgroundColorDanger"
                      type="checkbox"
                      name="exampleCheckboxBackgroundColorDanger"
                      checked="checked"
                    />
                    <label>Less then 500</label>
                  </div>

                  <div className="column">
                    <input
                      className="is-checkradio"
                      id="exampleCheckboxBackgroundColorDanger"
                      type="checkbox"
                      name="exampleCheckboxBackgroundColorDanger"
                    />
                    <label>500 - 1000</label>
                  </div>

                  <div className="column">
                    <input
                      className="is-checkradio"
                      id="exampleCheckboxBackgroundColorDanger"
                      type="checkbox"
                      name="exampleCheckboxBackgroundColorDanger"
                    />
                    <label>1000 - 5000</label>
                  </div>

                  <div className="column">
                    <input
                      className="is-checkradio"
                      id="exampleCheckboxBackgroundColorDanger"
                      type="checkbox"
                      name="exampleCheckboxBackgroundColorDanger"
                    />
                    <label>More then 5000</label>
                  </div>
                </div>
              </div>
              <h3 className="google mb1-5">Escape</h3>
              <div className="columns is-desktop is-multiline is-narrow">
                <div className="field">
                  <div className="column">
                    <input
                      className="is-checkradio has-background-color is-danger"
                      id="exampleCheckboxBackgroundColorDanger"
                      type="checkbox"
                      name="exampleCheckboxBackgroundColorDanger"
                      checked="checked"
                    />
                    <label>Ballyhoo exculsive</label>
                  </div>

                  <div className="column">
                    <input
                      className="is-checkradio"
                      id="exampleCheckboxBackgroundColorDanger"
                      type="checkbox"
                      name="exampleCheckboxBackgroundColorDanger"
                    />
                    <label>Verified merchant</label>
                  </div>

                  <div className="column">
                    <input
                      className="is-checkradio"
                      id="exampleCheckboxBackgroundColorDanger"
                      type="checkbox"
                      name="exampleCheckboxBackgroundColorDanger"
                    />
                    <label>Domestic</label>
                  </div>

                  <div className="column">
                    <input
                      className="is-checkradio"
                      id="exampleCheckboxBackgroundColorDanger"
                      type="checkbox"
                      name="exampleCheckboxBackgroundColorDanger"
                    />
                    <label>International</label>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ) : null}
        </div>
      </div>
    );
  }
}
