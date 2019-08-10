import "./food-event-list.css";
const FoodEventList = props => {
  return (
    <React.Fragment>
      <div className="food-event-list-container">
        <div className="columns">
          <div className="column">
            <div className="box">
              <article className="media">
                <div className="media-left">
                  <figure className="image">
                    <img
                      src="//cdn-imgix.headout.com/tour/14373/TOUR-IMAGE/1459508c-6a16-4228-997d-d1a73c9b8ca0-7365-singapore-wings-of-time-01.jpg?auto=compress&fm=pjpg&w=480&h=480&crop=faces&fit=min"
                      alt="Image"
                    />
                  </figure>
                </div>

                <div className="ribbon ribbon-top-left">
                  <span>Tuesday</span>
                </div>

                <div className="media-content">
                  <div className="content">
                    <div className="columns mb0">
                      <div className="column is-10">
                        <h4 className="ffqs list-title">Open Mic</h4>
                        <h4 className="mb8 plh1 list-subtitle">
                          12:00 PM to 03:30 PM
                        </h4>
                      </div>
                    </div>

                    <div className="css-clzwav f14 pfc4 m0 fw4">
                      <p style={{ whiteSpace: "pre-line" }}>
                        About Buffet:- Enjoy Authentic Cuisine with Unlimited
                        spread for Lunch Buffet @Cubbon Pavilion - ITC Gardenia.
                        Inclusions: Unlimited Spread with Table Service. T&C:
                        Validity: Monday to Saturday, 12 noon to 3 pm. Taxes may
                        apply. Per person basis. Can not be shared. Rights of
                        reservation reserved. Management reserved the rights to
                        change the prices without any notice.
                      </p>
                    </div>
                  </div>
                  <a className="button is-medium is-danger is-pulled-right">
                    <span>RSVP</span>
                  </a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FoodEventList;
