import Map from "./map";
import "./overview.css";
const Overview = props => {
  return (
    <div className="overview-controller">
      <div className="box">
        <Map />
      </div>
    </div>
  );
};

export default Overview;
