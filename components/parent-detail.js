import moment from "moment-timezone";
import DetailTab from "./detail-tab";
import DetailCart from "./detail-cart";
import TrendingDetail from "./trending-detail";

import "./parent-detail.css";

export default class ParentDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navigation: "Overview",
      booking: false,
      dayInNumber: moment().isoWeekday(),
      time: moment().format("HH:mm"),
      date: moment(),
      cartButtonText: "Procced",
      cartTotalPrice: 0,
      cartButtonDisabled: false,
      calendarDisabled: false,
      fnbSelectObj: {},
      otherSelectObj: {},
      fnbTab: {
        buffet: false,
        event: false,
        package: false
      }
    };
  }

  componentDidMount() {
    if (parseInt(this.props.detailUrlParam.result_type, 10) === 1) {
      if (
        this.props.foodCategoryData.foodCategoryData.details.offering ===
        "FNB Package"
      ) {
        this.setState({
          navigation: "Packages"
        });
      } else if (
        this.props.foodCategoryData.foodCategoryData.details.offering ===
        "Buffets"
      ) {
        this.setState({
          navigation: "Buffets"
        });
      } else if (
        this.props.foodCategoryData.foodCategoryData.details.offering ===
        "Events"
      ) {
        this.setState({
          navigation: "Events"
        });
      }

      let disabled = false;
      if (
        parseInt(
          this.props.foodCategoryData.foodCategoryData.details.expired,
          10
        ) === 1
      ) {
        // Only fnb
        disabled = true;
      } else {
        if (
          parseInt(
            this.props.foodCategoryData.foodCategoryData.details.rsvp,
            10
          ) === 0
        ) {
          // Only fnb
          disabled = true;
        }
      }

      this.updateCartButtonDisabled(disabled);
      this.updateCartButtonText("Reservation");
    } else {
      let disabled = false;
      if (
        parseInt(this.props.categoryData.categoryData.details.expired, 10) === 1
      ) {
        disabled = true;
      } else {
        if (
          parseInt(this.props.categoryData.categoryData.details.expired, 10) ===
          1
        ) {
          // Except fnb
          disabled = true;
        } else if (
          parseInt(this.props.detailUrlParam.result_type, 10) === 5 &&
          parseInt(
            this.props.categoryData.categoryData.details
              .offer_appointment_status,
            10
          ) === 0
        ) {
          // Only Saloon Appointment
          disabled = true;
        }

        this.updateCartButtonDisabled(disabled);
        // Saloon Appointment
        if (parseInt(this.props.detailUrlParam.result_type, 10) === 5) {
          this.updateCartButtonText("Appointment");
        }

        // Accept only Event & Activity & Escape
        if (parseInt(this.props.detailUrlParam.result_type, 10) !== 5) {
          this.setState({
            cartTotalPrice: parseFloat(
              this.props.categoryData.categoryData.details.offer_min_price
            )
          });
        }
      }
    }
  }

  onChangeDate = date => {
    this.setState({ date });
  };

  onChangeTime = time => {
    const times = time.hour + ":" + time.minute + " " + time.meridiem;
    this.updateChangeTime(times);
  };

  changeTab = text => {
    this.setState({
      navigation: text
    });
  };

  onFnbEventClick = obj => {
    const fnbTab = {
      buffet: false,
      event: true,
      package: false
    };

    this.updateFnbTab(fnbTab);
    this.updateCartButtonText("Procced");
    this.updateChangeTime(obj.times.start_time);
    this.updateCalendarDisabled();
    this.onChangeDate(moment(new Date(obj.date)));
    this.updateFnbSelectObj(obj);

    console.log(obj);
  };

  onFnbBuffetClick = obj => {
    this.updateFnbSelectObj(obj);
    console.log(obj);
  };

  onFnbPackageClick = obj => {
    this.updateFnbSelectObj(obj);
    console.log(obj);
  };

  updateFnbSelectObj = obj => {
    this.setState({
      fnbSelectObj: obj
    });
  };

  updateCalendarDisabled = () => {
    this.setState({
      calendarDisabled: !this.state.calendarDisabled
    });
  };

  updateChangeTime = time => {
    this.setState({
      time
    });
  };

  updateCartButtonText = text => {
    this.setState({
      cartButtonText: text
    });
  };

  updateCartButtonDisabled = disabled => {
    this.setState({
      cartButtonDisabled: disabled
    });
  };

  updateFnbTab = tab => {
    this.setState({
      fnbTab: tab
    });
  };

  onClickProceed = () => {
    console.log(this.props.customerData);
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
                  keyword={this.props.keyword}
                  onFnbEventClick={this.onFnbEventClick}
                  onFnbBuffetClick={this.onFnbBuffetClick}
                  onFnbPackageClick={this.onFnbPackageClick}
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
                  onClickProceed={this.onClickProceed}
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
          detailUrlParam={this.props.detailUrlParam}
          keyword={this.props.keyword}
        />
      </React.Fragment>
    );
  }
}
