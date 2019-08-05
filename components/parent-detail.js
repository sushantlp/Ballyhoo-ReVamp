import DetailTab from "./detail-tab";
import DetailCart from "./detail-cart";
import Trending from "./trending";

const ParentDetail = props => {
  return (
    <React.Fragment>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-8">
              <DetailTab />
            </div>
            <div className="column is-3 is-offset-1">
              <DetailCart />
            </div>
          </div>
        </div>
      </section>

      <Trending />
    </React.Fragment>
  );
};

export default ParentDetail;
