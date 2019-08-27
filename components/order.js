import "react-dates/initialize";

import moment from "moment-timezone";
import { DateRangePicker } from "react-dates";

import OrderModel from "./order-model";

import "react-dates/lib/css/_datepicker.css";
import "./order.css";

export default class DetailTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(),
      endDate: moment(),
      focusedInput: null,
      orderOpen: false
    };
  }

  updateOrderModel = bool => {
    console.log(bool);
    this.setState({
      orderOpen: bool
    });
  };

  render() {
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
                    startDate={this.state.startDate}
                    startDateId="filterStartDate"
                    endDate={this.state.endDate}
                    endDateId="filterEndDate"
                    // onDatesChange={props.onDateChange}
                    onDatesChange={({ startDate, endDate }) =>
                      this.setState({ startDate, endDate })
                    }
                    focusedInput={this.state.focusedInput}
                    onFocusChange={focusedInput =>
                      this.setState({ focusedInput })
                    }
                    displayFormat="MMM DD YYYY"
                  />{" "}
                </span>

                <span>
                  <a class="button is-danger is-large">SEARCH</a>
                </span>
              </h4>

              <div className="box">
                <article className="media">
                  <div className="media-left">
                    <figure className="image is-128x128">
                      <img
                        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_200,c_fill/xs9g4vpc9q1qxqisb8ma"
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
                            Appointment Le Tranquille spa
                          </h4>
                        </div>
                      </div>

                      <div className="columns">
                        <div className="column is-8">
                          <h4 className="fs1-3 fw2 ffqs">
                            Quanity : <span className="grey"> 1 </span>
                          </h4>
                          <h4 className="fs1-3 fw2 ffqs">
                            Total Amount : <span className="grey"> N/A </span>{" "}
                          </h4>
                          <h4 className="fs1-3 fw2 ffqs">
                            Payment Type : <span className="grey"> N/A </span>
                          </h4>
                        </div>

                        <div className="column is-4">
                          <h4 className="fs1-3 fw2 ffqs">
                            Confirmation Code :{" "}
                            <span className="grey"> N/A </span>
                          </h4>
                          <h4 className="fs1-3 fw2 ffqs">
                            Booking Date : <span className="grey"> N/A </span>
                          </h4>
                          <h4 className="fs1-3 fw2 ffqs">
                            Booking Time : <span className="grey"> N/A </span>
                          </h4>
                        </div>
                      </div>
                    </div>

                    <a
                      className="button is-large is-danger is-outlined is-fullwidth"
                      title="Disabled button"
                      disabled
                      onClick={() => this.updateOrderModel(true)}
                      style={{ pointerEvents: "none" }}
                    >
                      VIEW DETAIL
                    </a>
                  </div>
                </article>
              </div>

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
                      onClick={() => this.updateOrderModel(true)}
                    >
                      VIEW DETAIL
                    </a>
                  </div>
                </article>
              </div>
            </div>
          </div>

          {this.state.orderOpen ? (
            <OrderModel
              orderOpen={this.state.orderOpen}
              updateOrderModel={this.updateOrderModel}
            />
          ) : null}
        </section>
      </React.Fragment>
    );
  }
}
