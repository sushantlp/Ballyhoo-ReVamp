// import Overview from "../overviewTabComponent";
// import Doctor from "../doctorTabComponent";
// import Bed from "../bedTabComponent";
// import Ambulance from "../ambulanceTabComponent";
import "./detail-tab.css";

export default class DetailTab extends React.Component {
  constructor(props) {
    super(props);
    // let navigation = "Overview";

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

        {this.state.navigation === "Overview" ? <div /> : null}

        {this.state.navigation === "Beds" ? (
          <div />
        ) : // <Bed
        //   categoryFeature={this.props.categoryFeature}
        //   parentState={this.state}
        //   authOpen={this.props.authOpen}
        //   updateOpenState={this.props.updateOpenState}
        //   bedOpen={this.props.bedOpen}
        //   updateBedOpenState={this.props.updateBedOpenState}
        //   postMobileRegister={this.props.postMobileRegister}
        //   mobileRegister={this.props.mobileRegister}
        //   postOtpVerify={this.props.postOtpVerify}
        //   otpVerify={this.props.otpVerify}
        //   onClickBook={this.onClickBook}
        //   referralBed={this.props.referralBed}
        //   validateReferralBed={this.props.validateReferralBed}
        //   selectedData={this.state.selectedData}
        //   selectedPackage={this.state.selectedPackage}
        //   history={this.props.history}
        // />
        null}

        {this.state.navigation === "Doctors" ? <div /> : null}

        {this.state.navigation === "Ambulances" ? <div /> : null}

        {this.state.navigation === "Equipments" ? <div /> : null}

        {this.state.navigation === "Nursings" ? <div /> : null}
      </div>
    );
  }
}
