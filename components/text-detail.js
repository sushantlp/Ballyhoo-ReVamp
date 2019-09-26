import ReadMoreAndLess from "react-read-more-less";
const Text = props => {
  return (
    <div className="box">
      <div className="columns">
        <div className="column">
          <h4 className="ffqs cuisine-title">{props.title}</h4>
          <div className="overview-underscore" />

          <h4 className="fz1 pfc4 ffqs fw2 ls white-space lh1-7">
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

          {props.flag ? (
            <ul className="package-tags">
              {props.happyHour.map((tag, key) => {
                return (
                  <li className="ellipsis" key={key}>
                    {tag.day} {tag.start_time} To {tag.end_time}
                  </li>
                );
              })}
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Text;
