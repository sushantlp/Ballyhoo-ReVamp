import ReadMoreAndLess from "react-read-more-less";
import { Segment } from "semantic-ui-react";
import "./food-event-list.css";
const FoodEventList = props => {
  return props.events.map((value, key) => {
    return (
      <React.Fragment>
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

                        <div className="f14 ffqs plh1">
                          <p style={{ whiteSpace: "pre-line" }}>
                            <ReadMoreAndLess
                              ref={props.ReadMore}
                              className="read-more-content"
                              charLimit={400}
                              readMoreText="See more"
                              readLessText="See less"
                            >
                              {value.description}
                            </ReadMoreAndLess>
                          </p>
                        </div>
                      </div>
                      <a className="button is-medium is-danger is-pulled-right">
                        <span>RSVP</span>
                      </a>
                    </div>
                  </article>
                </div>
              </Segment>
              <Segment>
                <div className="box">
                  <article className="media">
                    <div className="media-left">
                      <figure className="image">
                        <img
                          src="//cdn-imgix.headout.com/tour/13770/TOUR-IMAGE/9590b09b-3c11-4e47-b364-53ee809b8326-7563-barcelona-skip-the-line-entry-ticket-to-park-guell-01.jpg?auto=compress&fm=pjpg&w=480&h=480&crop=faces&fit=min"
                          alt="Image"
                        />
                      </figure>
                    </div>

                    <div className="ribbon ribbon-top-left">
                      <span>Saturday</span>
                    </div>

                    <div className="media-content">
                      <div className="content">
                        <div className="columns mb0">
                          <div className="column is-10">
                            <h4 className="ffqs list-title">Hawaiian Luau</h4>
                            <h4 className="mb8 plh1 list-subtitle">
                              12:00 PM to 03:30 PM
                            </h4>
                          </div>
                        </div>

                        <div className="f14 ffqs">
                          <p style={{ whiteSpace: "pre-line" }}>
                            About Buffet:- Enjoy Authentic Cuisine with
                            Unlimited spread for Lunch Buffet @Cubbon Pavilion -
                            ITC Gardenia. Inclusions: Unlimited Spread with
                            Table Service. T&C: Validity: Monday to Saturday, 12
                            noon to 3 pm. Taxes may apply. Per person basis. Can
                            not be shared. Rights of reservation reserved.
                            Management reserved the rights to change the prices
                            without any notice.
                          </p>
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
