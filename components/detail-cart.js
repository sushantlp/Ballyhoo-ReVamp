import { Segment } from "semantic-ui-react";
// import TimePicker from "react-time-picker";
// import DatePicker from "react-date-picker";

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
    console.log(document.body.scrollTop);
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

          {/* <DatePicker value={date} /> */}

          {/* <TimePicker value={time} /> */}
          <a className="button cart-button ff">Procced</a>
          <p className="ff align">You won’t be charged yet</p>
        </Segment>
      </div>
    );
  }
}
