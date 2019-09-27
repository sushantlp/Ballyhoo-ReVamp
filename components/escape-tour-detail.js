const TourDetail = props => {
  return (
    <div className="box">
      <div className="columns">
        <div className="column is-7">
          <h4 className="ffqs cuisine-title">Tour Detail</h4>
          <div className="overview-underscore" />

          <h4 className="ffqs fw2">
            Tour Duration :{" "}
            <span className="fw2 sfc3">{props.tourDetail.tour_duration}</span>
          </h4>

          <h4 className="ffqs fw2 mt1">
            Tour Start :{" "}
            <span className="fw2 sfc3">{props.tourDetail.tour_start_from}</span>
          </h4>

          <h4 className="ffqs fw2 mt1">
            Tour Distance :{" "}
            <span className="fw2 sfc3">
              {props.tourDetail.tour_total_distance} km
            </span>
          </h4>

          <h4 className="ffqs fw2 mt1">
            Travel Time :{" "}
            <span className="fw2 sfc3">
              {props.tourDetail.tour_travel_time} hr
            </span>
          </h4>
        </div>

        <div className="column is-4 is-offset-1">
          <div className="tags">
            {/* <ul className="package-tags"> */}
            {props.tourDetail.tour_type.map((city, key) => {
              return (
                <span className="tag is-rounded is-danger" key={key}>
                  {city}
                </span>
              );
              // return (
              //   <li className="ellipsis" key={key}>
              //     {city}
              //   </li>
              // );
            })}
            {/* </ul> */}
          </div>

          <div className="tags">
            {props.tourDetail.tour_destinations.map((city, key) => {
              return (
                <span className="tag is-rounded is-warning" key={key}>
                  {city}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetail;
