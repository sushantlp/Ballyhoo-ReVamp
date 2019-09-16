import EventPackage from "./event-package-detail";
import EscapePackage from "./escape-package-detail";
import ExculsiveEscapePackage from "./exculsive-escape-package-detail";
import ActivityPackage from "./activity-package-detail";
import SaloonPackage from "./saloon-package-detail";

import "./parent-package.css";

const ParentPackage = props => {
  return (
    <React.Fragment>
      <div className="parent-package-container">
        <div className="columns">
          <div className="column">
            <EventPackage />
            <EscapePackage />
            <ExculsiveEscapePackage />
            <ActivityPackage />
            <SaloonPackage />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
  // }
};

export default ParentPackage;
