import Overview from "./overview";
import "./detail-tab.css";

export default class DetailTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navigation: "Overview"
    };
  }

  changeTab = text => {
    this.setState({
      navigation: text
    });
  };

  render() {
    console.log("TAB");
    return (
      <div>
        <div className="tabs is-boxed">
          <ul>
            <li
              className={
                this.state.navigation === "Overview" ? "is-active" : ""
              }
              onClick={() => this.changeTab("Overview")}
            >
              <a>
                <span className="icon is-medium">
                  <img src="https://img.icons8.com/cotton/20/000000/red-file--v1.png" />
                </span>
                <span>Overview</span>
              </a>
            </li>

            <li
              className={this.state.navigation === "Offers" ? "is-active" : ""}
              onClick={() => this.changeTab("Offers")}
            >
              <a>
                <span className="icon is-medium">
                  <img src="https://img.icons8.com/dusk/20/000000/sale.png" />
                </span>
                <span>Offers</span>
              </a>
            </li>

            <li
              className={this.state.navigation === "Buffets" ? "is-active" : ""}
              onClick={() => this.changeTab("Buffets")}
            >
              <a>
                <span className="icon is-medium">
                  <img src="https://img.icons8.com/bubbles/30/000000/restaurant.png" />
                </span>
                <span>Buffets</span>
              </a>
            </li>

            <li
              className={
                this.state.navigation === "Packages" ? "is-active" : ""
              }
              onClick={() => this.changeTab("Packages")}
            >
              <a>
                <span className="icon is-medium">
                  <img src="https://img.icons8.com/plasticine/30/000000/box-love.png" />
                </span>
                <span>Packages</span>
              </a>
            </li>

            <li
              className={this.state.navigation === "Events" ? "is-active" : ""}
              onClick={() => this.changeTab("Events")}
            >
              <a>
                <span className="icon is-medium">
                  <img src="https://img.icons8.com/cute-clipart/22/000000/tear-off-calendar.png" />
                </span>
                <span>Events</span>
              </a>
            </li>

            <li
              className={this.state.navigation === "Reviews" ? "is-active" : ""}
              onClick={() => this.changeTab("Reviews")}
            >
              <a>
                <span className="icon is-medium">
                  <img src="https://img.icons8.com/cute-clipart/22/000000/survey.png" />
                </span>
                <span>Reviews</span>
              </a>
            </li>
          </ul>
        </div>

        {this.state.navigation === "Overview" ? <Overview /> : null}

        {this.state.navigation === "Offers" ? <div /> : null}

        {this.state.navigation === "Buffets" ? <div /> : null}

        {this.state.navigation === "Packages" ? <div /> : null}

        {this.state.navigation === "Events" ? <div /> : null}

        {this.state.navigation === "Reviews" ? <div /> : null}
      </div>
    );
  }
}
