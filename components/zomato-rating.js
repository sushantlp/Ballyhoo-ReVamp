import ReadMoreAndLess from "react-read-more-less";
const Zomato = props => {
  return (
    <div className="box">
      <div className="columns">
        <div className="column">
          <h4 className="ffqs cuisine-title">
            Rating <span className="fs0-7 light-red">(By Zomato) </span>
          </h4>
          <div className="rating-underscore" />

          <div className="zomato-container">
            <h4 className="ff f1-1 fw2 mb0-3"> Amulya Jayadev</h4>
            <span className="rating">
              <img src="https://img.icons8.com/color/20/000000/filled-star.png" />
              <img src="https://img.icons8.com/color/20/000000/filled-star.png" />
              <img src="https://img.icons8.com/color/20/000000/star-half-empty.png" />
              <img src="https://img.icons8.com/color/20/000000/star.png" />
              <img src="https://img.icons8.com/color/20/000000/star.png" />
            </span>

            <h4 className="fz1 pfc4 ffqs fw2 ls mt0-3 white-space">
              <ReadMoreAndLess
                ref={props.ReadMore}
                className="read-more-content"
                charLimit={300}
                readMoreText="See more"
                readLessText="See less"
              >
                This wonderful land of northeast India, is home to some of the
                most picturesque honeymoon destinations with spellbinding
                tourist attractions. This romantic 4 nights 5 days north east
                package from Delhi, Kolkata, Mumbai and other major cities of
                India takes you around some famous tourist places in northeast
                India including Shillong and Mawlynnong.
              </ReadMoreAndLess>
            </h4>
          </div>

          <p className="buttons load-more">
            <a className="button is-medium is-warning">
              <span className="icon">
                <img src="https://img.icons8.com/cotton/64/000000/circled-chevron-down.png" />
              </span>
              <span>Load More</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Zomato;
