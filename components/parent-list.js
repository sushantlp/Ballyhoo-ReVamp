import Search from "./search";
import MainList from "./main-list";
import Filter from "./filter";

const ParentList = props => {
  return (
    <React.Fragment>
      <Search />
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-3">
              <Filter />
            </div>
            <div className="column is-8 is-offset-1">
              <MainList />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ParentList;
