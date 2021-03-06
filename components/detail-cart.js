import "react-dates/initialize";
import moment from "moment";
import { Segment } from "semantic-ui-react";

import { SingleDatePicker } from "react-dates";

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
      focused: false,
      quantity: 1
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll, true);
  }

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

  onClickMinus = () => {
    if (this.state.quantity > 1) {
      this.setState({
        quantity: this.state.quantity - 1
      });

      this.props.fnbQuantityPrice(this.state.quantity - 1);
    } else {
      const time = moment()
        .add(30, "minutes")
        .format("HH:mm A");

      this.props.onChangeTime(time, true);
      this.props.fnbQuantityPrice(0);
    }
  };

  onClickPlus = () => {
    this.setState({
      quantity: this.state.quantity + 1
    });

    this.props.fnbQuantityPrice(this.state.quantity + 1);
  };

  render() {
    return (
      <div
        className="detail-cart-container"
        style={{
          top: this.state.scrolling ? "6em" : "0"
        }}
      >
        <Segment style={{ borderTop: "4px solid #ff3860" }}>
          <div className="columns">
            {parseInt(this.props.detailUrlParam.result_type, 10) ===
            2 ? null : (
              <div className="column is-4">
                <h4
                  className="ffqs fs1-5 fw2 letter-spacing-1px"
                  style={{ paddingTop: "0.5em" }}
                >
                  Time :
                </h4>
              </div>
            )}

            {parseInt(this.props.detailUrlParam.result_type, 10) ===
            2 ? null : (
              <div className="column is-8">
                {this.props.parentState.timeDisabled ? (
                  <TimePicker
                    withoutIcon={true}
                    time={this.props.parentState.time} // initial time, default current time
                    theme="material"
                    onTimeChange={time => this.props.onChangeTime(time)}
                    timeMode="12"
                    disabled
                  />
                ) : (
                  <TimePicker
                    withoutIcon={true}
                    time={
                      parseInt(this.props.detailUrlParam.result_type, 10) ===
                        1 ||
                      parseInt(this.props.detailUrlParam.result_type, 10) === 5
                        ? this.props.parentState.time
                        : this.props.parentState.currentTime
                    } // initial time, default current time
                    theme="material"
                    onTimeChange={time => this.props.onChangeTime(time)}
                    timeMode="12"
                  />
                )}
              </div>
            )}
          </div>

          <div className="columns">
            {parseInt(this.props.detailUrlParam.result_type, 10) ===
            2 ? null : (
              <div className="column is-4">
                <h4
                  className="ffqs fs1-5 fw2 letter-spacing-1px"
                  style={{ paddingTop: "0.5em" }}
                >
                  Date :
                </h4>
              </div>
            )}

            {parseInt(this.props.detailUrlParam.result_type, 10) ===
            2 ? null : (
              <div className="column is-8">
                {parseInt(this.props.detailUrlParam.result_type, 10) === 1 ? (
                  this.props.parentState.calendarDisabled ? (
                    <SingleDatePicker
                      date={this.props.parentState.date}
                      id="date"
                      onDateChange={date => this.props.onChangeDate(date)}
                      focused={this.state.focused}
                      onFocusChange={({ focused }) =>
                        this.setState({ focused })
                      }
                      displayFormat="DD-MM-YYYY"
                      disabled
                    />
                  ) : (
                    <SingleDatePicker
                      date={this.props.parentState.date}
                      id="date"
                      onDateChange={date => this.props.onChangeDate(date)}
                      focused={this.state.focused}
                      onFocusChange={({ focused }) =>
                        this.setState({ focused })
                      }
                      displayFormat="DD-MM-YYYY"
                    />
                  )
                ) : (
                  <SingleDatePicker
                    date={this.props.parentState.date}
                    id="date"
                    onDateChange={date => this.props.onChangeDate(date)}
                    focused={this.state.focused}
                    onFocusChange={({ focused }) => this.setState({ focused })}
                    displayFormat="DD-MM-YYYY"
                    isOutsideRange={date => this.props.dateCheck(date)}
                  />
                )}
              </div>
            )}
          </div>

          {this.props.parentState.cartQuantity ? (
            <div className="columns">
              <div className="column is-6">
                <h4
                  className="ffqs fs1-5 fw2 letter-spacing-1px"
                  style={{ paddingTop: "0.5em" }}
                >
                  No of Guests :
                </h4>
              </div>

              <div className="column is-6" style={{ paddingTop: "1.3em" }}>
                <span
                  className="icon is-medium cursor-pointer"
                  onClick={() => this.onClickMinus()}
                >
                  <img src="https://img.icons8.com/ios/25/000000/minus.png" />
                </span>

                <span className="ffqs fs2 fw2 pr0-7 pl0-7">
                  {this.state.quantity}
                </span>

                <span
                  className="icon is-medium cursor-pointer"
                  onClick={() => this.onClickPlus()}
                >
                  <img src="https://img.icons8.com/ios/25/000000/plus.png" />
                </span>
              </div>
            </div>
          ) : null}

          {parseInt(this.props.detailUrlParam.result_type, 10) === 1 ||
          this.props.parentState.otherCartObj.length === 0 ? null : (
            <Segment style={{ overflow: "auto", maxHeight: "15em" }}>
              {this.props.parentState.otherCartObj.map((value, key) => {
                return (
                  <Segment key={key}>
                    <h4 className="ffqs fs1-5 fw2 mt0-1 mb0-1 letter-spacing-1px">
                      {value.package_caption}
                    </h4>

                    <h4 className="ffqs fs1 fw2 mt0-2 mb0-2">
                      {value.price_caption}{" "}
                      {value.date === undefined ? null : (
                        <span
                          className="tag is-warning"
                          style={{ float: "right" }}
                        >
                          {value.date}
                        </span>
                      )}
                    </h4>

                    <div className="columns mt0-2">
                      <div className="column is-6">
                        {" "}
                        <h4 className="fw2">
                          <span> &#8377;</span> {value.price}
                        </h4>
                      </div>
                      <div className="column is-6">
                        <div className="float-right">
                          <span
                            className="icon is-medium cursor-pointer"
                            onClick={() =>
                              this.props.onClickPackageMinus(
                                key,
                                value.price_id
                              )
                            }
                          >
                            <img src="https://img.icons8.com/ios/15/000000/minus.png" />
                          </span>

                          <span className="ffqs fs1-2 fw2 pl0-3 pr0-3">
                            {value.quantity}
                          </span>

                          <span
                            className="icon is-medium cursor-pointer"
                            onClick={() =>
                              this.props.onClickPackagePlus(key, value.price_id)
                            }
                          >
                            <img src="https://img.icons8.com/ios/15/000000/plus.png" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Segment>
                );
              })}
            </Segment>
          )}

          {parseInt(this.props.parentState.cartTotalPrice, 10) !== 0 ? (
            <h4>
              <span className="ffqs fw2 f24 letter-spacing-1px">Total : </span>
              <span className="float-right fw2 f24">
                <span> &#8377;</span> {this.props.parentState.cartTotalPrice}{" "}
              </span>
            </h4>
          ) : null}

          <div className="has-text-centered letter-spacing-1px">
            {this.props.parentState.cartButtonLoading ? (
              <a className="button cart-button ffqs is-loading">
                {this.props.parentState.cartButtonText}
              </a>
            ) : this.props.parentState.cartButtonDisabled ? (
              <a className="button cart-button-disabled ffqs" disabled>
                {this.props.parentState.cartButtonText}
              </a>
            ) : (
              <a
                className="button cart-button ffqs"
                onClick={() => this.props.onClickProceed(this.state.quantity)}
              >
                {this.props.parentState.cartButtonText}
              </a>
            )}
          </div>
          <p className="ffqs align letter-spacing-1px">
            You won’t be charged yet
          </p>
        </Segment>
      </div>
    );
  }
}
