import { Segment } from "semantic-ui-react";
import "bulma-checkradio";
import "./checkout-left.css";

const CheckoutLeft = props => {
  let paymentComponent = true;
  let cartComponent = true;
  let quanity = false;
  let item;
  let textArea = false;
  let time = "";

  if (props.parentState.which.fnb_reservation === 1) {
    paymentComponent = false;
    cartComponent = false;
    quanity = true;
    item = props.parentState.fnb_reservation;
    time = item.display_time;
  } else if (props.parentState.which.fnb_offer === 1) {
    if (props.parentState.fnb_offer.event) paymentComponent = false;

    cartComponent = false;
    quanity = true;
    item = props.parentState.fnb_offer;
    time = item.display_time;
  } else if (props.parentState.which.spa_offer === 1) {
    quanity = false;
    item = props.parentState.spa_offer;
  } else if (props.parentState.which.activity_offer === 1) {
    quanity = false;
    item = props.parentState.activity_offer;
    time = item.display_time;
  } else if (props.parentState.which.event_offer === 1) {
    quanity = false;
    item = props.parentState.event_offer;
    time = item.display_time;
  } else if (props.parentState.which.escape_offer === 1) {
    quanity = false;
    textArea = true;
    item = props.parentState.escape_offer;
    time = item.display_time;
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
              Quanity :{" "}
              <span className="tag is-warning fs1">{item.quanity}</span>
            </h4>
          </div>
        ) : null}
      </div>

      <div className="columns">
        <div className="column">
          <h4 className="ffqs fw2 p0-5 fs1-2">
            Booking Date :{" "}
            <span className="tag is-warning fs1">{item.display_date}</span>
          </h4>
        </div>

        <div className="column">
          <h4 className="ffqs fw2 p0-5 fs1-2 float-right ">
            Booking Time : <span className="tag is-warning fs1">{time}</span>
          </h4>
        </div>
      </div>

      <div className="border-top-dashed" />

      {textArea ? (
        <React.Fragment>
          <br />
          <textarea
            class="textarea"
            placeholder="Any customization"
            onChange={event => props.onChangeRequest(event)}
          />
        </React.Fragment>
      ) : null}

      {cartComponent ? (
        <React.Fragment>
          <h4 className="fs1-4 ffqs fw2">Items Bought :</h4>

          {item.packages.map((value, key) => {
            return (
              <Segment style={{ backgroundColor: "aliceblue" }} key={key}>
                <h4 className="ffqs fs1-5 fw2 m0">{value.package_caption}</h4>
                <h4 className="ffqs fs1 fw2 mt0-5">
                  {" "}
                  {value.price_caption}{" "}
                  {value.date === undefined ? null : (
                    <span className="tag is-warning" style={{ float: "right" }}>
                      {value.date}
                    </span>
                  )}
                </h4>
                <div className="columns">
                  <div className="column is-6">
                    <h4 className="ffqs fw2 p0-5 fs1-2">
                      Price :
                      <span>
                        {" "}
                        <span> &#8377;</span> {value.price}{" "}
                      </span>
                    </h4>
                  </div>
                  <div className="column is-6">
                    <h4 className="ffqs fw2 p0-5 fs1-2 float-right">
                      Quanity :{" "}
                      <span style={{ marginLeft: "0.3em" }}>
                        {value.quantity}
                      </span>
                    </h4>
                  </div>
                </div>
              </Segment>
            );
          })}
        </React.Fragment>
      ) : null}

      {paymentComponent ? (
        <React.Fragment>
          {cartComponent === false ? (
            <div style={{ marginTop: "2em" }} />
          ) : null}
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
                      {props.parentState.payment.length !== 0 ? (
                        props.parentState.payment.razor_pay.status === 1 ? (
                          <React.Fragment>
                            <input
                              className="is-checkradio is-danger"
                              id="online"
                              type="radio"
                              name="payment"
                              value="online"
                              onChange={event => props.onChangePayment(event)}
                            />
                            <label htmlFor="online" className="ffqs fw2 fs1-1">
                              Online payment (Mobikwik, PayuMoney, PayzZapp)
                            </label>
                          </React.Fragment>
                        ) : (
                          <React.Fragment>
                            <input
                              className="is-checkradio is-danger"
                              id="online"
                              type="radio"
                              name="payment"
                              disabled
                            />
                            <label htmlFor="online" className="ffqs fw2 fs1-1">
                              Online payment (Mobikwik, PayuMoney, PayzZapp)
                            </label>
                          </React.Fragment>
                        )
                      ) : null}

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

                      {props.parentState.payment.length !== 0 ? (
                        props.parentState.payment.pay_at_venue.status === 1 ? (
                          <React.Fragment>
                            {" "}
                            <input
                              className="is-checkradio is-danger"
                              id="venue"
                              type="radio"
                              name="payment"
                              value="venue"
                              style={{ paddingLeft: "1em" }}
                              onChange={event => props.onChangePayment(event)}
                            />
                            <label htmlFor="venue" className="ffqs fw2 fs1-1">
                              Pay At Venue
                            </label>{" "}
                          </React.Fragment>
                        ) : (
                          <React.Fragment>
                            {" "}
                            <input
                              className="is-checkradio is-danger"
                              id="venue"
                              type="radio"
                              name="payment"
                              style={{ paddingLeft: "1em" }}
                              disabled
                            />
                            <label htmlFor="venue" className="ffqs fw2 fs1-1">
                              Pay At Venue
                            </label>{" "}
                          </React.Fragment>
                        )
                      ) : null}
                    </div>
                  </Segment>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      ) : null}
    </div>
  );
};

export default CheckoutLeft;
