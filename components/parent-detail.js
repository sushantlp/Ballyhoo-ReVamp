import moment from "moment-timezone";
import DetailTab from "./detail-tab";
import DetailCart from "./detail-cart";
import TrendingDetail from "./trending-detail";
import VerifyAccount from "./verify-account";

import "./parent-detail.css";

export default class ParentDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navigation: "Overview",
      booking: false,
      dayInNumber: moment().isoWeekday(),
      currentTime: moment().format("HH:mm"),
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
      },
      verifyOpen: false,
      cartButtonLoading: false
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
    const fnbTab = {
      buffet: true,
      event: false,
      package: false
    };

    this.updateFnbTab(fnbTab);
    this.updateFnbSelectObj(obj);
    console.log(obj);
  };

  onFnbPackageClick = obj => {
    const fnbTab = {
      buffet: false,
      event: false,
      package: true
    };

    this.updateFnbTab(fnbTab);
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

  updateCartButtonLoading = bool => {
    this.setState({
      cartButtonLoading: bool
    });
  };

  onClickProceed = quantity => {
    if (parseInt(this.props.customerData.customerData.customer_id, 10) === 0) {
      if (parseInt(this.props.detailUrlParam.result_type, 10) === 1) {
        if (this.state.fnbTab.buffet) {
          this.props.errorToast(
            "Please login",
            this.state.fnbSelectObj.offer_id,
            false
          );
        } else if (this.state.fnbTab.event) {
          this.props.errorToast(
            "Please login",
            this.state.fnbSelectObj.offer_id,
            false
          );
        } else if (this.state.fnbTab.package) {
          this.props.errorToast(
            "Please login",
            this.state.fnbSelectObj.offer_id,
            false
          );
        } else {
          this.props.errorToast(
            "Please login",
            this.props.foodCategoryData.foodCategoryData.details.partner_id,
            false
          );

          // this.props.routeChange("/checkout");
          // this.props.postFnbReservation(
          //   this.props.foodCategoryData.foodCategoryData.details.partner_id,
          //   this.props.customerData.customerData.customer_id,
          //   date,
          //   this.state.time,
          //   quantity
          // );
        }
      }
    } else {
      if (
        parseInt(this.props.customerData.customerData.email_active, 10) === 0 &&
        parseInt(this.props.customerData.customerData.mobile_active, 10) === 0
      )
        this.updateVerifyAccountState(true);

      this.updateCartButtonLoading(true);
      if (parseInt(this.props.detailUrlParam.result_type, 10) === 1) {
        if (this.state.fnbTab.buffet) {
        } else if (this.state.fnbTab.event) {
        } else if (this.state.fnbTab.package) {
        } else {
          const currentTime = moment(this.state.currentTime, "HH:mm a");
          const time = moment(this.state.time, "HH:mm a");

          if (currentTime.isAfter(time)) {
            this.props.errorToast(
              "Time should be greater and equal current time",
              1,
              true
            );
          } else {
            const date = moment(this.state.date).format("YYYY-MM-DD");

            const reservation = {
              name: this.props.foodCategoryData.foodCategoryData.details.bname,
              partner_id: this.props.foodCategoryData.foodCategoryData.details
                .partner_id,
              customer_id: this.props.customerData.customerData.customer_id,
              date: date,
              time: this.state.time,
              quantity: quantity
            };

            const which = {
              fnb_reservation: 1,
              fnb_offer: 0,
              spa_appointment: 0,
              spa_offer: 0,
              activity_offer: 0,
              event_offer: 0,
              escape_offer: 0
            };

            sessionStorage.setItem("RESERVATION", JSON.stringify(reservation));
            sessionStorage.setItem("WHICH", JSON.stringify(which));
          }
        }
      }
    }
  };

  updateVerifyAccountState = bool => {
    this.setState({
      verifyOpen: bool
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

        {this.state.verifyOpen ? (
          <VerifyAccount
            verifyOpen={this.state.verifyOpen}
            updateVerifyAccountState={this.updateVerifyAccountState}
            email={this.props.customerData.customerData.email}
            postOtpAction={this.props.postOtpAction}
            getOtpAction={this.props.getOtpAction}
            getOtp={this.props.getOtp}
            postOtp={this.props.postOtp}
            customerId={this.props.customerData.customerData.customer_id}
          />
        ) : null}
      </React.Fragment>
    );
  }
}
