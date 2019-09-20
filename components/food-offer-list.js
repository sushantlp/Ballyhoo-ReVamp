import { Segment } from "semantic-ui-react";
import ReadMoreAndLess from "react-read-more-less";

import "./food-offer-list.css";
const FoodList = props => {
  return (
    <React.Fragment>
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
                              <h4 className="ffqs list-title">{value.title}</h4>
                              <h4 className="mb8 plh1 list-subtitle">
                                {value.days} {value.times.start_time} To{" "}
                                {value.times.end_time}
                              </h4>
                            </div>
                          </div>

                          <div
                            className="f14 ffqs plh1"
                            style={{ whiteSpace: "pre-line" }}
                          >
                            <ReadMoreAndLess
                              ref={props.ReadMore}
                              className="read-more-content"
                              charLimit={450}
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
    </React.Fragment>
  );
};

export default FoodList;
