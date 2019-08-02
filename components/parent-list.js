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
              <Filter scrolling={props.scrolling} />

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
