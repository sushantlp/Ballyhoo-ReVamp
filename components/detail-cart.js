import { Segment } from "semantic-ui-react";
// import TimePicker from "react-time-picker";
// import DatePicker from "react-date-picker";

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
          <h4 className="fw7 f24">
            <span> &#8377;</span> 2,365
          </h4>

          {/* <h4 className="mb0">
            <span>Quantity : </span>
            <img src="https://img.icons8.com/cotton/25/000000/plus--v2.png" />2
            <img src="https://img.icons8.com/cotton/25/000000/plus--v2.png" />
          </h4> */}

          <div className="columns">
            <div className="column is-4">
              <h4 className="ffqs fs1-5 fw2">Quantity :</h4>
            </div>

            <div className="column is-8">
              <div className="inline-block">
                <img src="https://img.icons8.com/ios/30/000000/minus-2-math.png" />
              </div>
              <div className="ffqs fs2 fw2 pl0-3 pr0-3 inline-block">
                {" "}
                <span>100 </span>
              </div>
              <div className="inline-block">
                <img src="https://img.icons8.com/ios/30/000000/plus-2-math.png" />
              </div>
            </div>
          </div>
          {/* <DatePicker /> */}
          {/* <TimePicker /> */}
          <a className="button cart-button ff">Procced</a>
          <p className="ff align">You won’t be charged yet</p>
        </Segment>
      </div>
    );
  }
}
