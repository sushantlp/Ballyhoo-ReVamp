import { Segment } from "semantic-ui-react";
import ReadMoreAndLess from "react-read-more-less";

import EmptyMessage from "./empty-message";

import "./food-offer-list.css";
const FoodOfferList = props => {
  console.log(props.offer);

  if (props.offer.length === 0)
    return (
      <EmptyMessage
        img={"https://img.icons8.com/dusk/64/000000/sale.png"}
        description={"No Discount Offers Available"}
        title={"Discount Offer"}
      />
    );

  return (
    <div className="food-offer-list-container">
      <div className="columns">
        <div className="column">
          {props.offer.map((value, key) => {
            return (
              <Segment key={key}>
                <div className="box">
                  <article className="media">
                    <div className="media-content">
                      <div className="content">
                        <div className="columns mb0">
                          <div className="column is-12">
                            <h4 className="ffqs list-title letter-spacing-1px">
                              {value.title}
                            </h4>
                            <h4 className="mb8 plh1 list-subtitle letter-spacing-1px">
                              {value.days} {value.times.start_time} {"  "} To{" "}
                              {"  "}
                              {value.times.end_time}
                            </h4>
                          </div>
                        </div>

                        <div
                          className="f14 ffqs lh1-7 letter-spacing-1px"
                          style={{ whiteSpace: "pre-line" }}
                        >
                          <ReadMoreAndLess
                            ref={props.ReadMore}
                            className="read-more-content"
                            charLimit={100}
                            readMoreText="See more"
                            readLessText="See less"
                          >
                            {value.description}
                          </ReadMoreAndLess>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </Segment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FoodOfferList;
