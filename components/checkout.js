import { Segment } from "semantic-ui-react";

import CheckoutRight from "./checkout-right";
import CheckoutLeft from "./checkout-left";

import "./checkout.css";

const Checkout = props => {
  return (
    <div className="checkout-container">
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-8">
              <Segment>
                <CheckoutLeft />
              </Segment>
            </div>
            <div className="column is-4">
              <Segment>
                <CheckoutRight />
              </Segment>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
