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

      time: moment()
        .add(30, "minutes")
        .format("HH:mm A"),

      date: moment(),
      cartButtonText: "Procced",
      cartTotalPrice: 0,
      cartButtonDisabled: false,
      calendarDisabled: false,
      timeDisabled: false,
      fnbSelectObj: {},
      otherSelectObj: {},
      fnbTab: {
        buffet: false,
        event: false,
        package: false
      },
      verifyOpen: false,
      cartButtonLoading: false,
      fnbDiscountPrice: 0
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
    this.updateTimeDisabled(true);
    this.updateCalendarDisabled(true);
    this.onChangeDate(moment(new Date(obj.date)));

    this.updateFnbSelectObj(obj);
  };

  onFnbBuffetClick = (obj, discountPrice) => {
    const fnbTab = {
      buffet: true,
      event: false,
      package: false
    };
    console.log(obj);
    this.updateChangeTime(moment().format("HH:mm A"));
    this.updateTimeDisabled(false);
    this.updateCalendarDisabled(false);

    this.updateFnbTab(fnbTab);
    this.updateCartButtonText("Procced");

    this.updateFnbSelectObj(obj);
    this.updateFnbDiscountPrice(discountPrice);
  };

  onFnbPackageClick = (obj, discountPrice) => {
    const fnbTab = {
      buffet: false,
      event: false,
      package: true
    };

    this.updateChangeTime(moment().format("HH:mm A"));
    this.updateTimeDisabled(false);
    this.updateCalendarDisabled(false);

    this.updateFnbTab(fnbTab);
    this.updateCartButtonText("Procced");

    this.updateFnbSelectObj(obj);
    this.updateFnbDiscountPrice(discountPrice);
    console.log(obj);
  };

  updateFnbDiscountPrice = price => {
    this.setState({
      fnbDiscountPrice: price
    });
  };

  updateFnbSelectObj = obj => {
    this.setState({
      fnbSelectObj: obj
    });
  };

  updateTimeDisabled = () => {
    this.setState({
      timeDisabled: !this.state.timeDisabled
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
        }
      }
    } else {
      if (
        parseInt(this.props.customerData.customerData.email_active, 10) === 0 &&
        parseInt(this.props.customerData.customerData.mobile_active, 10) === 0
      ) {
        this.updateVerifyAccountState(true);
      }
      this.updateCartButtonLoading(true);

      if (parseInt(this.props.detailUrlParam.result_type, 10) === 1) {
        if (this.state.fnbTab.buffet) {
          let notAllowed = false;
          const time = moment(this.state.time, "HH:mm a");
          const displayTime = moment(this.state.time, "h:m");
          const dayInNumber = moment(this.state.date).isoWeekday();

          const beforeTime = moment(
            this.state.fnbSelectObj.times.start_time,
            "HH:mm a"
          );
          const afterTime = moment(
            this.state.fnbSelectObj.times.end_time,
            "HH:mm a"
          );

          if (
            (beforeTime.hour() >= 12 && afterTime.hour() <= 12) ||
            afterTime.isBefore(beforeTime)
          ) {
            afterTime.add(1, "days"); // handle spanning days endTime

            if (time.hour() <= 12) {
              time.add(1, "days"); // handle spanning days currentTime
            }
          }

          for (let i = 0; i < this.state.fnbSelectObj.day_list.length; i++) {
            if (
              parseInt(dayInNumber, 10) ===
              parseInt(this.state.fnbSelectObj.day_list[i], 10)
            ) {
              notAllowed = true;
              break;
            }
          }

          if (notAllowed) {
            if (time.isSameOrAfter(beforeTime) && !time.isAfter(afterTime)) {
              const date = moment(this.state.date).format("YYYY-MM-DD");

              const buffet = {
                offer_id: this.state.fnbSelectObj.offer_id,
                partner_id: this.props.foodCategoryData.foodCategoryData.details
                  .partner_id,
                name: this.props.foodCategoryData.foodCategoryData.details
                  .bname,
                customer_id: this.props.customerData.customerData.customer_id,
                date: date,
                time: this.state.time,
                display_time: displayTime,
                quantity: quantity,
                event: false,
                payment_amount: this.state.fnbDiscountPrice,
                payment_discount: this.state.fnbSelectObj.discount
              };

              const which = {
                fnb_reservation: 0,
                fnb_offer: 1,
                spa_appointment: 0,
                spa_offer: 0,
                activity_offer: 0,
                event_offer: 0,
                escape_offer: 0
              };

              sessionStorage.removeItem("RESERVATION");
              sessionStorage.removeItem("SPA_APPOINTMENT");
              sessionStorage.removeItem("SPA_OFFER");
              sessionStorage.removeItem("ACTIVITY_OFFER");
              sessionStorage.removeItem("EVENT_OFFER");
              sessionStorage.removeItem("ESCAPE_OFFER");

              sessionStorage.setItem("FNB_OFFER", JSON.stringify(buffet));
              sessionStorage.setItem("WHICH", JSON.stringify(which));

              this.props.routeChange("/checkout");
            } else {
              this.updateCartButtonLoading(false);
              this.props.errorToast(
                `Wrong time !!! valid only ${this.state.fnbSelectObj.times.start_time} to ${this.state.fnbSelectObj.times.end_time}`,
                this.state.fnbSelectObj.offer_id,
                true
              );
            }
          } else {
            this.updateCartButtonLoading(false);
            this.props.errorToast(
              `Wrong Date!!! valid only ${this.state.fnbSelectObj.days}`,
              this.state.fnbSelectObj.offer_id,
              true
            );
          }
        } else if (this.state.fnbTab.event) {
          const time = moment(this.state.time, "HH:mm a");

          const beforeTime = moment(
            this.state.fnbSelectObj.times.start_time,
            "HH:mm a"
          );
          const afterTime = moment(
            this.state.fnbSelectObj.times.end_time,
            "HH:mm a"
          );

          if (
            (beforeTime.hour() >= 12 && afterTime.hour() <= 12) ||
            afterTime.isBefore(beforeTime)
          ) {
            afterTime.add(1, "days"); // handle spanning days endTime

            if (time.hour() <= 12) {
              time.add(1, "days"); // handle spanning days currentTime
            }
          }

          if (time.isSameOrAfter(beforeTime) && !time.isAfter(afterTime)) {
            const date = moment(this.state.date).format("YYYY-MM-DD");

            const event = {
              offer_id: this.state.fnbSelectObj.offer_id,
              partner_id: this.props.foodCategoryData.foodCategoryData.details
                .partner_id,
              name: this.props.foodCategoryData.foodCategoryData.details.bname,
              customer_id: this.props.customerData.customerData.customer_id,
              customer_mobile: this.props.customerData.customerData.mobile,
              customer_email: this.props.customerData.customerData.email,
              display_time: displayTime,
              date: date,
              time: this.state.time,
              quantity: quantity,
              event: true,
              payment_amount: 0,
              payment_discount: 0
            };

            const which = {
              fnb_reservation: 0,
              fnb_offer: 1,
              spa_appointment: 0,
              spa_offer: 0,
              activity_offer: 0,
              event_offer: 0,
              escape_offer: 0
            };

            sessionStorage.removeItem("RESERVATION");
            sessionStorage.removeItem("SPA_APPOINTMENT");
            sessionStorage.removeItem("SPA_OFFER");
            sessionStorage.removeItem("ACTIVITY_OFFER");
            sessionStorage.removeItem("EVENT_OFFER");
            sessionStorage.removeItem("ESCAPE_OFFER");

            sessionStorage.setItem("FNB_OFFER", JSON.stringify(event));
            sessionStorage.setItem("WHICH", JSON.stringify(which));

            this.props.routeChange("/checkout");
          } else {
            this.updateCartButtonLoading(false);
            this.props.errorToast(
              "Plese check time",
              this.state.fnbSelectObj.offer_id,
              true
            );
          }
        } else if (this.state.fnbTab.package) {
          let notAllowed = false;
          const time = moment(this.state.time, "HH:mm a");
          const displayTime = moment(this.state.time, "h:m");
          const dayInNumber = moment(this.state.date).isoWeekday();

          const beforeTime = moment(
            this.state.fnbSelectObj.times.start_time,
            "HH:mm a"
          );
          const afterTime = moment(
            this.state.fnbSelectObj.times.end_time,
            "HH:mm a"
          );

          if (
            (beforeTime.hour() >= 12 && afterTime.hour() <= 12) ||
            afterTime.isBefore(beforeTime)
          ) {
            afterTime.add(1, "days"); // handle spanning days endTime

            if (time.hour() <= 12) {
              time.add(1, "days"); // handle spanning days currentTime
            }
          }

          for (let i = 0; i < this.state.fnbSelectObj.day_list.length; i++) {
            if (
              parseInt(dayInNumber, 10) ===
              parseInt(this.state.fnbSelectObj.day_list[i], 10)
            ) {
              notAllowed = true;
              break;
            }
          }

          if (notAllowed) {
            if (time.isSameOrAfter(beforeTime) && !time.isAfter(afterTime)) {
              const date = moment(this.state.date).format("YYYY-MM-DD");

              const fnbPackage = {
                offer_id: this.state.fnbSelectObj.offer_id,
                partner_id: this.props.foodCategoryData.foodCategoryData.details
                  .partner_id,
                name: this.props.foodCategoryData.foodCategoryData.details
                  .bname,
                customer_id: this.props.customerData.customerData.customer_id,
                customer_mobile: this.props.customerData.customerData.mobile,
                customer_email: this.props.customerData.customerData.email,
                display_time: displayTime,
                date: date,
                time: this.state.time,
                quantity: quantity,
                event: false,
                payment_amount: this.state.fnbDiscountPrice,
                payment_discount: this.state.fnbSelectObj.discount
              };

              const which = {
                fnb_reservation: 0,
                fnb_offer: 1,
                spa_appointment: 0,
                spa_offer: 0,
                activity_offer: 0,
                event_offer: 0,
                escape_offer: 0
              };

              sessionStorage.removeItem("RESERVATION");
              sessionStorage.removeItem("SPA_APPOINTMENT");
              sessionStorage.removeItem("SPA_OFFER");
              sessionStorage.removeItem("ACTIVITY_OFFER");
              sessionStorage.removeItem("EVENT_OFFER");
              sessionStorage.removeItem("ESCAPE_OFFER");

              sessionStorage.setItem("FNB_OFFER", JSON.stringify(fnbPackage));
              sessionStorage.setItem("WHICH", JSON.stringify(which));

              this.props.routeChange("/checkout");
            } else {
              this.updateCartButtonLoading(false);
              this.props.errorToast(
                `Wrong time !!! valid only ${this.state.fnbSelectObj.times.start_time} to ${this.state.fnbSelectObj.times.end_time}`,
                this.state.fnbSelectObj.offer_id,
                true
              );
            }
          } else {
            this.updateCartButtonLoading(false);
            this.props.errorToast(
              `Wrong Date!!! valid only ${this.state.fnbSelectObj.days}`,
              this.state.fnbSelectObj.offer_id,
              true
            );
          }
        } else {
          const currentTime = moment(moment().format("HH:mm A"));
          const time = moment(this.state.time, "HH:mm A");
          const displayTime = moment(moment(this.state.time, "h:m"));

          if (currentTime.isAfter(time)) {
            this.updateCartButtonLoading(false);
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
              customer_mobile: this.props.customerData.customerData.mobile,
              customer_email: this.props.customerData.customerData.email,
              date: date,
              time: this.state.time,
              display_time: displayTime,
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

            sessionStorage.removeItem("FNB_OFFER");
            sessionStorage.removeItem("SPA_APPOINTMENT");
            sessionStorage.removeItem("SPA_OFFER");
            sessionStorage.removeItem("ACTIVITY_OFFER");
            sessionStorage.removeItem("EVENT_OFFER");
            sessionStorage.removeItem("ESCAPE_OFFER");

            sessionStorage.setItem("RESERVATION", JSON.stringify(reservation));
            sessionStorage.setItem("WHICH", JSON.stringify(which));

            this.props.routeChange("/checkout");
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
            getProfile={this.props.getProfile}
            profileData={this.props.profileData}
            successToast={this.props.successToast}
            updateCustomerData={this.props.updateCustomerData}
          />
        ) : null}
      </React.Fragment>
    );
  }
}
