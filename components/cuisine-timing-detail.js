const CuisineTiming = props => {
  return (
    <div className="box">
      <div className="cuisine-container">
        <div className="columns">
          <div className="column is-6">
            <h4
              className="ffqs cuisine-title letter-spacing-1px"
              style={{ color: "black" }}
            >
              {props.cuisineTagFlag ? "Cuisine" : "Hashtag"}
            </h4>
            <div className="overview-underscore" />
            <ul className="package-tags letter-spacing-1px">
              {props.cuisineTag.map((tag, key) => {
                return (
                  <li className="ellipsis" key={key}>
                    {props.cuisineTagFlag ? tag.cuisine_name : null}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="column is-5 is-offset-1">
            <h4
              className="ffqs cuisine-title letter-spacing-1px"
              style={{ color: "black" }}
            >
              Timings
            </h4>
            <div className="overview-underscore" />
            <ul className="package-tags letter-spacing-1px">
              {props.timing.map((tag, key) => {
                return (
                  <li className="ellipsis" key={key}>
                    {tag.day}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CuisineTiming;
