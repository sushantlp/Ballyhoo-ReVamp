import Overview from "./overview";
import FoodList from "./food-list";
import FoodEventList from "./food-event-list";
import FoodOfferList from "./food-offer-list";
import ParentPackage from "./parent-package";
import "./detail-tab.css";

const DetailTab = props => {
  return (
    <div>
      <div className="tabs is-boxed">
        <ul>
          <li
            className={
              props.parentState.navigation === "Overview" ? "is-active" : ""
            }
            onClick={() => props.changeTab("Overview")}
          >
            <a>
              <span className="icon is-medium">
                <img
                  src="https://img.icons8.com/cotton/20/000000/red-file--v1.png"
                  alt={props.keyword}
                />
              </span>
              <span>Overview</span>
            </a>
          </li>

          {parseInt(props.detailUrlParam.result_type, 10) === 1 ? (
            <li
              className={
                props.parentState.navigation === "Offers" ? "is-active" : ""
              }
              onClick={() => props.changeTab("Offers")}
            >
              <a>
                <span className="icon is-medium">
                  <img
                    src="https://img.icons8.com/dusk/20/000000/sale.png"
                    alt={props.keyword}
                  />
                </span>
                <span>Offers</span>
              </a>
            </li>
          ) : null}

          {parseInt(props.detailUrlParam.result_type, 10) === 1 ? (
            <li
              className={
                props.parentState.navigation === "Buffets" ? "is-active" : ""
              }
              onClick={() => props.changeTab("Buffets")}
            >
              <a>
                <span className="icon is-medium">
                  <img
                    src="https://img.icons8.com/bubbles/30/000000/restaurant.png"
                    alt={props.keyword}
                  />
                </span>
                <span>Buffets</span>
              </a>
            </li>
          ) : null}

          {parseInt(props.detailUrlParam.result_type, 10) === 1 ? (
            <li
              className={
                props.parentState.navigation === "Packages" ? "is-active" : ""
              }
              onClick={() => props.changeTab("Packages")}
            >
              <a>
                <span className="icon is-medium">
                  <img
                    src="https://img.icons8.com/plasticine/30/000000/box-love.png"
                    alt={props.keyword}
                  />
                </span>
                <span>Packages</span>
              </a>
            </li>
          ) : parseInt(props.detailUrlParam.result_type, 10) !== 1 ? (
            <li
              className={
                props.parentState.navigation === "Packages" ? "is-active" : ""
              }
              onClick={() => props.changeTab("Packages")}
            >
              <a>
                <span className="icon is-medium">
                  <img
                    src="https://img.icons8.com/plasticine/30/000000/box-love.png"
                    alt={props.keyword}
                  />
                </span>
                <span>Packages</span>
              </a>
            </li>
          ) : null}

          {parseInt(props.detailUrlParam.result_type, 10) === 1 ? (
            <li
              className={
                props.parentState.navigation === "Events" ? "is-active" : ""
              }
              onClick={() => props.changeTab("Events")}
            >
              <a>
                <span className="icon is-medium">
                  <img
                    src="https://img.icons8.com/cute-clipart/22/000000/tear-off-calendar.png"
                    alt={props.keyword}
                  />
                </span>
                <span>Events</span>
              </a>
            </li>
          ) : null}

          {parseInt(props.detailUrlParam.result_type, 10) !== 2 ? (
            <li
              className={
                props.parentState.navigation === "Reviews" ? "is-active" : ""
              }
              onClick={() => props.changeTab("Reviews")}
            >
              <a>
                <span className="icon is-medium">
                  <img
                    src="https://img.icons8.com/cute-clipart/22/000000/survey.png"
                    alt={props.keyword}
                  />
                </span>
                <span>Reviews</span>
              </a>
            </li>
          ) : null}
        </ul>
      </div>

      {props.parentState.navigation === "Overview" ? (
        <Overview
          categoryData={props.categoryData}
          foodCategoryData={props.foodCategoryData}
          detailUrlParam={props.detailUrlParam}
          zomatoData={props.zomatoData}
          getZomatoDataApi={props.getZomatoDataApi}
          keyword={props.keyword}
        />
      ) : null}

      {props.parentState.navigation === "Offers" ? (
        <FoodOfferList offer={props.foodCategoryData.foodCategoryData.offers} />
      ) : null}

      {props.parentState.navigation === "Buffets" ? (
        <FoodList
          buffet={props.foodCategoryData.foodCategoryData.buffets}
          dayInNumber={props.parentState.dayInNumber}
          expiry={props.foodCategoryData.foodCategoryData.details.expired}
          keyword={props.keyword}
        />
      ) : null}

      {props.parentState.navigation === "Packages" ? (
        <ParentPackage
          categoryData={props.categoryData}
          foodCategoryData={props.foodCategoryData}
          detailUrlParam={props.detailUrlParam}
          dayInNumber={props.parentState.dayInNumber}
          keyword={props.keyword}
        />
      ) : null}

      {props.parentState.navigation === "Events" ? (
        <FoodEventList
          events={props.foodCategoryData.foodCategoryData.events}
          dayInNumber={props.parentState.dayInNumber}
          expiry={props.foodCategoryData.foodCategoryData.details.expired}
          keyword={props.keyword}
        />
      ) : null}

      {props.parentState.navigation === "Reviews" ? <div /> : null}
    </div>
  );
};

export default DetailTab;
