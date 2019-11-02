import ReadMoreAndLess from "react-read-more-less";
import { Segment } from "semantic-ui-react";

import EmptyMessage from "./empty-message";

import "./food-event-list.css";

const FoodEventList = props => {
  if (props.events.length === 0)
    return (
      <EmptyMessage
        img={
          "https://img.icons8.com/cute-clipart/64/000000/tear-off-calendar.png"
        }
        description={"No Event Available"}
        title={"Event"}
      />
    );

  return (
    <div className="food-event-list-container">
      <div className="columns">
        <div className="column">
          {props.events.map((value, key) => {
            let bookButton = false;
            if (parseInt(props.expiry, 10) === 1) bookButton = true;
            else if (parseInt(value.reserve_status, 10) === 0)
              bookButton = true;

            return (
              <Segment key={key}>
                <div className="box">
                  <article className="media">
                    <div className="media-left">
                      <figure className="image">
                        <img src={value.img} alt={props.keyword} />
                      </figure>
                    </div>

                    <div className="ribbon ribbon-top-left">
                      <span>{value.days}</span>
                    </div>

                    <div className="media-content">
                      <div className="content">
                        <div className="columns mb0">
                          <div className="column is-10">
                            <h4 className="ffqs list-title letter-spacing-1px">
                              {value.title}
                            </h4>
                            <h4 className="mb8 plh1 list-subtitle letter-spacing-1px">
                              {value.times.start_time} {"  "} To {"  "}{" "}
                              {value.times.end_time}
                            </h4>
                          </div>
                        </div>

                        <div
                          className="f14 ffqs plh1 letter-spacing-1px"
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

                      {bookButton ? (
                        <a
                          className="button is-medium is-danger is-pulled-right"
                          disabled
                        >
                          <span>RSVP</span>
                        </a>
                      ) : (
                        <a
                          className="button is-medium is-danger is-pulled-right"
                          onClick={() => props.onFnbEventClick(value)}
                        >
                          <span>RSVP</span>
                        </a>
                      )}
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

export default FoodEventList;
