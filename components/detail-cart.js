import "react-dates/initialize";
import { Segment } from "semantic-ui-react";

import moment from "moment-timezone";

import { SingleDatePicker } from "react-dates";
// import DatePicker from "react-date-picker/dist/entry.nostyle";
// import TimePicker from "react-time-picker/dist/entry.nostyle";

// import "../node_modules/react-date-picker/dist/DatePicker.css";
// import "../node_modules/react-time-picker/dist/TimePicker.css";
// import "../node_modules/react-calendar/dist/Calendar.css";

import TimePicker from "react-times";

// use material theme
import "react-times/css/material/default.css";

import "react-dates/lib/css/_datepicker.css";
import "./detail-cart.css";

export default class DetailCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolling: false,
      // date: new Date(),
      time: moment().format("HH:mm"),
      date: moment(),
      focused: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll, true);
  }

  onChangeDate = date => {
    this.setState({ date: moment(date) });
  };

  onChangeTime = time => {
    const times = time.hour + ":" + time.minute + " " + time.meridiem;

    this.setState({
      time: times
    });
  };

  handleScroll = event => {
    if (document.body.scrollTop > 212) {
      if (this.state.scrolling === false)
        this.setState({
          scrolling: true
        });
    } else {
      if (this.state.scrolling === true)
        this.setState({
          scrolling: false
        });
    }
  };

  render() {
    const price =
      parseInt(this.props.detailUrlParam.result_type, 10) === 1
        ? this.props.foodCategoryData.foodCategoryData.details.cost_for_two
        : parseInt(this.props.detailUrlParam.result_type, 10) !== 1
        ? this.props.categoryData.categoryData.details.offer_min_price
        : null;

    return (
      <div
        className="detail-cart-container"
        style={{
          top: this.state.scrolling ? "6em" : "0"
        }}
      >
        <Segment style={{ borderTop: "4px solid #ff3860" }}>
          <div className="columns">
            <div className="column is-4">
              <h4 className="ffqs fs1-5 fw2" style={{ paddingTop: "0.5em" }}>
                Time :
              </h4>
            </div>

            <div className="column is-8">
              <TimePicker
                withoutIcon="false"
                time={this.state.time} // initial time, default current time
                theme="material"
                onTimeChange={time => this.onChangeTime(time)}
                timeMode="12"
                timezone="America/New_York"
              />
            </div>
          </div>

          <div className="columns">
            <div className="column is-4">
              <h4 className="ffqs fs1-5 fw2" style={{ paddingTop: "0.5em" }}>
                Date :
              </h4>
            </div>

            <div className="column is-8">
              <SingleDatePicker
                date={this.state.date}
                id="date"
                onDateChange={date => this.onChangeDate(date)}
                focused={this.state.focused}
                onFocusChange={({ focused }) => this.setState({ focused })}
                displayFormat="MM-DD-YYYY"
              />
            </div>
          </div>

          {/* <Segment style={{ overflow: "auto", maxHeight: "15em" }}>
            <Segment>
              <h4 className="ffqs fs1-5 fw2 mt0-1 mb0-1">Go Karting</h4>
              <h4 className="ffqs fs1 fw2 mt0-2 mb0-2">
                Individual - Baby Kart
              </h4>
              <div className="columns mt0-2">
                <div className="column is-6">
                  {" "}
                  <h4 className="fw2">
                    <span> &#8377;</span> 2,365
                  </h4>
                </div>
                <div className="column is-6">
                  <div className="float-right">
                    <span className="icon is-medium cursor-pointer">
                      <img src="https://img.icons8.com/ios/15/000000/minus.png" />
                    </span>

                    <span className="ffqs fs1-2 fw2 pl0-3 pr0-3">1</span>

                    <span className="icon is-medium cursor-pointer">
                      <img src="https://img.icons8.com/ios/15/000000/plus.png" />
                    </span>
                  </div>
                </div>
              </div>
            </Segment>

            <Segment>
              <h4 className="ffqs fs1-5 fw2 mt0-1 mb0-1">Go Karting</h4>
              <h4 className="ffqs fs1 fw2 mt0-2 mb0-2">Individual - Micro</h4>
              <div className="columns mt0-2">
                <div className="column is-6">
                  {" "}
                  <h4 className="fw2">
                    <span> &#8377;</span> 2,365
                  </h4>
                </div>
                <div className="column is-6">
                  <div className="float-right">
                    <span className="icon is-medium cursor-pointer">
                      <img src="https://img.icons8.com/ios/15/000000/minus.png" />
                    </span>

                    <span className="ffqs fs1-2 fw2 pl0-3 pr0-3">2</span>

                    <span className="icon is-medium cursor-pointer">
                      <img src="https://img.icons8.com/ios/15/000000/plus.png" />
                    </span>
                  </div>
                </div>
              </div>
            </Segment>

        
          </Segment> */}

          {price !== null ? (
            <h4>
              <span className="ffqs fw2 f24">Total : </span>
              <span className="float-right fw2 f24">
                <span> &#8377;</span> {price}{" "}
              </span>
            </h4>
          ) : null}

          <div class="has-text-centered">
            <a className="button cart-button ffqs">Procced</a>
          </div>
          <p className="ffqs align">You won’t be charged yet</p>
        </Segment>
      </div>
    );
  }
}
