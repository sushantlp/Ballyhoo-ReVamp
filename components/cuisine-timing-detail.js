const CuisineTiming = props => {
  return (
    <div className="box">
      <div className="cuisine-container">
        <div className="columns">
          <div className="column is-6">
            <h4 className="ffqs cuisine-title">Cuisines</h4>
            <div className="cuisine-underscore" />
            <ul className="package-tags">
              <li className="ellipsis">Shikara Ride</li>
              <li className="ellipsis">Nature</li>
              <li className="ellipsis">Martand Temple</li>
              <li className="ellipsis">Hill station</li>
              <li className="ellipsis">Amusement Park</li>
              <li className="ellipsis">Sightseeing</li>
              <li className="ellipsis">Gondola Ride</li>
              <li className="ellipsis">Family</li>
              <li className="ellipsis">Budget</li>
            </ul>
          </div>

          <div className="column is-5 is-offset-1">
            <h4 className="ffqs cuisine-title">Timings</h4>
            <div className="timing-underscore" />
            <ul className="package-tags">
              <li className="ellipsis">Tue 11:30 AM To 12:30 AM</li>
              <li className="ellipsis">Wed 11:30 AM To 12:30 AM</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CuisineTiming;
