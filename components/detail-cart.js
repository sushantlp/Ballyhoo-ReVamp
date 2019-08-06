import { Segment, Divider } from "semantic-ui-react";
// import TimePicker from "react-time-picker";
// import DatePicker from "react-date-picker";

import "./detail-cart.css";

const DetailCart = props => {
  const date = new Date();
  const time = "10:00";

  return (
    <div className="detail-cart-container">
      <Segment>
        <p className="fw7 f24">
          <span> &#8377;</span> 2,365
        </p>

        {/* <DatePicker value={date} /> */}

        {/* <TimePicker value={time} /> */}
        <a className="button cart-button ff">Procced</a>
        <p className="ff align">You won’t be charged yet</p>
      </Segment>
    </div>
  );
};

export default DetailCart;
