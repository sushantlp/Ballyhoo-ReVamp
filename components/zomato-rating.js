import { Segment } from "semantic-ui-react";
import ReadMoreAndLess from "react-read-more-less";

const zomatoUiRender = props => {
  return props.map((value, key) => {
    let fullRating = [];
    let emptyRating = [];
    let topRating = 5;
    let halfRating = undefined;

    const rating = value.rating + "";
    const ratingSplit = rating.split(".");

    // Half Star
    if (ratingSplit[1] !== undefined) {
      if (parseInt(ratingSplit[1], 10) === 0)
        topRating = topRating - Number(ratingSplit[0]);
      else {
        topRating = topRating - Number(ratingSplit[0]);
        topRating = topRating - 1;

        halfRating = (
          <img src="https://img.icons8.com/color/20/000000/star-half-empty.png" />
        );
      }
    } else topRating = topRating - Number(ratingSplit[0]);

    // Full Star
    for (let i = 0; i < Number(ratingSplit[0]); i++) {
      fullRating.push(i);
    }

    // Empty Star
    for (let i = 0; i < topRating; i++) {
      emptyRating.push(i);
    }

    return (
      <Segment key={key}>
        <h3 className="ff f1-1 fw2">{value.reviewer}</h3>{" "}
        <span className="rating">
          {fullRating.map(function(i) {
            return (
              <img
                src="https://img.icons8.com/color/20/000000/filled-star.png"
                key={i}
              />
            );
          })}
          <span>{halfRating}</span>
          <span>
            {emptyRating.map(function(i) {
              return (
                <img
                  src="https://img.icons8.com/color/20/000000/star.png"
                  key={i}
                />
              );
            })}
          </span>
        </span>{" "}
        <h4 className="fz1 pfc4 ffqs fw2 ls white-space mt0-5">
          <ReadMoreAndLess
            ref={props.ReadMore}
            className="read-more-content"
            charLimit={200}
            readMoreText="See more"
            readLessText="See less"
          >
            {value.review}
          </ReadMoreAndLess>
        </h4>
      </Segment>
    );
  });
};
const Zomato = props => {
  return (
    <div className="zomato-container">
      <h4 className="ffqs cuisine-title" style={{ color: "black" }}>
        Rating <span className="fs0-7 light-red">(By Zomato) </span>
      </h4>
      <div className="overview-underscore" />

      {zomatoUiRender(props.zomatoData.zomatoData)}

      <section className="section">
        <div className="has-text-centered">
          {props.zomatoData.next_page !== null ? (
            props.isLoading ? (
              <a className="button is-danger is-loading is-large">Load More</a>
            ) : (
              <a
                className="button is-danger is-large"
                onClick={() => props.zomatoApiCall(props.zomatoData.next_page)}
              >
                Load More
              </a>
            )
          ) : (
            <a
              className="button is-danger is-large"
              title="Disabled button"
              disabled
            >
              Load More
            </a>
          )}
        </div>
      </section>
    </div>
  );
};

export default Zomato;
