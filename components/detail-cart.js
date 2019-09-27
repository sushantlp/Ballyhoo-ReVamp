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
    let date = new Date();
    this.state = {
      scrolling: false,
      date: date,
      time: "10:00"
      // time: `${date.getHours()}:${date.getMinutes()}`
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
        <Segment style={{ borderTop: "4px solid #ff3860" }} disabled>
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

          <a className="button cart-button ffqs">Procced</a>
          <p className="ffqs align">You won’t be charged yet</p>
        </Segment>
      </div>
    );
  }
}
