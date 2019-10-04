import moment from "moment-timezone";
import DetailTab from "./detail-tab";
import DetailCart from "./detail-cart";
import TrendingDetail from "./trending-detail";

import "./parent-detail.css";

export default class ParentDetail extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      navigation: "Overview",
      booking: false,
      dayInNumber: moment().isoWeekday(),
      time: moment().format("HH:mm"),
      date: moment()
    };
  }

  onChangeDate = date => {
    this.setState({ date });
  };

  onChangeTime = time => {
    const times = time.hour + ":" + time.minute + " " + time.meridiem;

    this.setState({
      time: times
    });
  };

  changeTab = text => {
    this.setState({
      navigation: text
    });
  };

  render() {
    return (
      <React.Fragment>
        <section className="section">
          <div className="container is-fluid">
            <div className="columns">
              <div className="column is-8">
                <div className="column is-6">
                  <h4 className="ffqs parent-detail-title mb0-4">
                    {parseInt(this.props.detailUrlParam.result_type, 10) === 1
                      ? this.props.foodCategoryData.foodCategoryData.details
                          .bname
                      : parseInt(this.props.detailUrlParam.result_type, 10) ===
                        4
                      ? parseInt(
                          this.props.categoryData.categoryData.details
                            .offer_exclusive,
                          10
                        ) === 0
                        ? this.props.categoryData.categoryData.details
                            .partner_details.p_name
                        : this.props.categoryData.categoryData.details
                            .offer_title
                      : this.props.categoryData.categoryData.details
                          .partner_details.p_name}
                  </h4>

                  {parseInt(this.props.detailUrlParam.result_type, 10) === 2 ? (
                    <h5 className="ffqs parent-detail-sub-title mt0-1">
                      {this.props.categoryData.categoryData.details.offer_title}
                    </h5>
                  ) : null}
                </div>
                <DetailTab
                  categoryData={this.props.categoryData}
                  foodCategoryData={this.props.foodCategoryData}
                  detailUrlParam={this.props.detailUrlParam}
                  zomatoData={this.props.zomatoData}
                  getZomatoDataApi={this.props.getZomatoDataApi}
                  parentState={this.state}
                  changeTab={this.changeTab}
                />
              </div>
              <div className="column is-4">
                <DetailCart
                  categoryData={this.props.categoryData}
                  foodCategoryData={this.props.foodCategoryData}
                  detailUrlParam={this.props.detailUrlParam}
                  parentState={this.state}
                  onChangeDate={this.onChangeDate}
                  onChangeTime={this.onChangeTime}
                />
              </div>
            </div>
          </div>
        </section>

        <TrendingDetail
          featuring={this.props.featuring}
          routeParam={this.props.routeParam}
          cityLocality={this.props.cityLocality}
          changeLoadingState={this.props.changeLoadingState}
        />
      </React.Fragment>
    );
  }
}
