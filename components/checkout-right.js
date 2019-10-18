import "./checkout-right.css";
const CheckoutRight = props => {
  let price = true;
  let item;

  if (props.parentState.which.fnb_reservation === 1) {
    price = false;
    item = props.parentState.fnb_reservation;
  } else if (props.parentState.which.fnb_offer === 1) {
    if (props.parentState.fnb_offer.event) price = false;

    item = props.parentState.fnb_offer;
  }

  if (item === undefined) return null;

  console.log(item);
  return (
    <div className="checkout-right-container">
      {price ? (
        <React.Fragment>
          <h4 className="fs1-4" style={{ color: "#878787" }}>
            PRICE DETAILS
          </h4>

          <div className="border-bottom-solid" />

          <div className="columns">
            <div className="column">
              <h4 className="ffqs fw2 p0-5 fs1-2">Price</h4>
            </div>

            <div className="column">
              <h4 className="float-right fw2 ffqs p0-5 fs1-2">
                <span> &#8377;</span> {item.payment_amount}{" "}
              </h4>
            </div>
          </div>

          <div className="border-top-dashed" />

          <div className="columns">
            <div className="column">
              <h4 className="fw2 p0-5 fs1-2">Total Payable</h4>
            </div>

            <div className="column">
              <h4 className="float-right fw2 p0-5 fs1-2">
                <span> &#8377;</span> {item.payment_amount}{" "}
              </h4>
            </div>
          </div>

          {props.parentState.isLoading ? (
            <a className="button cart-button ffqs is-loading">Place Order</a>
          ) : props.parentState.checkoutButtonBlock ? (
            <a
              className="button cart-button ffqs"
              disabled
              style={{ backgroundColor: "#fdb6c4" }}
            >
              Place Order
            </a>
          ) : (
            <a
              className="button cart-button ffqs"
              onClick={() => props.onClickCheckoutButton()}
            >
              Place Order
            </a>
          )}
        </React.Fragment>
      ) : null}
    </div>
  );
};

export default CheckoutRight;
