import ReadMoreAndLess from "react-read-more-less";
import { Segment } from "semantic-ui-react";
import "./food-event-list.css";

const FoodEventList = props => {
  console.log(props);
  return props.events.map((value, key) => {
    return (
      <React.Fragment key={key}>
        <div className="food-event-list-container">
          <div className="columns">
            <div className="column">
              <Segment>
                <div className="box">
                  <article className="media">
                    <div className="media-left">
                      <figure className="image">
                        <img src={value.img} alt="Image" />
                      </figure>
                    </div>

                    <div className="ribbon ribbon-top-left">
                      <span>{value.days}</span>
                    </div>

                    <div className="media-content">
                      <div className="content">
                        <div className="columns mb0">
                          <div className="column is-10">
                            <h4 className="ffqs list-title">{value.title}</h4>
                            <h4 className="mb8 plh1 list-subtitle">
                              {value.times.start_time} To {value.times.end_time}
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
                            charLimit={100}
                            readMoreText="See more"
                            readLessText="See less"
                          >
                            {value.description}
                          </ReadMoreAndLess>
                        </div>
                      </div>
                      <a className="button is-medium is-danger is-pulled-right">
                        <span>RSVP</span>
                      </a>
                    </div>
                  </article>
                </div>
              </Segment>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  });
};

export default FoodEventList;
