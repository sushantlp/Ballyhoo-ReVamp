import "react-dates/initialize";

import { Segment } from "semantic-ui-react";
import { DateRangePicker } from "react-dates";

import Spinner from "./spinner";
import OrderModel from "./order-model";

import "react-dates/lib/css/_datepicker.css";

import "./order.css";

const Order = props => {
  console.log(props.orderData);

  if (props.orderData.orderData.status === "START") return <Spinner />;

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
                  onDatesChange={date => props.onDateChange(date)}
                  focusedInput={props.orderState.focused}
                  onFocusChange={focusedInput =>
                    props.onFocusedChange(focusedInput)
                  }
                  displayFormat="MMM DD YYYY"
                  isOutsideRange={function noRefCheck() {}}
                />
              </span>

              <span>
                {props.orderState.searchButtonLoading ? (
                  <a
                    className="button is-danger  is-loading is-large"
                    style={{ borderRadius: "0px" }}
                  >
                    SEARCH
                  </a>
                ) : (
                  <a
                    className="button is-danger is-large"
                    style={{ borderRadius: "0px" }}
                    onClick={() => props.newOrder()}
                  >
                    SEARCH
                  </a>
                )}
              </span>
            </h4>

            <section className="section">
              <div className="container">
                {props.orderData.orderData.map((value, key) => {
                  const REG_HEX = /&#x([a-fA-F0-9]+);/;
                  let currency = value.purchase_currency.replace(REG_HEX, "$1");
                  currency = parseInt(currency, 16);
                  currency = String.fromCharCode(currency);
                  return (
                    <div className="box" key={key}>
                      <article className="media">
                        <div className="media-left">
                          <figure className="image is-128*128">
                            <img src={value.purchase_image} alt="Image" />
                          </figure>
                        </div>

                        {parseInt(value.purchase_discount, 10) !== 0 ? (
                          <div className="ribbon ribbon-top-left">
                            <span>{value.purchase_discount} % OFF</span>
                          </div>
                        ) : null}

                        <div className="media-content">
                          <div className="content">
                            <div className="columns">
                              <div className="column is-12">
                                {/* <h4 className="fw2 fs2 m0 ffqs plh1">
                              {" "}
                              {value.offer_title}
                            </h4> */}

                                <p className="title ffqs">
                                  {value.offer_title}
                                </p>
                                <p
                                  className="subtitle is-6 mb8 ffqs"
                                  style={{ fontSize: "1.5em" }}
                                >
                                  {value.partner_bname}
                                </p>
                              </div>
                            </div>

                            <div className="columns">
                              <div className="column is-8">
                                {/* <h4 className="fs1-3 fw2 ffqs">
                              Quanity :{" "}
                              <span className="grey">
                                {value.purchase_quantity}
                              </span> */}

                                <div class="control">
                                  <div class="tags has-addons">
                                    <span class="tag is-large">
                                      {" "}
                                      Quantity :
                                    </span>
                                    <span class="tag is-warning is-large">
                                      {value.purchase_quantity}
                                    </span>
                                  </div>
                                </div>

                                {/* </h4> */}
                                {/* <h4 className="fs1-3 fw2 ffqs">
                              Total Amount :{" "}
                              <span className="grey">
                                {parseInt(value.payment_amount, 10) === 0 ? (
                                  <span>N/A</span>
                                ) : (
                                  <React.Fragment>
                                    {" "}
                                    <span>{currency}</span>{" "}
                                    {value.payment_amount}{" "}
                                  </React.Fragment>
                                )}
                              </span> */}

                                <div
                                  class="control"
                                  style={{ marginTop: "1em" }}
                                >
                                  <div class="tags has-addons">
                                    <span class="tag is-large">
                                      {" "}
                                      Total Amount :{" "}
                                    </span>
                                    <span class="tag is-warning is-large">
                                      {parseInt(value.payment_amount, 10) ===
                                      0 ? (
                                        <span>N/A</span>
                                      ) : (
                                        <React.Fragment>
                                          {" "}
                                          <span>{currency}</span>{" "}
                                          {value.payment_amount}{" "}
                                        </React.Fragment>
                                      )}
                                    </span>
                                  </div>
                                </div>

                                {/* </h4> */}
                                {/* <h4 className="fs1-3 fw2 ffqs">
                              Payment Type :{" "}
                              <span className="grey">
                                {" "}
                                {parseInt(value.payment_type, 10) === 1
                                  ? "Online"
                                  : "Pay At Venue"}
                              </span>
                            </h4> */}

                                <div
                                  class="control"
                                  style={{ marginTop: "1em" }}
                                >
                                  <div class="tags has-addons">
                                    <span class="tag is-large">
                                      {" "}
                                      Payment Type :{" "}
                                    </span>
                                    <span class="tag is-warning is-large">
                                      {" "}
                                      {parseInt(value.payment_type, 10) === 1
                                        ? "Online"
                                        : "Pay At Venue"}
                                    </span>
                                  </div>
                                </div>
                              </div>

                              <div className="column is-4">
                                {/* <h4 className="fs1-3 fw2 ffqs">
                              Confirmation Code :{" "}
                              <span className="grey">
                                {value.confirmation_code}
                              </span>
                            </h4> */}

                                <div class="control">
                                  <div class="tags has-addons">
                                    <span class="tag is-large">
                                      {" "}
                                      Confirmation Code :{" "}
                                    </span>
                                    <span class="tag is-warning is-large">
                                      {value.confirmation_code}
                                    </span>
                                  </div>
                                </div>

                                {/* <h4 className="fs1-3 fw2 ffqs">
                              Booking Date :{" "}
                              <span className="grey">{value.booking_date}</span>
                            </h4> */}

                                <div
                                  class="control"
                                  style={{ marginTop: "1em" }}
                                >
                                  <div class="tags has-addons">
                                    <span class="tag is-large">
                                      {" "}
                                      Booking Date :{" "}
                                    </span>
                                    <span class="tag is-warning is-large">
                                      {" "}
                                      {value.booking_date}
                                    </span>
                                  </div>
                                </div>

                                <div
                                  class="control"
                                  style={{ marginTop: "1em" }}
                                >
                                  <div class="tags has-addons">
                                    <span class="tag is-large">
                                      {" "}
                                      Booking Time :{" "}
                                    </span>
                                    <span class="tag is-warning is-large">
                                      {" "}
                                      {value.booking_time}
                                    </span>
                                  </div>
                                </div>

                                {/* <h4 className="fs1-3 fw2 ffqs">
                              Booking Time :{" "}
                              <span className="grey">{value.booking_time}</span>
                            </h4> */}
                              </div>
                            </div>
                          </div>

                          {value.purchase_items.length === 0 ? (
                            <section
                              className="section"
                              style={{ paddingBottom: "0em" }}
                            >
                              <div className="has-text-centered">
                                <a
                                  className="button is-danger is-large"
                                  disabled
                                  style={{ width: "12em" }}
                                >
                                  VIEW DETAIL
                                </a>
                              </div>
                            </section>
                          ) : (
                            <section
                              className="section"
                              style={{ paddingBottom: "0em" }}
                            >
                              <div className="has-text-centered">
                                <a
                                  className="button is-large is-danger"
                                  style={{ width: "12em" }}
                                  onClick={() =>
                                    props.updateOrderModel(
                                      true,
                                      value.purchase_items,
                                      currency
                                    )
                                  }
                                >
                                  VIEW DETAIL
                                </a>
                              </div>
                            </section>
                          )}
                        </div>
                      </article>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        </div>

        {props.orderState.orderOpen ? (
          <OrderModel
            orderOpen={props.orderState.orderOpen}
            updateOrderModel={props.updateOrderModel}
            items={props.orderState.items}
            currency={props.orderState.currency}
          />
        ) : null}

        {props.orderData.orderData.length === 0 ? null : (
          <section className="section">
            <div className="has-text-centered">
              {props.orderData.next_page !== null ? (
                props.orderState.isLoading ? (
                  <a
                    className="button is-warning is-loading is-large"
                    style={{ width: "12em" }}
                  >
                    LOAD MORE
                  </a>
                ) : (
                  <a
                    className="button is-warning is-large"
                    onClick={() =>
                      props.loadMoreOrder(props.orderData.next_page)
                    }
                    style={{ width: "12em" }}
                  >
                    LOAD MORE
                  </a>
                )
              ) : (
                <a
                  className="button is-warning is-large"
                  disabled
                  style={{ width: "12em" }}
                >
                  LOAD MORE
                </a>
              )}
            </div>
          </section>
        )}
      </section>
    </React.Fragment>
  );
};

export default Order;
