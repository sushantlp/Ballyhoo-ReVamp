import Map from "./map";
import "./overview.css";
const Overview = props => {
  return (
    <div className="overview-container">
      <div className="columns">
        <div className="column is-7">
          <h4 className="google partner-title">55 Wall Street</h4>
        </div>

        <div className="column is-2">
          <span className="tag radius20 fw7">
            <img src="https://img.icons8.com/color/17/000000/hearts.png" />
            <span className="ellipsis pl0_5">71%</span>
          </span>
        </div>

        <div className="column is-3">
          <span className="rating">
            <img src="https://img.icons8.com/color/20/000000/filled-star.png" />
            <img src="https://img.icons8.com/color/20/000000/filled-star.png" />
            <img src="https://img.icons8.com/color/20/000000/star-half-empty.png" />
            <img src="https://img.icons8.com/color/20/000000/star.png" />
            <img src="https://img.icons8.com/color/20/000000/star.png" />
          </span>
        </div>
      </div>

      <div className="box">
        <div className="cuisine-container">
          <h4 className="google cuisine-title">Cuisines</h4>
          <div className="columns">
            <div className="column">
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
          </div>
        </div>
      </div>

      <div className="columns">
        <div className="column">
          <h4 className="ff f10 f1-1 fw2">
            C. d'Arístides Maillol, 12, 08028 Barcelona, Spain
          </h4>
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Overview;
