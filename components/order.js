import "react-dates/initialize";

import { DateRangePicker } from "react-dates";
import OrderModel from "./order-model";

import "react-dates/lib/css/_datepicker.css";

import "./order.css";

const Order = props => {
  console.log(props.orderData);

  if (props.orderData.orderData.length === 0) return null;

  return (
    <React.Fragment>
      <section className="section">
        <div className="container">
          <div className="order-container">
            <h4 className="fw2 fs2 ffqs text-align-center">
              {/* <span> Past Orders </span> */}
              <span>
                {" "}
                <DateRangePicker
                  startDate={props.orderState.start_date}
                  startDateId="filterStartDate"
                  endDate={props.orderState.end_date}
                  endDateId="filterEndDate"
                  onDatesChange={(startDate, endDate) =>
                    props.onDateChange(startDate, endDate)
                  }
                  focusedInput={props.orderState.focused}
                  onFocusChange={focusedInput =>
                    props.onFocusedChange(focusedInput)
                  }
                  displayFormat="MMM DD YYYY"
                />
              </span>

              <span>
                <a
                  className="button is-danger is-large"
                  style={{ borderRadius: "0px" }}
                >
                  SEARCH
                </a>
              </span>
            </h4>

            {props.orderData.orderData.map((value, key) => {
              const REG_HEX = /&#x([a-fA-F0-9]+);/;
              let currency = value.purchase_currency.replace(REG_HEX, "$1");
              currency = parseInt(currency, 16);
              currency = String.fromCharCode(currency);
              return (
                <div className="box" key={key}>
                  <article className="media">
                    <div className="media-left">
                      <figure className="image is-128x128">
                        <img
                          src="https:////cdn-imgix.headout.com/tour/13770/TOUR-IMAGE/9590b09b-3c11-4e47-b364-53ee809b8326-7563-barcelona-skip-the-line-entry-ticket-to-park-guell-01.jpg?auto=compress&fm=pjpg&w=480&h=480&crop=faces&fit=min"
                          alt="Image"
                        />
                      </figure>
                    </div>

                    <div className="media-content">
                      <div className="content">
                        <div className="columns">
                          <div className="column is-12">
                            <h4 className="fw2 fs2 m0 ffqs plh1">
                              {" "}
                              {value.offer_title}
                            </h4>
                          </div>
                        </div>

                        <div className="columns">
                          <div className="column is-8">
                            <h4 className="fs1-3 fw2 ffqs">
                              Quanity : <span className="grey">2</span>
                            </h4>
                            <h4 className="fs1-3 fw2 ffqs">
                              Total Amount :{" "}
                              <span className="grey">
                                <span>{currency}</span> {value.payment_amount}
                              </span>
                            </h4>
                            <h4 className="fs1-3 fw2 ffqs">
                              Payment Type :{" "}
                              <span className="grey">Pay At Venue</span>
                            </h4>
                          </div>

                          <div className="column is-4">
                            <h4 className="fs1-3 fw2 ffqs">
                              Confirmation Code :{" "}
                              <span className="grey">
                                {value.confirmation_code}
                              </span>
                            </h4>
                            <h4 className="fs1-3 fw2 ffqs">
                              Booking Date :{" "}
                              <span className="grey">{value.booking_date}</span>
                            </h4>
                            <h4 className="fs1-3 fw2 ffqs">
                              Booking Time :{" "}
                              <span className="grey">{value.booking_time}</span>
                            </h4>
                          </div>
                        </div>
                      </div>

                      {value.purchase_items.length === 0 ? (
                        <a
                          className="button is-large is-danger is-outlined is-fullwidth"
                          disabled
                          style={{ pointerEvents: "none" }}
                        >
                          VIEW DETAIL
                        </a>
                      ) : (
                        <a
                          className="button is-large is-danger is-outlined is-fullwidth"
                          onClick={() =>
                            props.updateOrderModel(true, value.purchase_items)
                          }
                        >
                          VIEW DETAIL
                        </a>
                      )}
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>

        {props.orderState.orderOpen ? (
          <OrderModel
            orderOpen={props.orderState.orderOpen}
            updateOrderModel={props.updateOrderModel}
          />
        ) : null}

        <section className="section">
          <div className="has-text-centered">
            {props.orderData.next_page !== null ? (
              props.orderState.isLoading ? (
                <a className="button is-warning is-loading is-large">
                  Load More
                </a>
              ) : (
                <a
                  className="button is-warning is-large"
                  onClick={() => props.loadMoreOrder(props.orderData.next_page)}
                >
                  Load More
                </a>
              )
            ) : (
              <a
                className="button is-warning is-large"
                title="Disabled button"
                disabled
              >
                Load More
              </a>
            )}
          </div>
        </section>
      </section>
    </React.Fragment>
  );
};

export default Order;
