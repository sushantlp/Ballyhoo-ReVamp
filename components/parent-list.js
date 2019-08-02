import Sticky from "react-stickynode";
// import { StickyContainer, Sticky } from "react-sticky";

import Search from "./search";
import MainList from "./main-list";
import Filter from "./filter";
import Similar from "./similar";
import Trending from "./trending";

const ParentList = props => {
  return (
    <React.Fragment>
      <Search />
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-3">
              <Sticky>
                <Filter />
              </Sticky>

              {/* <Similar /> */}
            </div>
            <div className="column is-8 is-offset-1">
              <MainList />
            </div>
          </div>
        </div>
      </section>

      <Trending />
    </React.Fragment>
  );
};

export default ParentList;
