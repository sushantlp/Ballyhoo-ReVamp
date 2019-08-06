import Map from "./map";
import "./overview.css";
const Overview = props => {
  return (
    <div className="overview-container">
      <div className="columns">
        <div className="column is-7">
          <p className="google">55 Wall Street</p>
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

      <div className="columns">
        <div className="column">
          <p className="ff f10 f1-1">
            C. d'Arístides Maillol, 12, 08028 Barcelona, Spain
          </p>
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Overview;
