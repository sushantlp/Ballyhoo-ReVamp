const EscapeList = props => {
  const list = props.listData.listData;

  return list.map((list, key) => {
    let description = list.offer_description;
    if (description.length >= 250) {
      description = description.slice(0, 250) + " ...";
    }

    let fullRating = [];
    let emptyRating = [];
    let topRating = 5;
    let halfRating = undefined;

    const rating = list.offer_rating + "";
    const ratingSplit = rating.split(".");

    // Half Star
    if (ratingSplit[1] !== undefined) {
      if (parseInt(ratingSplit[1], 10) === 0)
        topRating = topRating - Number(ratingSplit[0]);
      else {
        topRating = topRating - Number(ratingSplit[0]);
        topRating = topRating - 1;

        halfRating = (
          <img src="https://img.icons8.com/color/20/000000/star-half-empty.png" />
        );
      }
    } else topRating = topRating - Number(ratingSplit[0]);

    // Full Star
    for (let i = 0; i < Number(ratingSplit[0]); i++) {
      fullRating.push(i);
    }

    // Empty Star
    for (let i = 0; i < topRating; i++) {
      emptyRating.push(i);
    }

    return (
      <React.Fragment key={key}>
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image">
                <img src={list.offer_images} alt="Image" />
              </figure>
            </div>

            {list.offer_promoted === 1 ? (
              <div className="ribbon ribbon-top-left">
                <span>Featured</span>
              </div>
            ) : null}

            {list.offer_exclusive === 1 ? (
              <div className="ribbon ribbon-bottom-right">
                <span style={{ backgroundColor: "#ffdd57", color: "black" }}>
                  Exculsive
                </span>
              </div>
            ) : null}

            <div className="media-content">
              <div className="content">
                <div className="columns mb0">
                  <div className="column">
                    <p className="title google">{list.offer_title}</p>
                    <p className="subtitle is-6 mb8 plh1">
                      {list.tour_details.tour_duration != null
                        ? list.tour_details.tour_duration
                        : list.offer_address.locality}
                    </p>
                  </div>

                  <div className="column">
                    <span className="tag radius20 fw7">
                      <img src="https://img.icons8.com/color/17/000000/hearts.png" />
                      <span className="ellipsis pl0_5">
                        {" "}
                        {list.offer_popularity}%
                      </span>
                    </span>

                    <span className="rating">
                      {fullRating.map(function(i) {
                        return (
                          <img
                            src="https://img.icons8.com/color/20/000000/filled-star.png"
                            key={i}
                          />
                        );
                      })}
                      <span>{halfRating}</span>
                      <span>
                        {emptyRating.map(function(i) {
                          return (
                            <img
                              src="https://img.icons8.com/color/20/000000/star.png"
                              key={i}
                            />
                          );
                        })}
                      </span>
                    </span>
                  </div>
                </div>

                <div className="columns mb0 ">
                  <div className="column pt0">
                    <span className="f12 fw4 m0 iblock">
                      <span className="mr24 pfc4">Starting from:</span>
                      {list.offer_max_discount != null &&
                      parseInt(list.offer_max_discount, 10) !== 0 ? (
                        <span className="tag is-danger radius20 fw7">
                          {list.offer_max_discount}% off
                        </span>
                      ) : null}
                    </span>

                    <h5
                      className="sfc3 m0 f24 fw9 flh28"
                      style={{ marginBottom: ".4em" }}
                    >
                      ₹ {list.offer_min_price}/-
                      {/* <span className="f12 pfc3 tdl ml8">₹ 11,351/-</span> */}
                    </h5>

                    <p className="f12 m0 pfc4 fw7">
                      Per Person on twin sharing
                    </p>
                  </div>
                  {/* <div className="column pl8 pt0">
                    <div className="package-tag-box">
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
                  </div> */}
                </div>

                <div className="css-clzwav f12 pfc4 m0 fw4">
                  <p>{description}</p>
                </div>
              </div>
            </div>
          </article>

          <footer className="card-footer">
            <div className="card-footer-item">
              <span className="span-flex">
                <span className="pr2">
                  <img src="https://img.icons8.com/color/25/000000/3-star-hotel.png" />

                  <p className="f12">Stay</p>
                </span>

                <span className="pr2">
                  <img
                    src="https://img.icons8.com/color/25/000000/around-the-globe.png"
                    style={{ paddingLeft: "0.3em" }}
                  />
                  <p className="f12">Travel</p>
                </span>

                <span className="pr2">
                  <img
                    src="https://img.icons8.com/color/25/000000/tripadvisor.png"
                    style={{ paddingLeft: "1.2em" }}
                  />
                  <p className="f12">SightSeeing</p>
                </span>

                <span className="pr2">
                  <img
                    src="https://img.icons8.com/color/25/000000/sandwich.png"
                    style={{ paddingLeft: "0.9em" }}
                  />
                  <p className="f12">BreakFast</p>
                </span>

                <span className="pr2">
                  <img
                    src="https://img.icons8.com/color/25/000000/parachute.png"
                    style={{ paddingLeft: "0.8em" }}
                  />
                  <p className="f12">Activities</p>
                </span>
              </span>
            </div>

            <div className="card-footer-item">
              <a className="button is-medium">
                <span className="icon">
                  <img src="https://img.icons8.com/bubbles/50/000000/visible.png" />
                </span>
                <span>View Detail</span>
              </a>
            </div>
          </footer>
        </div>
      </React.Fragment>
    );
  });
};

export default EscapeList;
