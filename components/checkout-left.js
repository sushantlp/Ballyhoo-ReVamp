import { Segment } from "semantic-ui-react";
import "bulma-checkradio";
import "./checkout-left.css";

const CheckoutLeft = props => {
  let paymentComponent = true;
  let cartComponent = true;
  let quanity = false;
  let item;

  if (props.parentState.which.fnb_reservation === 1) {
    paymentComponent = false;
    cartComponent = false;
    quanity = true;
    item = props.parentState.fnb_reservation;
  }

  if (item === undefined) return null;

  return (
    <div className="checkout-left-container">
      <h4 className="fs1-5 ffqs fw2">My Cart (1)</h4>
      <div className="border-bottom-solid" />
      <br />
      <div className="columns">
        <div className="column">
          <h4 className="fs2 ffqs fw2">{item.name}</h4>
        </div>

        {quanity ? (
          <div className="column">
            <h4 className="ffqs fw2 p0-5 fs1-2 float-right ">
              Quanity : <span className="tag is-warning fs1"> 2</span>
            </h4>
          </div>
        ) : null}
      </div>

      <div className="columns">
        <div className="column">
          <h4 className="ffqs fw2 p0-5 fs1-2">
            Booking Date :{" "}
            <span className="tag is-warning fs1">{item.date}</span>
          </h4>
        </div>

        <div className="column">
          <h4 className="ffqs fw2 p0-5 fs1-2 float-right ">
            Booking Time :{" "}
            <span className="tag is-warning fs1">{item.time}</span>
          </h4>
        </div>
      </div>

      <div className="border-top-dashed" />

      {cartComponent ? (
        <React.Fragment>
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
        </React.Fragment>
      ) : null}

      {paymentComponent ? (
        <div className="field">
          <label className="label is-medium ffqs fw2 fs1-4">
            Payment Options :
          </label>
          <div className="field-body">
            <div className="field ">
              <div className="control">
                {/* style={{ backgroundColor: "floralwhite" }} */}
                <Segment>
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

                    {/* <input
                      className="is-checkradio is-danger"
                      id="paytm"
                      type="radio"
                      name="payment"
                      style={{ paddingLeft: "1em" }}
                    />
                    <label htmlFor="paytm" className="ffqs fw2 fs1-1">
                      Paytm
                    </label> */}

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
      ) : null}
    </div>
  );
};

export default CheckoutLeft;
