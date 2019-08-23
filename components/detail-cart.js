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
          <h4 className="fw2 f24">
            <span> &#8377;</span> 2,365
          </h4>

          <div className="columns">
            <div className="column is-4">
              <h4 className="ffqs fs1-5 fw2">Quantity :</h4>
            </div>

            <div className="column is-8">
              <div className="inline-block cursor-pointer">
                <img src="https://img.icons8.com/cotton/25/000000/minus--v2.png" />
              </div>
              <div className="ffqs fs1-5 fw2 inline-block position-absolute pr0-3 mt0-2">
                {" "}
                <span>1</span>
              </div>
              <div className="inline-block cursor-pointer mr1-5">
                <img src="https://img.icons8.com/cotton/25/000000/plus--v2.png" />
              </div>
            </div>
          </div>

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

          <a className="button cart-button ff">Procced</a>
          <p className="ff align">You won’t be charged yet</p>
        </Segment>
      </div>
    );
  }
}
