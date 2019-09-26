import Spinner from "./spinner";

import EscapeList from "./escape-list";
import FoodBreweryList from "./food-brewery-list";
import ActivityList from "./activity-list";
import SpaList from "./spa-list";
import EventList from "./event-list";
import FilterDisplay from "./filter-display";

import "./main-list.css";

const MainList = props => {
  if (props.listData.listData.length === 0) return <Spinner />;

  return (
    <React.Fragment>
      {/* <FilterDisplay /> */}
      <div className="main-list-container">
        {parseInt(props.urlParam.response_type, 10) === 1 ? (
          <FoodBreweryList
            listData={props.listData}
            foodCategoryApiCall={props.foodCategoryApiCall}
            urlParam={props.urlParam}
          />
        ) : parseInt(props.urlParam.response_type, 10) === 2 ? (
          <EventList
            listData={props.listData}
            categoryApiCall={props.categoryApiCall}
          />
        ) : parseInt(props.urlParam.response_type, 10) === 3 ? (
          <ActivityList
            listData={props.listData}
            categoryApiCall={props.categoryApiCall}
          />
        ) : parseInt(props.urlParam.response_type, 10) === 4 ? (
          <EscapeList
            listData={props.listData}
            categoryApiCall={props.categoryApiCall}
          />
        ) : parseInt(props.urlParam.response_type, 10) === 5 ? (
          <SpaList
            listData={props.listData}
            categoryApiCall={props.categoryApiCall}
          />
        ) : (
          <div />
        )}
      </div>

      <section className="section">
        <div className="has-text-centered">
          {props.listData.next_page !== null ? (
            props.parentListState.isLoading ? (
              <a className="button is-danger is-loading is-large">Load More</a>
            ) : (
              <a
                className="button is-danger is-large"
                onClick={() => props.onLoadMoreList(props.listData.next_page)}
              >
                Load More
              </a>
            )
          ) : (
            <a
              className="button is-danger is-large"
              title="Disabled button"
              disabled
            >
              Load More
            </a>
          )}
        </div>
      </section>
    </React.Fragment>
  );
};

export default MainList;
