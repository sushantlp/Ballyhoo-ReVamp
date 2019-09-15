import Spinner from "./spinner";

import EscapeList from "./escape-list";
import FoodBreweryList from "./food-brewery-list";
import ActivityList from "./activity-list";
import SpaList from "./spa-list";
import EventList from "./event-list";
import FilterDisplay from "./filter-display";

import "./main-list.css";

const MainList = props => {
  console.log(props);
  console.log(props.parentListState.response_type);
  if (props.listData.listData.results.length === 0) return <Spinner />;
  return (
    <React.Fragment>
      <FilterDisplay />
      <div className="main-list-container">
        {parseInt(props.parentListState.response_type, 10) === 1 ? (
          <FoodBreweryList listData={props.listData} />
        ) : parseInt(props.parentListState.response_type, 10) === 2 ? (
          <EventList listData={props.listData} />
        ) : parseInt(props.parentListState.response_type, 10) === 3 ? (
          <ActivityList listData={props.listData} />
        ) : parseInt(props.parentListState.response_type, 10) === 4 ? (
          <EscapeList listData={props.listData} />
        ) : parseInt(props.parentListState.response_type, 10) === 5 ? (
          <SpaList listData={props.listData} />
        ) : (
          <div />
        )}
      </div>
    </React.Fragment>
  );
};

export default MainList;
