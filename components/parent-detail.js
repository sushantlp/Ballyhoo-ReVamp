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
      isLoading: false,
      otp: false,
      otpButton: false,
      otpFirstPosition: -1,
      otpSecondPosition: -1,
      otpThirdPosition: -1,
      otpFourthPosition: -1
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

  onClickProceed = () => {
    console.log(this.props.customerData.customerData);
    this.updateVerifyAccountState(true);
    if (parseInt(this.props.customerData.customerData.customer_id, 10) === 0) {
      if (parseInt(this.props.detailUrlParam.result_type, 10) === 1) {
        console.log(this.state.fnbTab);
        if (this.state.fnbTab.buffet) {
          this.props.errorToast(
            "Please login",
            this.state.fnbSelectObj.offer_id
          );
        } else if (this.state.fnbTab.event) {
          this.props.errorToast(
            "Please login",
            this.state.fnbSelectObj.offer_id
          );
        } else if (this.state.fnbTab.package) {
          this.props.errorToast(
            "Please login",
            this.state.fnbSelectObj.offer_id
          );
        } else {
          console.log("HELLLO");
        }
      }
    } else {
      // if ()
      this.updateVerifyAccountState(true);
    }
  };

  updateVerifyAccountState = bool => {
    this.setState({
      verifyOpen: bool
    });
  };

  onKeyPressOtp = e => {
    if (!/[0-9]/.test(e.key) || e.target.value.length !== 0) e.preventDefault();
  };

  onChangeOtp = (e, position) => {
    if (position === 1) {
      if (e.target.value === "" && this.state.otpFirstPosition !== -1)
        this.setState({
          otpFirstPosition: -1
        });
      else
        this.setState({
          otpFirstPosition: e.target.value
        });
    } else if (position === 2) {
      if (e.target.value === "" && this.state.otpSecondPosition !== -1)
        this.setState({
          otpSecondPosition: -1
        });
      else
        this.setState({
          otpSecondPosition: e.target.value
        });
    } else if (position === 3) {
      if (e.target.value === "" && this.state.otpThirdPosition !== -1)
        this.setState({
          otpThirdPosition: -1
        });
      else
        this.setState({
          otpThirdPosition: e.target.value
        });
    } else if (position === 4) {
      if (e.target.value === "" && this.state.otpFourthPosition !== -1)
        this.setState({
          otpFourthPosition: -1
        });
      else
        this.setState({
          otpFourthPosition: e.target.value
        });
    }

    if (
      this.state.otpFirstPosition !== -1 &&
      this.state.otpSecondPosition !== -1 &&
      this.state.otpThirdPosition !== -1 &&
      this.state.otpFourthPosition !== -1
    )
      this.updateOtpButton(true);
  };

  updateOtpButton = bool => {
    this.setState({
      otpButton: bool
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
            isLoading={this.state.isLoading}
            otp={this.state.otp}
            onKeyPressOtp={this.onKeyPressOtp}
            onChangeOtp={this.onChangeOtp}
            otpButton={this.state.otpButton}
          />
        ) : null}
      </React.Fragment>
    );
  }
}
