import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import "./order.css";

const Order = props => {
  return (
    <React.Fragment>
      <section className="section">
        <div className="container">
          <div className="order-container">
            <h4 className="fw2 fs2 ffqs text-align-center">
              {/* <span> Past Orders </span> */}
              <span>
                {" "}
                <DateRangePicker
                  startDate={props.fromDate}
                  startDateId="2"
                  endDate={props.toDate}
                  endDateId="3"
                  onDatesChange={(startDate, endDate) =>
                    props.onDateChange(startDate, endDate)
                  }
                  focusedInput={props.focused}
                  onFocusChange={focusedInput =>
                    props.onFocusChange(focusedInput)
                  }
                />{" "}
              </span>
            </h4>

            <div className="box">
              <article className="media">
                <div className="media-left">
                  <figure className="image is-128x128">
                    <img
                      src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_200,c_fill/xs9g4vpc9q1qxqisb8ma"
                      alt="Image"
                    />
                  </figure>
                </div>

                <div className="media-content">
                  <div className="content">
                    <div className="columns mb0">
                      <div className="column is-7">
                        <h4 className="fw2 fs1-5 m0 ffqs plh1">Homely</h4>
                        <h4 className="mt2 fs1 ffqs fw2 plh1">
                          3rd Phase Jp-Nagar
                        </h4>
                        <h4 className="mt2 fs1 ffqs fw2">
                          ORDER #38313280562 | Sun, Apr 14, 04:04 PM
                        </h4>
                      </div>

                      <div className="column is-5">
                        <h4 className="ffqs fs1-1 fw2">
                          Delivered on Sun, Apr 14, 04:27 PM
                        </h4>
                      </div>
                    </div>
                    {/* 
                    <div className="f14 ffqs">
                      <p style={{ whiteSpace: "pre-line" }}>
                        About Buffet:- Enjoy Authentic Cuisine with Unlimited
                        spread for Lunch Buffet @Cubbon Pavilion - ITC Gardenia.
                        Inclusions: Unlimited Spread with Table Service. T&C:
                        Validity: Monday to Saturday, 12 noon to 3 pm. Taxes may
                        apply. Per person basis. Can not be shared. Rights of
                        reservation reserved. Management reserved the rights to
                        change the prices without any notice.
                      </p>
                    </div> */}
                  </div>
                </div>
              </article>
            </div>

            <div className="box">
              <article className="media">
                <div className="media-left">
                  <figure className="image is-128x128">
                    <img
                      src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_200,c_fill/xs9g4vpc9q1qxqisb8ma"
                      alt="Image"
                    />
                  </figure>
                </div>

                <div className="media-content">
                  <div className="content">
                    <div className="columns mb0">
                      <div className="column is-7">
                        <h4 className="fw2 fs1-5 m0 ffqs plh1">Homely</h4>
                        <h4 className="mt2 fs1 ffqs fw2 plh1">
                          3rd Phase Jp-Nagar
                        </h4>
                        <h4 className="mt2 fs1 ffqs fw2">
                          ORDER #38313280562 | Sun, Apr 14, 04:04 PM
                        </h4>
                      </div>

                      <div className="column is-5">
                        <h4 className="ffqs fs1-1 fw2">
                          Delivered on Sun, Apr 14, 04:27 PM
                        </h4>
                      </div>
                    </div>
                    {/* 
                    <div className="f14 ffqs">
                      <p style={{ whiteSpace: "pre-line" }}>
                        About Buffet:- Enjoy Authentic Cuisine with Unlimited
                        spread for Lunch Buffet @Cubbon Pavilion - ITC Gardenia.
                        Inclusions: Unlimited Spread with Table Service. T&C:
                        Validity: Monday to Saturday, 12 noon to 3 pm. Taxes may
                        apply. Per person basis. Can not be shared. Rights of
                        reservation reserved. Management reserved the rights to
                        change the prices without any notice.
                      </p>
                    </div> */}
                  </div>
                </div>
              </article>
            </div>

            <div className="box">
              <article className="media">
                <div className="media-left">
                  <figure className="image is-128x128">
                    <img
                      src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_200,c_fill/xs9g4vpc9q1qxqisb8ma"
                      alt="Image"
                    />
                  </figure>
                </div>

                <div className="media-content">
                  <div className="content">
                    <div className="columns mb0">
                      <div className="column is-7">
                        <h4 className="fw2 fs1-5 m0 ffqs plh1">Homely</h4>
                        <h4 className="mt2 fs1 ffqs fw2 plh1">
                          3rd Phase Jp-Nagar
                        </h4>
                        <h4 className="mt2 fs1 ffqs fw2">
                          ORDER #38313280562 | Sun, Apr 14, 04:04 PM
                        </h4>
                      </div>

                      <div className="column is-5">
                        <h4 className="ffqs fs1-1 fw2">
                          Delivered on Sun, Apr 14, 04:27 PM
                        </h4>
                      </div>
                    </div>
                    {/* 
                    <div className="f14 ffqs">
                      <p style={{ whiteSpace: "pre-line" }}>
                        About Buffet:- Enjoy Authentic Cuisine with Unlimited
                        spread for Lunch Buffet @Cubbon Pavilion - ITC Gardenia.
                        Inclusions: Unlimited Spread with Table Service. T&C:
                        Validity: Monday to Saturday, 12 noon to 3 pm. Taxes may
                        apply. Per person basis. Can not be shared. Rights of
                        reservation reserved. Management reserved the rights to
                        change the prices without any notice.
                      </p>
                    </div> */}
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Order;
