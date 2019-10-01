const TourDetail = props => {
  return (
    <div className="box">
      <h4 className="ffqs cuisine-title">Tour Detail</h4>
      <div className="overview-underscore" />
      {parseInt(props.exclusive, 10) !== 1 ? (
        <div className="columns">
          <div className="column">
            <h4 className="ffqs fw2 mt1">Type of tour :</h4>

            <div className="tags">
              {props.tourDetail.tour_type.map((city, key) => {
                return (
                  <span className="tag is-rounded is-warning" key={key}>
                    {city}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      ) : props.tourDetail.tour_duration == null &&
        props.tourDetail.tour_start_from == null &&
        props.tourDetail.tour_total_distance == null &&
        props.tourDetail.tour_travel_time == null ? (
        <div className="columns">
          {props.tourDetail.tour_type.length > 0 ? (
            <div className="column">
              <h4 className="ffqs fw2 mt1">Type of tour :</h4>

              <div className="tags">
                {props.tourDetail.tour_type.map((city, key) => {
                  return (
                    <span className="tag is-rounded is-warning" key={key}>
                      {city}
                    </span>
                  );
                })}
              </div>
            </div>
          ) : null}

          {props.tourDetail.tour_destinations.length > 0 ? (
            <div className="column">
              <h4 className="ffqs fw2 mt1">Tour Destination :</h4>

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
          ) : null}
        </div>
      ) : (
        <div className="columns">
          <div className="column is-7">
            {props.tourDetail.tour_duration == null ? null : (
              <h4 className="ffqs fw2">
                Tour Duration :{" "}
                <span className="fw2 sfc3">
                  {props.tourDetail.tour_duration}
                </span>
              </h4>
            )}

            {props.tourDetail.tour_start_from == null ? null : (
              <h4 className="ffqs fw2 mt1">
                Tour Start :{" "}
                <span className="fw2 sfc3">
                  {props.tourDetail.tour_start_from}
                </span>
              </h4>
            )}

            {props.tourDetail.tour_total_distance == null ? null : (
              <h4 className="ffqs fw2 mt1">
                Tour Distance :{" "}
                <span className="fw2 sfc3">
                  {props.tourDetail.tour_total_distance} km
                </span>
              </h4>
            )}

            {props.tourDetail.tour_travel_time == null ? null : (
              <h4 className="ffqs fw2 mt1">
                Travel Time :{" "}
                <span className="fw2 sfc3">
                  {props.tourDetail.tour_travel_time} hr
                </span>
              </h4>
            )}
          </div>

          <div className="column is-4 is-offset-1">
            {props.tourDetail.tour_type.length > 0 ? (
              <React.Fragment>
                <h4 className="ffqs fw2 mt1">Type of tour :</h4>

                <div className="tags">
                  {props.tourDetail.tour_type.map((city, key) => {
                    return (
                      <span className="tag is-rounded is-warning" key={key}>
                        {city}
                      </span>
                    );
                  })}
                </div>
              </React.Fragment>
            ) : null}

            {props.tourDetail.tour_destinations.length > 0 ? (
              <React.Fragment>
                <h4 className="ffqs fw2 mt1">Tour Destination :</h4>

                <div className="tags">
                  {props.tourDetail.tour_destinations.map((city, key) => {
                    return (
                      <span className="tag is-rounded is-warning" key={key}>
                        {city}
                      </span>
                    );
                  })}
                </div>
              </React.Fragment>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
};

export default TourDetail;
