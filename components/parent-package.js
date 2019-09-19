import EventPackage from "./event-package-detail";
import EscapePackage from "./escape-package-detail";
import ExculsiveEscapePackage from "./exculsive-escape-package-detail";
import ActivityPackage from "./activity-package-detail";
import SaloonPackage from "./saloon-package-detail";
import FoodPackage from "./food-package-detail";

import "./parent-package.css";

const ParentPackage = props => {
  console.log(props);
  return (
    <React.Fragment>
      <div className="parent-package-container">
        <div className="columns">
          <div className="column">
            {parseInt(props.detailUrlParam.result_type, 10) === 2 ? (
              <EventPackage
                package={props.categoryData.categoryData.details.offer_packages}
              />
            ) : null}
            {parseInt(props.detailUrlParam.result_type, 10) === 3 ? (
              <ActivityPackage
                package={props.categoryData.categoryData.details.offer_packages}
              />
            ) : null}
            {parseInt(props.detailUrlParam.result_type, 10) === 4 ? (
              parseInt(
                props.categoryData.categoryData.details.offer_exclusive,
                10
              ) === 0 ? (
                <EscapePackage
                  package={
                    props.categoryData.categoryData.details.offer_packages
                  }
                />
              ) : (
                <ExculsiveEscapePackage
                  package={
                    props.categoryData.categoryData.details.offer_packages
                  }
                />
              )
            ) : null}
            {parseInt(props.detailUrlParam.result_type, 10) === 5 ? (
              <SaloonPackage
                package={props.categoryData.categoryData.details.offer_packages}
              />
            ) : null}

            {parseInt(props.detailUrlParam.result_type, 10) === 1 ? (
              <FoodPackage
                package={props.foodCategoryData.foodCategoryData.packages}
              />
            ) : null}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ParentPackage;
