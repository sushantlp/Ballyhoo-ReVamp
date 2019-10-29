import moment from "moment";
import DetailTab from "./detail-tab";
import DetailCart from "./detail-cart";
import TrendingDetail from "./trending-detail";
import VerifyAccount from "./verify-account";
import SaloonMenu from "./saloon-menu";
import "./parent-detail.css";

export default class ParentDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navigation: "Overview",
      booking: false,
      dayInNumber: moment().isoWeekday(),
      currentDate: moment().format("YYYY-MM-DD"),
      currentTime: moment().format("hh:mm a"),
      time: moment()
        .add(30, "minutes")
        .format("HH:mm A"),
      displayTime: moment()
        .add(30, "minutes")
        .format("hh:mm a"),

      date: moment(),
      cartButtonText: "Procced",
      cartTotalPrice: 0,
      cartCopyTotalPrice: 0,
      cartButtonDisabled: false,
      calendarDisabled: false,
      timeDisabled: false,
      fnbSelectObj: {},
      otherCartObj: [],
      otherTab: {
        saloon: false,
        escape: false,
        exculsive: false,
        activity: false,
        event: false
      },
      fnbTab: {
        buffet: false,
        event: false,
        package: false
      },
      verifyOpen: false,
      cartButtonLoading: false,
      cartQuantity: false,
      escapeQuery: false,
      saloonMenu: false
    };
  }

  componentDidMount() {
    if (parseInt(this.props.detailUrlParam.result_type, 10) === 1) {
      this.onChangeCartQuantity(true);
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
          // this.setState({
          //   cartTotalPrice: parseFloat(
          //     this.props.categoryData.categoryData.details.offer_min_price
          //   )
          // });
        }
      }
    }
  }

  onClickPackageMinus = (key, priceId) => {
    let cartData = this.state.otherCartObj;
    let totalAmount = this.state.cartCopyTotalPrice;
    const quantity = cartData[key].quantity - 1;

    if (parseInt(quantity, 10) === 0) {
      totalAmount =
        parseFloat(totalAmount) - parseFloat(cartData[key].copy_price);
      cartData.splice(key, 1);
    } else {
      cartData[key].price = cartData[key].copy_price * quantity;
      cartData[key].quantity = quantity;
      totalAmount =
        parseFloat(totalAmount) - parseFloat(cartData[key].copy_price);
    }

    this.setState({
      otherCartObj: cartData
    });

    this.updateCartTotalPrice(parseFloat(totalAmount));
    this.updateCopyCartTotalPrice(parseFloat(totalAmount));

    parseInt(this.props.detailUrlParam.result_type, 10) === 5
      ? this.state.otherCartObj.length === 0
        ? this.updateCartButtonText("Appointment")
        : null
      : null;
  };

  onClickPackagePlus = (key, priceId) => {
    let cartData = this.state.otherCartObj;
    let totalAmount = this.state.cartCopyTotalPrice;

    const quantity = cartData[key].quantity + 1;
    cartData[key].price = cartData[key].copy_price * quantity;
    cartData[key].quantity = quantity;
    totalAmount =
      parseFloat(totalAmount) + parseFloat(cartData[key].copy_price);

    this.setState({
      otherCartObj: cartData
    });

    this.updateCartTotalPrice(parseFloat(totalAmount));
    this.updateCopyCartTotalPrice(parseFloat(totalAmount));
  };

  fnbQuantityPrice = quantity => {
    if (quantity === 0) {
      if (
        this.state.fnbTab.buffet ||
        this.state.fnbTab.event ||
        this.state.fnbTab.package
      ) {
        this.updateCartButtonText("Reservation");
        this.updateCartTotalPrice(0);
        this.updateCopyCartTotalPrice(0);
        this.updateFnbSelectObj({});
      }
    } else {
      const price = this.state.cartCopyTotalPrice * quantity;
      this.updateCartTotalPrice(price);
    }
  };

  onChangeCartQuantity = bool => {
    this.setState({
      cartQuantity: bool
    });
  };

  onChangeDate = date => {
    if (parseInt(this.props.detailUrlParam.result_type, 10) === 3) {
      if (this.state.otherCartObj.length !== 0) {
        this.props.warningToast(
          "Unable to make payment due to time validation"
        );

        this.setState({
          otherCartObj: []
        });
      }
    }
    this.setState({ date });
  };

  onChangeTime = (time, flag = false) => {
    if (flag) {
      const dateSplit = time.split(" ");
      const times = dateSplit[0] + ":" + dateSplit[1] + " " + dateSplit[2];
      this.updateChangeTime(times);
      this.updateDisplayTime(dateSplit[0] + ":" + dateSplit[1]);
    } else {
      const times = time.hour + ":" + time.minute + " " + time.meridiem;
      this.updateChangeTime(times);

      this.updateDisplayTime(time.hour + ":" + time.minute);
    }
  };

  changeTab = text => {
    this.setState({
      navigation: text
    });
  };

  dateCheck = date => {
    return (
      moment(date).isSameOrAfter(
        this.props.categoryData.categoryData.details.offer_buy_end_date,
        "day"
      ) || moment(date).isSameOrBefore(this.state.currentDate)
    );
  };

  cartLogic = (packages, price, cutPrice, date) => {
    let cartData = this.state.otherCartObj;
    let dynamicPrice;

    if (parseInt(this.props.detailUrlParam.result_type, 10) === 3) {
      const dayInNumber = moment(this.state.date).isoWeekday();
      for (let i = 0; i < price.daily_prices.length; i++) {
        if (parseInt(dayInNumber, 10) === price.daily_prices[i].day_id) {
          if (parseInt(price.price_discount, 10) !== 0) {
            dynamicPrice =
              (price.daily_prices[i].price * price.price_discount) / 100;
            dynamicPrice = price.daily_prices[i].price - price;
          }
        }
      }
    }

    const obj = {
      package_caption: packages.package_caption,
      price_id: price.price_id,
      price_available: price.price_available,
      price_discount: price.price_discount,
      price:
        dynamicPrice === undefined
          ? cutPrice === 0
            ? price.price
            : cutPrice
          : dynamicPrice,
      copy_price:
        dynamicPrice === undefined
          ? cutPrice === 0
            ? price.price
            : cutPrice
          : dynamicPrice,
      price_caption: price.price_caption,
      quantity: 1,
      date: date,
      api_price: price.price
    };

    if (cartData.length !== 0) {
      let copyPrice = this.state.cartTotalPrice;
      for (let i = 0; i < cartData.length; i++) {
        let inside = true;
        for (let j = 0; j < cartData.length; j++) {
          if (
            parseInt(cartData[j].price_id, 10) === parseInt(price.price_id, 10)
          ) {
            inside = false;
            break;
          }
        }

        if (inside) {
          cartData.push(obj);
          this.setState({
            otherCartObj: cartData
          });
          copyPrice = parseFloat(copyPrice) + parseFloat(obj.price);
          break;
        }
      }

      this.updateCartTotalPrice(copyPrice);
      this.updateCopyCartTotalPrice(copyPrice);
    } else {
      cartData.push(obj);
      this.setState({
        otherCartObj: cartData
      });
      this.updateCartTotalPrice(parseFloat(obj.price));
      this.updateCopyCartTotalPrice(parseFloat(obj.price));
    }
  };

  onEventClick = (packages, price, cutPrice, beautyDate) => {
    const otherTab = {
      saloon: false,
      escape: false,
      exculsive: false,
      activity: false,
      event: true
    };
    this.setState({
      otherTab
    });

    this.cartLogic(packages, price, cutPrice, beautyDate);
  };

  onEscapeClick = (packages, price, cutPrice) => {
    const otherTab = {
      saloon: false,
      escape: true,
      exculsive: false,
      activity: false,
      event: false
    };
    this.setState({
      otherTab
    });

    this.cartLogic(packages, price, cutPrice);
  };

  onExculsiveClick = (packages, cutPrice) => {
    const otherTab = {
      saloon: false,
      escape: false,
      exculsive: true,
      activity: false,
      event: false
    };
    this.setState({
      otherTab
    });

    let cartData = this.state.otherCartObj;

    const obj = {
      package_caption: packages.package_caption,
      price_id: packages.package_id,
      price_available: packages.package_available,
      price_discount: packages.package_discount,
      api_price: packages.price,
      price: cutPrice === 0 ? packages.price : cutPrice,
      copy_price: cutPrice === 0 ? packages.price : cutPrice,
      price_caption: undefined,
      quantity: 1,
      date: undefined
    };

    if (cartData.length !== 0) {
      let copyPrice = this.state.cartTotalPrice;
      for (let i = 0; i < cartData.length; i++) {
        let inside = true;
        for (let j = 0; j < cartData.length; j++) {
          if (
            parseInt(cartData[j].price_id, 10) ===
            parseInt(packages.package_id, 10)
          ) {
            inside = false;
            break;
          }
        }

        if (inside) {
          cartData.push(obj);
          this.setState({
            otherCartObj: cartData
          });
          copyPrice = parseFloat(copyPrice) + parseFloat(obj.price);
          break;
        }
      }

      this.updateCartTotalPrice(copyPrice);
      this.updateCopyCartTotalPrice(copyPrice);
    } else {
      cartData.push(obj);
      this.setState({
        otherCartObj: cartData
      });
      this.updateCartTotalPrice(parseFloat(obj.price));
      this.updateCopyCartTotalPrice(parseFloat(obj.price));
    }
  };

  onActivityClick = (packages, price, cutPrice) => {
    const otherTab = {
      saloon: false,
      escape: false,
      exculsive: false,
      activity: true,
      event: false
    };
    this.setState({
      otherTab
    });
    this.cartLogic(packages, price, cutPrice);
  };

  onSaloonClick = (packages, price, cutPrice) => {
    const otherTab = {
      saloon: true,
      escape: false,
      exculsive: false,
      activity: false,
      event: false
    };
    this.setState({
      otherTab
    });

    this.updateCartButtonText("Procced");
    this.cartLogic(packages, price, cutPrice);
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
    this.updateCartTotalPrice(0);
    this.updateCopyCartTotalPrice(0);
  };

  onFnbBuffetClick = (obj, discountPrice) => {
    const fnbTab = {
      buffet: true,
      event: false,
      package: false
    };

    this.updateChangeTime(moment().format("HH:mm A"));

    this.updateDisplayTime(moment().format("hh:mm a"));

    this.updateTimeDisabled(false);
    this.updateCalendarDisabled(false);

    this.updateFnbTab(fnbTab);
    this.updateCartButtonText("Procced");

    this.updateFnbSelectObj(obj);
    this.updateCartTotalPrice(discountPrice);
    this.updateCopyCartTotalPrice(discountPrice);
  };

  onFnbPackageClick = (obj, discountPrice) => {
    const fnbTab = {
      buffet: false,
      event: false,
      package: true
    };

    this.updateChangeTime(moment().format("HH:mm A"));

    this.updateDisplayTime(moment().format("hh:mm a"));

    this.updateTimeDisabled(false);
    this.updateCalendarDisabled(false);

    this.updateFnbTab(fnbTab);
    this.updateCartButtonText("Procced");

    this.updateFnbSelectObj(obj);
    this.updateCartTotalPrice(discountPrice);
    this.updateCopyCartTotalPrice(discountPrice);
  };

  updateCartTotalPrice = price => {
    this.setState({
      cartTotalPrice: price
    });
  };

  updateCopyCartTotalPrice = price => {
    this.setState({
      cartCopyTotalPrice: price
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
      time: time,
      currentTime: time
    });
  };

  updateDisplayTime = time => {
    this.setState({
      displayTime: time
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

  updateSaloonMenuState = bool => {
    this.setState({
      saloonMenu: bool
    });
  };

  onClickProceed = quantity => {
    if (parseInt(this.props.customerData.customerData.customer_id, 10) === 0) {
      if (parseInt(this.props.detailUrlParam.result_type, 10) === 1) {
        if (this.state.fnbTab.buffet) {
          this.props.errorToast(
            "Please login",
            this.props.foodCategoryData.foodCategoryData.details.partner_id,
            false
          );
        } else if (this.state.fnbTab.event) {
          this.props.errorToast(
            "Please login",
            this.props.foodCategoryData.foodCategoryData.details.partner_id,
            false
          );
        } else if (this.state.fnbTab.package) {
          this.props.errorToast(
            "Please login",
            this.props.foodCategoryData.foodCategoryData.details.partner_id,
            false
          );
        } else {
          this.props.errorToast(
            "Please login",
            this.props.foodCategoryData.foodCategoryData.details.partner_id,
            false
          );
        }
      } else {
        this.props.errorToast(
          "Please login",
          this.props.categoryData.categoryData.details.partner_details.p_id,
          false
        );
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
              const displayDate = moment(this.state.date).format("DD-MM-YYYY");
              const buffet = {
                offer_id: this.state.fnbSelectObj.offer_id,
                partner_id: this.props.foodCategoryData.foodCategoryData.details
                  .partner_id,
                name: this.props.foodCategoryData.foodCategoryData.details
                  .bname,
                customer_id: this.props.customerData.customerData.customer_id,
                date: date,
                time: this.state.time,
                display_time: this.state.displayTime,
                display_date: displayDate,
                quantity: quantity,
                event: false,
                payment_amount: this.state.cartTotalPrice,
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
            const displayDate = moment(this.state.date).format("DD-MM-YYYY");

            const event = {
              offer_id: this.state.fnbSelectObj.offer_id,
              partner_id: this.props.foodCategoryData.foodCategoryData.details
                .partner_id,
              name: this.props.foodCategoryData.foodCategoryData.details.bname,
              customer_id: this.props.customerData.customerData.customer_id,
              customer_mobile: this.props.customerData.customerData.mobile,
              customer_email: this.props.customerData.customerData.email,
              display_time: this.state.displayTime,
              display_date: displayDate,
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
              const displayDate = moment(this.state.date).format("DD-MM-YYYY");

              const fnbPackage = {
                offer_id: this.state.fnbSelectObj.offer_id,
                partner_id: this.props.foodCategoryData.foodCategoryData.details
                  .partner_id,
                name: this.props.foodCategoryData.foodCategoryData.details
                  .bname,
                customer_id: this.props.customerData.customerData.customer_id,
                customer_mobile: this.props.customerData.customerData.mobile,
                customer_email: this.props.customerData.customerData.email,
                display_time: this.state.displayTime,
                display_date: displayDate,
                date: date,
                time: this.state.time,
                quantity: quantity,
                event: false,
                payment_amount: this.state.cartTotalPrice,
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

          if (currentTime.isAfter(time)) {
            this.updateCartButtonLoading(false);
            this.props.errorToast(
              "Time should be greater and equal current time",
              1,
              true
            );
          } else {
            const date = moment(this.state.date).format("YYYY-MM-DD");
            const displayDate = moment(this.state.date).format("DD-MM-YYYY");

            const reservation = {
              name: this.props.foodCategoryData.foodCategoryData.details.bname,
              partner_id: this.props.foodCategoryData.foodCategoryData.details
                .partner_id,
              customer_id: this.props.customerData.customerData.customer_id,
              customer_mobile: this.props.customerData.customerData.mobile,
              customer_email: this.props.customerData.customerData.email,
              date: date,
              time: this.state.time,
              display_time: this.state.displayTime,
              display_date: displayDate,
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
      } else {
        if (this.state.otherTab.saloon) {
          const date = moment(this.state.date).format("YYYY-MM-DD");
          const displayDate = moment(this.state.date).format("DD-MM-YYYY");
          const time = moment(this.state.time, "HH:mm A").format("HH:mm A");
          const item = this.otherCategoryJsonBuilder(this.state.otherCartObj);

          const saloonPackage = {
            offer_id: this.props.categoryData.categoryData.details.offer_id,
            partner_id: this.props.categoryData.categoryData.details
              .partner_details.p_id,
            name: this.props.categoryData.categoryData.details.partner_details
              .p_name,
            customer_id: this.props.customerData.customerData.customer_id,
            customer_mobile: this.props.customerData.customerData.mobile,
            customer_email: this.props.customerData.customerData.email,
            display_time: this.state.displayTime,
            display_date: displayDate,
            date: date,
            time: time,
            payment_amount: this.state.cartTotalPrice,
            packages: this.state.otherCartObj,
            items: item
          };

          const which = {
            fnb_reservation: 0,
            fnb_offer: 0,
            spa_appointment: 0,
            spa_offer: 1,
            activity_offer: 0,
            event_offer: 0,
            escape_offer: 0
          };

          sessionStorage.removeItem("RESERVATION");
          sessionStorage.removeItem("SPA_APPOINTMENT");
          sessionStorage.removeItem("ACTIVITY_OFFER");
          sessionStorage.removeItem("EVENT_OFFER");
          sessionStorage.removeItem("ESCAPE_OFFER");
          sessionStorage.removeItem("FNB_OFFER");

          sessionStorage.setItem("SPA_OFFER", JSON.stringify(saloonPackage));
          sessionStorage.setItem("WHICH", JSON.stringify(which));

          this.props.routeChange("/checkout");
        } else if (
          this.state.otherTab.escape ||
          this.state.otherTab.exculsive
        ) {
          const date = moment(this.state.date).format("YYYY-MM-DD");
          const displayDate = moment(this.state.date).format("DD-MM-YYYY");
          const time = moment(this.state.time, "HH:mm A").format("HH:mm A");
          const item = this.otherCategoryJsonBuilder(this.state.otherCartObj);

          const escapePackage = {
            offer_id: this.props.categoryData.categoryData.details.offer_id,
            partner_id: this.props.categoryData.categoryData.details
              .partner_details.p_id,
            name: this.props.categoryData.categoryData.details.partner_details
              .p_name,
            customer_id: this.props.customerData.customerData.customer_id,
            customer_mobile: this.props.customerData.customerData.mobile,
            customer_email: this.props.customerData.customerData.email,
            display_time: this.state.displayTime,
            display_date: displayDate,
            date: date,
            time: time,
            payment_amount: this.state.cartTotalPrice,
            packages: this.state.otherCartObj,
            items: item
          };

          const which = {
            fnb_reservation: 0,
            fnb_offer: 0,
            spa_appointment: 0,
            spa_offer: 0,
            activity_offer: 0,
            event_offer: 0,
            escape_offer: 1
          };

          sessionStorage.removeItem("RESERVATION");
          sessionStorage.removeItem("SPA_APPOINTMENT");
          sessionStorage.removeItem("ACTIVITY_OFFER");
          sessionStorage.removeItem("EVENT_OFFER");
          sessionStorage.removeItem("ESCAPE_OFFER");
          sessionStorage.removeItem("SPA_OFFER");
          sessionStorage.removeItem("FNB_OFFER");

          sessionStorage.setItem("ESCAPE_OFFER", JSON.stringify(escapePackage));
          sessionStorage.setItem("WHICH", JSON.stringify(which));

          this.props.routeChange("/checkout");
        } else if (this.state.otherTab.activity) {
          const date = moment(this.state.date).format("YYYY-MM-DD");
          const displayDate = moment(this.state.date).format("DD-MM-YYYY");
          const time = moment(this.state.time, "HH:mm A").format("HH:mm A");
          const displayTime = moment(this.state.displayTime, "hh:mm A").format(
            "hh:mm A"
          );
          const item = this.otherCategoryJsonBuilder(this.state.otherCartObj);

          const escapePackage = {
            offer_id: this.props.categoryData.categoryData.details.offer_id,
            partner_id: this.props.categoryData.categoryData.details
              .partner_details.p_id,
            name: this.props.categoryData.categoryData.details.partner_details
              .p_name,
            customer_id: this.props.customerData.customerData.customer_id,
            customer_mobile: this.props.customerData.customerData.mobile,
            customer_email: this.props.customerData.customerData.email,
            display_time: displayTime,
            display_date: displayDate,
            date: date,
            time: time,
            payment_amount: this.state.cartTotalPrice,
            packages: this.state.otherCartObj,
            items: item
          };

          const which = {
            fnb_reservation: 0,
            fnb_offer: 0,
            spa_appointment: 0,
            spa_offer: 0,
            activity_offer: 1,
            event_offer: 0,
            escape_offer: 0
          };

          sessionStorage.removeItem("RESERVATION");
          sessionStorage.removeItem("SPA_APPOINTMENT");
          sessionStorage.removeItem("EVENT_OFFER");
          sessionStorage.removeItem("ESCAPE_OFFER");
          sessionStorage.removeItem("SPA_OFFER");
          sessionStorage.removeItem("FNB_OFFER");

          sessionStorage.setItem(
            "ACTIVITY_OFFER",
            JSON.stringify(escapePackage)
          );
          sessionStorage.setItem("WHICH", JSON.stringify(which));

          this.props.routeChange("/checkout");
        } else if (this.state.otherTab.event) {
          const date = moment(this.state.date).format("YYYY-MM-DD");
          const displayDate = moment(this.state.date).format("DD-MM-YYYY");

          const time = moment(this.state.time, "HH:mm A").format("HH:mm A");
          const item = this.otherCategoryJsonBuilder(this.state.otherCartObj);

          const eventPackage = {
            offer_id: this.props.categoryData.categoryData.details.offer_id,
            partner_id: this.props.categoryData.categoryData.details
              .partner_details.p_id,
            name: this.props.categoryData.categoryData.details.partner_details
              .p_name,
            customer_id: this.props.customerData.customerData.customer_id,
            customer_mobile: this.props.customerData.customerData.mobile,
            customer_email: this.props.customerData.customerData.email,
            display_time: this.state.displayTime,
            display_date: displayDate,
            date: date,
            time: time,
            payment_amount: this.state.cartTotalPrice,
            packages: this.state.otherCartObj,
            items: item
          };

          const which = {
            fnb_reservation: 0,
            fnb_offer: 0,
            spa_appointment: 0,
            spa_offer: 0,
            activity_offer: 0,
            event_offer: 1,
            escape_offer: 0
          };

          sessionStorage.removeItem("RESERVATION");
          sessionStorage.removeItem("SPA_APPOINTMENT");
          sessionStorage.removeItem("ESCAPE_OFFER");
          sessionStorage.removeItem("SPA_OFFER");
          sessionStorage.removeItem("FNB_OFFER");
          sessionStorage.removeItem("ACTIVITY_OFFER");

          sessionStorage.setItem("EVENT_OFFER", JSON.stringify(eventPackage));
          sessionStorage.setItem("WHICH", JSON.stringify(which));

          this.props.routeChange("/checkout");
        } else {
          console.log(this.props.detailUrlParam.result_type);
          if (parseInt(this.props.detailUrlParam.result_type, 10) === 5) {
            if (this.props.spaMenu.spaMenu.subcode === 204) {
              // Without Menu

              const currentTime = moment(moment().format("HH:mm A"));
              const time = moment(this.state.time, "HH:mm A").format("HH:mm A");

              if (currentTime.isAfter(time)) {
                this.updateCartButtonLoading(false);
                this.props.errorToast(
                  "Time should be greater and equal current time",
                  1,
                  true
                );
              } else {
                this.saloonAppointment();
                this.props.routeChange("/checkout");
              }
            } else {
              // Saloon Appointment Menu

              const currentTime = moment(moment().format("HH:mm A"));
              const time = moment(this.state.time, "HH:mm A").format("HH:mm A");

              if (currentTime.isAfter(time)) {
                this.updateCartButtonLoading(false);
                this.props.errorToast(
                  "Time should be greater and equal current time",
                  1,
                  true
                );
              } else {
                this.saloonAppointment();
                this.updateSaloonMenuState(true);
              }
            }
          } else {
            this.updateCartButtonLoading(false);
            this.props.errorToast(`Empty cart !!!`, 1, true);
          }
          // Saloon Appointment
        }
      }
    }
  };

  saloonAppointment = () => {
    const time = moment(this.state.time, "HH:mm A").format("HH:mm A");
    const date = moment(this.state.date).format("YYYY-MM-DD");
    const displayDate = moment(this.state.date, "DD-MM-YYYY").format(
      "DD-MM-YYYY"
    );

    const appointment = {
      partner_id: this.props.categoryData.categoryData.details.partner_details
        .p_id,
      name: this.props.categoryData.categoryData.details.partner_details.p_name,
      customer_id: this.props.customerData.customerData.customer_id,
      customer_mobile: this.props.customerData.customerData.mobile,
      customer_email: this.props.customerData.customerData.email,
      date: date,
      time: time,
      display_time: this.state.displayTime,
      display_date: displayDate,
      menu: []
    };

    const which = {
      fnb_reservation: 0,
      fnb_offer: 0,
      spa_appointment: 1,
      spa_offer: 0,
      activity_offer: 0,
      event_offer: 0,
      escape_offer: 0
    };

    sessionStorage.removeItem("FNB_OFFER");
    sessionStorage.removeItem("RESERVATION");
    sessionStorage.removeItem("SPA_OFFER");
    sessionStorage.removeItem("ACTIVITY_OFFER");
    sessionStorage.removeItem("EVENT_OFFER");
    sessionStorage.removeItem("ESCAPE_OFFER");

    sessionStorage.setItem("SPA_APPOINTMENT", JSON.stringify(appointment));
    sessionStorage.setItem("WHICH", JSON.stringify(which));
  };

  otherCategoryJsonBuilder = json => {
    return json.map(obj => {
      const item = {};
      item.item_id = obj.price_id;
      item.price = obj.api_price;
      item.discount = obj.price_discount;
      item.quantity = obj.quantity;
      return item;
    });
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
                  onEventClick={this.onEventClick}
                  onEscapeClick={this.onEscapeClick}
                  onActivityClick={this.onActivityClick}
                  onSaloonClick={this.onSaloonClick}
                  onExculsiveClick={this.onExculsiveClick}
                  customerData={this.props.customerData}
                  escapeEnquiry={this.props.escapeEnquiry}
                  postEscapeEnquiry={this.props.postEscapeEnquiry}
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
                  dateCheck={this.dateCheck}
                  fnbQuantityPrice={this.fnbQuantityPrice}
                  onClickPackageMinus={this.onClickPackageMinus}
                  onClickPackagePlus={this.onClickPackagePlus}
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

        {this.state.saloonMenu ? (
          <SaloonMenu
            saloonMenu={this.state.saloonMenu}
            updateSaloonMenuState={this.updateSaloonMenuState}
            routeChange={this.props.routeChange}
            spaMenu={this.props.spaMenu.spaMenu}
            routeChange={this.props.routeChange}
          />
        ) : null}
      </React.Fragment>
    );
  }
}
