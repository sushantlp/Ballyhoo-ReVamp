import { Segment } from "semantic-ui-react";

import "bulma-checkradio";
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

      <h4 className="fs1-4 ffqs fw2">Items Bought :</h4>

      <Segment style={{ backgroundColor: "aliceblue" }}>
        <h4 className="ffqs fs1-5 fw2 m0">Go Karting</h4>
        <h4 className="ffqs fs1 fw2 mt0-5">Individual - Micro</h4>
        <div className="columns">
          <div className="column is-6">
            <h4 className="ffqs fw2 p0-5 fs1-2">
              Price :
              <span>
                {" "}
                <span> &#8377;</span> 2,365{" "}
              </span>
            </h4>
          </div>
          <div className="column is-6">
            <h4 className="ffqs fw2 p0-5 fs1-2 float-right">
              Quanity :<span> 2</span>
            </h4>
          </div>
        </div>
      </Segment>

      <Segment style={{ backgroundColor: "aliceblue" }}>
        <h4 className="ffqs fs1-5 fw2 m0">Go Karting</h4>
        <h4 className="ffqs fs1 fw2 mt0-5">Individual - Micro</h4>
        <div className="columns">
          <div className="column is-6">
            <h4 className="ffqs fw2 p0-5 fs1-2">
              Price :
              <span>
                {" "}
                <span> &#8377;</span> 2,365{" "}
              </span>
            </h4>
          </div>
          <div className="column is-6">
            <h4 className="ffqs fw2 p0-5 fs1-2 float-right">
              Quanity :<span> 2</span>
            </h4>
          </div>
        </div>
      </Segment>

      <div className="field">
        <label className="label is-medium ffqs fw2 fs1-4">
          Payment Options :
        </label>
        <div className="field-body">
          <div className="field ">
            <div className="control">
              <Segment style={{ backgroundColor: "aliceblue" }}>
                <div className="field">
                  <input
                    className="is-checkradio is-danger"
                    id="online"
                    type="radio"
                    name="payment"
                  />
                  <label htmlFor="online" className="ffqs fw2 fs1-1">
                    Online payment (Mobikwik, PayuMoney, PayzZapp)
                  </label>

                  <input
                    className="is-checkradio is-danger"
                    id="paytm"
                    type="radio"
                    name="payment"
                    style={{ paddingLeft: "1em" }}
                  />
                  <label htmlFor="paytm" className="ffqs fw2 fs1-1">
                    Paytm
                  </label>

                  <input
                    className="is-checkradio is-danger"
                    id="venue"
                    type="radio"
                    name="payment"
                    style={{ paddingLeft: "1em" }}
                  />
                  <label htmlFor="venue" className="ffqs fw2 fs1-1">
                    Pay At Venue
                  </label>
                </div>
              </Segment>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutLeft;
