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
          top: this.state.scrolling ? "6em" : "0"
        }}
      >
        <div className="box">
          <h3 className="google">Categories </h3>
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
                <label>Honeymoon</label>

                <input
                  className="is-checkradio"
                  id="exampleCheckboxBackgroundColorDanger"
                  type="checkbox"
                  name="exampleCheckboxBackgroundColorDanger"
                />
                <label>Family</label>
              </div>

              <div className="column">
                <input
                  className="is-checkradio"
                  id="exampleCheckboxBackgroundColorDanger"
                  type="checkbox"
                  name="exampleCheckboxBackgroundColorDanger"
                />
                <label>Friends/Group</label>
              </div>
            </div>
          </div>

          <div className="divider" />

          <h3 className="google">Budget Per Person (in Rs.)</h3>
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
                <label>Less Than 10,000</label>
              </div>

              <div className="column">
                <input
                  className="is-checkradio"
                  id="exampleCheckboxBackgroundColorDanger"
                  type="checkbox"
                  name="exampleCheckboxBackgroundColorDanger"
                />
                <label>10,000 - 20,000</label>
              </div>

              <div className="column">
                <input
                  className="is-checkradio"
                  id="exampleCheckboxBackgroundColorDanger"
                  type="checkbox"
                  name="exampleCheckboxBackgroundColorDanger"
                />
                <label>20,000 - 40,000</label>
              </div>

              <div className="column">
                <input
                  className="is-checkradio"
                  id="exampleCheckboxBackgroundColorDanger"
                  type="checkbox"
                  name="exampleCheckboxBackgroundColorDanger"
                />
                <label>40,000 - 60,000</label>
              </div>
            </div>
          </div>

          <div className="divider" />

          <h3 className="google">Cities</h3>
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
                <label>Mahabaleshwar</label>
              </div>

              <div className="column">
                <input
                  className="is-checkradio"
                  id="exampleCheckboxBackgroundColorDanger"
                  type="checkbox"
                  name="exampleCheckboxBackgroundColorDanger"
                />
                <label>Goa</label>
              </div>

              <div className="column">
                <input
                  className="is-checkradio"
                  id="exampleCheckboxBackgroundColorDanger"
                  type="checkbox"
                  name="exampleCheckboxBackgroundColorDanger"
                />
                <label>Colva</label>
              </div>

              <div className="column">
                <input
                  className="is-checkradio"
                  id="exampleCheckboxBackgroundColorDanger"
                  type="checkbox"
                  name="exampleCheckboxBackgroundColorDanger"
                />
                <label>Candolim</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
