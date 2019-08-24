import { Segment } from "semantic-ui-react";
import "./checkout-left.css";
const CheckoutLeft = props => {
  return (
    <div className="checkout-left-container">
      <h4 className="fs1-5 ffqs fw2">My Cart (1)</h4>
      <div className="border-bottom-solid" />

      <h4 className="fs2 ffqs fw2">Play Arena Adventure</h4>

      <div className="columns">
        <div className="column">
          <h4 className="ffqs fw2 p0-5 fs1-2">
            Booking Date :{" "}
            <span class="tag is-warning is-rounded fs1">24-08-2019</span>
          </h4>
        </div>

        <div className="column">
          <h4 className="ffqs fw2 p0-5 fs1-2 float-right ">
            Booking Time :{" "}
            <span class="tag is-warning is-rounded fs1">15:44</span>
          </h4>
        </div>
      </div>

      <div className="border-top-dashed" />

      <h4 className="fs1-2 ffqs fw2">Items Bought</h4>

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
    </div>
  );
};

export default CheckoutLeft;
