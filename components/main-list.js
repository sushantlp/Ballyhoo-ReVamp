import EscapeList from "./escape-list";
import FoodBreweryList from "./food-brewery-list";
import ActivityList from "./activity-list";
import SpaList from "./spa-list";
import EventList from "./event-list";
import FilterDisplay from "./filter-display";

import "./main-list.css";

const MainList = props => {
  return (
    <React.Fragment>
      <FilterDisplay />
      <div className="main-list-container">
        {parseInt(props.parentListState.response_type, 10) === 1 ? (
          <FoodBreweryList listProps={props.listData} />
        ) : parseInt(props.parentListState.response_type, 10) === 2 ? (
          <EventList listProps={props.listData} />
        ) : parseInt(props.parentListState.response_type, 10) === 3 ? (
          <ActivityList listProps={props.listData} />
        ) : parseInt(props.parentListState.response_type, 10) === 4 ? (
          <EscapeList listProps={props.listData} />
        ) : (
          <SpaList listProps={props.listData} />
        )}
      </div>
    </React.Fragment>
  );
};

export default MainList;
