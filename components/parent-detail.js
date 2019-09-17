import DetailTab from "./detail-tab";
import DetailCart from "./detail-cart";
import TrendingDetail from "./trending-detail";

import "./parent-detail.css";

export default class ParentDetail extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-8">
                <div className="column is-6">
                  <h4 className="ffqs parent-detail-title">55 Wall Street</h4>
                </div>
                <DetailTab
                  categoryData={this.props.categoryData}
                  foodCategoryData={this.props.foodCategoryData}
                  detailUrlParam={this.props.detailUrlParam}
                />
              </div>
              <div className="column is-4 ">
                <DetailCart />
              </div>
            </div>
          </div>
        </section>

        <TrendingDetail />
      </React.Fragment>
    );
  }
}
