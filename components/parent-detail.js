import DetailTab from "./detail-tab";
import DetailCart from "./detail-cart";
import Trending from "./trending";

import "./parent-detail.css";

const ParentDetail = props => {
  return (
    <React.Fragment>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-8">
              <div className="column is-6">
                <h4 className="ffqs parent-detail-title">55 Wall Street</h4>
              </div>
              <DetailTab />
            </div>
            <div className="column is-4 ">
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
