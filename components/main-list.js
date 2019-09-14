import EscapeList from "./escape-list";
import FoodBreweryList from "./food-brewery-list";
import ActivityList from "./activity-list";
import SpaList from "./spa-list";
import EventList from "./event-list";
import FilterDisplay from "./filter-display";

import "./main-list.css";

const MainList = props => {
  console.log(props.parentListState.response_type);
  return (
    <React.Fragment>
      <FilterDisplay />
      <div className="main-list-container">
        {parseInt(props.parentListState.response_type, 10) === 1 ? (
          <FoodBreweryList />
        ) : parseInt(props.parentListState.response_type, 10) === 2 ? (
          <EventList />
        ) : parseInt(props.parentListState.response_type, 10) === 3 ? (
          <ActivityList />
        ) : parseInt(props.parentListState.response_type, 10) === 4 ? (
          <EscapeList />
        ) : (
          <SpaList />
        )}
      </div>
    </React.Fragment>
  );
};

export default MainList;
