const BestTime = props => {
  return (
    <div className="box">
      <div className="columns">
        <div className="column is-6">
          <h4 className="ffqs cuisine-title" style={{ color: "black" }}>
            Best Time to Visit
          </h4>
          <div className="overview-underscore" />
          <br />
          <div className="tags">
            {props.bestTime.map((best, key) => {
              return (
                <span className="tag is-rounded is-warning" key={key}>
                  {best}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestTime;
