import { Segment } from "semantic-ui-react";

import DatePicker from "react-date-picker/dist/entry.nostyle";
import TimePicker from "react-time-picker/dist/entry.nostyle";

import "../node_modules/react-date-picker/dist/DatePicker.css";
import "../node_modules/react-time-picker/dist/TimePicker.css";
import "../node_modules/react-calendar/dist/Calendar.css";

import "./detail-cart.css";

export default class DetailCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolling: false,
      date: new Date(),
      time: "10:00"
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

  render() {
    return (
      <div
        className="detail-cart-container"
        style={{
          top: this.state.scrolling ? "6em" : "0"
        }}
      >
        <Segment>
          {/* <div className="columns">
            <div className="column is-4">
              <h4 className="ffqs fs1-5 fw2">Quantity :</h4>
            </div>

            <div className="column is-8">
              <div>
                <span className="icon is-medium cursor-pointer">
                  <img src="https://img.icons8.com/ios/22/000000/minus.png" />
                </span>
                <span className="ffqs fs2 fw2 pl0-3 pr0-3">2</span>
                <span className="icon is-medium cursor-pointer">
                  <img src="https://img.icons8.com/ios/22/000000/plus.png" />
                </span>
              </div>
            </div>
          </div> */}

          <div className="columns">
            <div className="column is-4">
              <h4 className="ffqs fs1-5 fw2">Date :</h4>
            </div>

            <div className="column is-8">
              <DatePicker value={this.state.date} format="d MM y" />
            </div>
          </div>

          <div className="columns">
            <div className="column is-4">
              <h4 className="ffqs fs1-5 fw2">Time :</h4>
            </div>

            <div className="column is-8">
              <TimePicker value={this.state.time} />
            </div>
          </div>

          <div className="box" style={{ overflow: "auto", maxHeight: "15em" }}>
            <div className="box">
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
            </div>

            <div className="box">
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
            </div>

            {/* <Segment>
              <h4 className="ffqs fs1-5 fw7 mt0-1 mb0-1">Go Karting</h4>
              <h4 className="ffqs fs1 fw2 mt0-2 mb0-2">
                Individual - Level 1 - 7 Bhp
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

                    <span className="ffqs fs1-2 fw2 pl0-3 pr0-3">3</span>

                    <span className="icon is-medium cursor-pointer">
                      <img src="https://img.icons8.com/ios/15/000000/plus.png" />
                    </span>
                  </div>
                </div>
              </div>
            </Segment> */}
          </div>

          <h4>
            <span className="ffqs fw2 f24">Total : </span>
            <span className="float-right fw2 f24">
              <span> &#8377;</span> 2,365{" "}
            </span>
          </h4>

          <a className="button cart-button ff">Procced</a>
          <p className="ffqs align">You won’t be charged yet</p>
        </Segment>
      </div>
    );
  }
}
