import ReadMoreAndLess from "react-read-more-less";
const Text = props => {
  return (
    <div className="box">
      <div className="columns">
        <div className="column">
          <h4 className="ffqs cuisine-title">{props.title}</h4>
          <div className="offer-underscore" />

          <h4 className="fz1 pfc4 ffqs fw2 ls white-space">
            <ReadMoreAndLess
              ref={props.ReadMore}
              className="read-more-content"
              charLimit={300}
              readMoreText="See more"
              readLessText="See less"
            >
              {props.detail}
            </ReadMoreAndLess>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Text;
