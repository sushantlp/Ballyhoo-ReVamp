import "./checkout-right.css";
const CheckoutRight = props => {
  let price = true;
  let item;

  if (props.parentState.which.fnb_reservation === 1) {
    price = false;

    item = props.parentState.fnb_reservation;
  }

  if (item === undefined) return null;

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
                <span> &#8377;</span> 2,365{" "}
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
                <span> &#8377;</span> 2,365{" "}
              </h4>
            </div>
          </div>
        </React.Fragment>
      ) : props.parentState.isLoading ? (
        <a className="button cart-button ffqs is-loading">Place Order</a>
      ) : (
        <a
          className="button cart-button ffqs"
          onClick={() => props.onClickCheckoutButton()}
        >
          Place Order
        </a>
      )}
    </div>
  );
};

export default CheckoutRight;
