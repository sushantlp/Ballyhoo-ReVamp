import { Segment } from "semantic-ui-react";
import "./food-offer-list.css";
const FoodList = props => {
  return (
    <React.Fragment>
      <div className="food-offer-list-container">
        <div className="columns">
          <div className="column">
            <Segment>
              <div className="box">
                <article className="media">
                  <div className="media-content">
                    <div className="content">
                      <div className="columns mb0">
                        <div className="column is-12">
                          <h4 className="ffqs list-title">
                            Coffee & Sliders offers
                          </h4>
                          <h4 className="mb8 plh1 list-subtitle">
                            Mon-Sun to 12:00 PM to 03:30 PM
                          </h4>
                        </div>
                      </div>

                      <div className="f14 ffqs">
                        <p style={{ whiteSpace: "pre-line" }}>
                          About Buffet:- Enjoy Authentic Cuisine with Unlimited
                          spread for Lunch Buffet @Cubbon Pavilion - ITC
                          Gardenia. Inclusions: Unlimited Spread with Table
                          Service. T&C: Validity: Monday to Saturday, 12 noon to
                          3 pm. Taxes may apply. Per person basis. Can not be
                          shared. Rights of reservation reserved. Management
                          reserved the rights to change the prices without any
                          notice.
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </Segment>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FoodList;
