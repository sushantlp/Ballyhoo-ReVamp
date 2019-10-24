import "react-dates/initialize";

import { DateRangePicker } from "react-dates";
import OrderModel from "./order-model";

import "react-dates/lib/css/_datepicker.css";

import "./order.css";

const Order = props => {
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

            <div className="box">
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
                          Wake and Bake by Rohan Joshi That Comedy Club
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
                            <span> &#8377;</span> 100
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
                          <span className="grey">26989</span>
                        </h4>
                        <h4 className="fs1-3 fw2 ffqs">
                          Booking Date :{" "}
                          <span className="grey">21-08-2019</span>
                        </h4>
                        <h4 className="fs1-3 fw2 ffqs">
                          Booking Time :{" "}
                          <span className="grey">03 : 10 PM</span>
                        </h4>
                      </div>
                    </div>
                  </div>

                  <a
                    className="button is-large is-danger is-outlined is-fullwidth"
                    onClick={() => props.updateOrderModel(true)}
                  >
                    VIEW DETAIL
                  </a>

                  {/* <a
                    className="button is-large is-danger is-outlined is-fullwidth"
                    title="Disabled button"
                    disabled
                    onClick={() => props.updateOrderModel(true)}
                    style={{ pointerEvents: "none" }}
                  >
                    VIEW DETAIL
                  </a> */}
                </div>
              </article>
            </div>
          </div>
        </div>

        {props.orderState.orderOpen ? (
          <OrderModel
            orderOpen={props.orderState.orderOpen}
            updateOrderModel={props.updateOrderModel}
          />
        ) : null}
      </section>
    </React.Fragment>
  );
};

export default Order;
