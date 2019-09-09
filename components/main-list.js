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
        <EscapeList />
        <FoodBreweryList />
        <ActivityList />
        <SpaList />
        <EventList />
      </div>
    </React.Fragment>
  );
};

export default MainList;
