import Overview from "./overview";
import FoodList from "./food-list";
import FoodEventList from "./food-event-list";
import FoodOfferList from "./food-offer-list";
import ParentPackage from "./parent-package";
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

            {parseInt(this.props.detailUrlParam.result_type, 10) === 1 &&
            this.props.foodCategoryData.foodCategoryData.offers.length > 0 ? (
              <li
                className={
                  this.state.navigation === "Offers" ? "is-active" : ""
                }
                onClick={() => this.changeTab("Offers")}
              >
                <a>
                  <span className="icon is-medium">
                    <img src="https://img.icons8.com/dusk/20/000000/sale.png" />
                  </span>
                  <span>Offers</span>
                </a>
              </li>
            ) : null}

            {parseInt(this.props.detailUrlParam.result_type, 10) === 1 &&
            this.props.foodCategoryData.foodCategoryData.packages.length > 0 ? (
              <li
                className={
                  this.state.navigation === "Buffets" ? "is-active" : ""
                }
                onClick={() => this.changeTab("Buffets")}
              >
                <a>
                  <span className="icon is-medium">
                    <img src="https://img.icons8.com/bubbles/30/000000/restaurant.png" />
                  </span>
                  <span>Buffets</span>
                </a>
              </li>
            ) : null}

            {parseInt(this.props.detailUrlParam.result_type, 10) === 1 &&
            this.props.foodCategoryData.foodCategoryData.packages.length > 0 ? (
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
            ) : parseInt(this.props.detailUrlParam.result_type, 10) !== 1 ? (
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
            ) : null}

            {parseInt(this.props.detailUrlParam.result_type, 10) === 1 &&
            this.props.foodCategoryData.foodCategoryData.events.length > 0 ? (
              <li
                className={
                  this.state.navigation === "Events" ? "is-active" : ""
                }
                onClick={() => this.changeTab("Events")}
              >
                <a>
                  <span className="icon is-medium">
                    <img src="https://img.icons8.com/cute-clipart/22/000000/tear-off-calendar.png" />
                  </span>
                  <span>Events</span>
                </a>
              </li>
            ) : null}

            {/* {parseInt(this.props.detailUrlParam.result_type, 10) !== 2 ? (
              <li
                className={
                  this.state.navigation === "Reviews" ? "is-active" : ""
                }
                onClick={() => this.changeTab("Reviews")}
              >
                <a>
                  <span className="icon is-medium">
                    <img src="https://img.icons8.com/cute-clipart/22/000000/survey.png" />
                  </span>
                  <span>Reviews</span>
                </a>
              </li>
            ) : null} */}
          </ul>
        </div>

        {this.state.navigation === "Overview" ? (
          <Overview
            categoryData={this.props.categoryData}
            foodCategoryData={this.props.foodCategoryData}
            detailUrlParam={this.props.detailUrlParam}
          />
        ) : null}

        {this.state.navigation === "Offers" ? (
          <FoodOfferList
            offer={this.props.foodCategoryData.foodCategoryData.offers}
          />
        ) : null}

        {this.state.navigation === "Buffets" ? (
          <FoodList
            buffet={this.props.foodCategoryData.foodCategoryData.buffets}
          />
        ) : null}

        {this.state.navigation === "Packages" ? (
          <ParentPackage
            categoryData={this.props.categoryData}
            foodCategoryData={this.props.foodCategoryData}
            detailUrlParam={this.props.detailUrlParam}
          />
        ) : null}

        {this.state.navigation === "Events" ? (
          <FoodEventList
            events={this.props.foodCategoryData.foodCategoryData.events}
          />
        ) : null}

        {this.state.navigation === "Reviews" ? <div /> : null}
      </div>
    );
  }
}
