const EscapeList = props => {
  const list = props.listData.listData;

  return list.map((list, key) => {
    let description = list.offer_description;
    if (description.length >= 200) {
      description = description.slice(0, 200) + " ...";
    }

    let inclusionType = {
      stay: false,
      travel: false,
      seeing: false,
      breakfast: false,
      activity: false
    };
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
          <img
            src="https://img.icons8.com/color/20/000000/star-half-empty.png"
            alt={props.keyword}
          />
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

    for (let i = 0; i < list.offer_inclusion_types.length; i++) {
      if (parseInt(list.offer_inclusion_types[i]) === 1)
        inclusionType.stay = true;
      if (parseInt(list.offer_inclusion_types[i]) === 2)
        inclusionType.travel = true;
      if (parseInt(list.offer_inclusion_types[i]) === 3)
        inclusionType.seeing = true;
      if (parseInt(list.offer_inclusion_types[i]) === 4)
        inclusionType.breakfast = true;
      if (parseInt(list.offer_inclusion_types[i]) === 5)
        inclusionType.activity = true;
    }

    const title =
      parseInt(list.offer_exclusive, 10) === 1
        ? list.offer_title
        : list.partner_details.p_name;

    return (
      <React.Fragment key={key}>
        <div className="box letter-spacing-1px" id="child-list">
          <article className="media">
            <div className="media-left">
              <figure className="image">
                <img src={list.offer_preview_image} alt={props.keyword} />
              </figure>
            </div>

            {parseInt(list.offer_promoted, 10) === 1 ? (
              <div className="ribbon ribbon-top-left">
                <span>Featured</span>
              </div>
            ) : null}

            {parseInt(list.offer_exclusive, 10) === 1 ? (
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
                    <p className="title google">{title}</p>

                    {parseInt(list.offer_exclusive, 10) === 1 ? (
                      <p className="subtitle is-6 mb8">
                        {list.tour_details.tour_duration != null
                          ? list.tour_details.tour_duration
                          : list.offer_address.locality}
                      </p>
                    ) : (
                      <p className="subtitle is-6 mb8">{list.offer_title}</p>
                    )}
                  </div>

                  <div className="column">
                    <span className="tag radius20 fw7 padding1-4-1" id="li">
                      <img
                        src="https://img.icons8.com/color/17/000000/hearts.png"
                        alt={props.keyword}
                      />
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
                            alt={props.keyword}
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
                              alt={props.keyword}
                            />
                          );
                        })}
                      </span>
                    </span>
                  </div>
                </div>

                <div className="columns mb0 ">
                  <div className="column pt0">
                    <span className="fw4 m0 iblock">
                      <span className="mr24">Starting from :</span>
                      {list.offer_max_discount != null &&
                      parseInt(list.offer_max_discount, 10) !== 0 ? (
                        <span className="tag is-danger radius20 fw7">
                          {list.offer_max_discount}% off
                        </span>
                      ) : null}
                    </span>

                    <h5
                      className="mt0-2 m0 f17 fw9 flh28"
                      style={{ marginBottom: ".4em", color: "#635f5f" }}
                    >
                      ₹ {list.offer_min_price}/-
                      {/* <span className="f12 pfc3 tdl ml8">₹ 11,351/-</span> */}
                    </h5>

                    {/* <p className="f12 pfc4 fw7">Per Person on twin sharing</p> */}
                  </div>
                </div>

                <div className="css-clzwav m0 fw4">
                  <p className="fs1-1">{description}</p>
                </div>
              </div>
            </div>
          </article>

          <footer className="card-footer">
            <div className="card-footer-item">
              <span
                className="span-flex"
                // onClick={() => props.categoryApiCall(list.offer_id)}
              >
                <span className="pr2">
                  {inclusionType.stay ? (
                    <img
                      src="https://img.icons8.com/color/25/000000/3-star-hotel.png"
                      alt={props.keyword}
                    />
                  ) : (
                    <img
                      src="https://img.icons8.com/color/25/000000/3-star-hotel.png"
                      id="escape-img"
                      alt={props.keyword}
                    />
                  )}

                  <p className="f12">Stay</p>
                </span>

                <span className="pr2">
                  {inclusionType.travel ? (
                    <img
                      src="https://img.icons8.com/color/25/000000/around-the-globe.png"
                      style={{ paddingLeft: "0.3em" }}
                      alt={props.keyword}
                    />
                  ) : (
                    <img
                      src="https://img.icons8.com/color/25/000000/around-the-globe.png"
                      style={{ paddingLeft: "0.3em" }}
                      id="escape-img"
                      alt={props.keyword}
                    />
                  )}

                  <p className="f12">Travel</p>
                </span>

                <span className="pr2">
                  {inclusionType.seeing ? (
                    <img
                      src="https://img.icons8.com/color/25/000000/tripadvisor.png"
                      style={{ paddingLeft: "1.2em" }}
                      alt={props.keyword}
                    />
                  ) : (
                    <img
                      src="https://img.icons8.com/color/25/000000/tripadvisor.png"
                      style={{ paddingLeft: "1.2em" }}
                      id="escape-img"
                      alt={props.keyword}
                    />
                  )}

                  <p className="f12">SightSeeing</p>
                </span>

                <span className="pr2">
                  {inclusionType.breakfast ? (
                    <img
                      src="https://img.icons8.com/color/25/000000/sandwich.png"
                      style={{ paddingLeft: "0.9em" }}
                      alt={props.keyword}
                    />
                  ) : (
                    <img
                      src="https://img.icons8.com/color/25/000000/sandwich.png"
                      style={{ paddingLeft: "0.9em" }}
                      id="escape-img"
                      alt={props.keyword}
                    />
                  )}

                  <p className="f12">BreakFast</p>
                </span>

                <span className="pr2">
                  {inclusionType.activity ? (
                    <img
                      src="https://img.icons8.com/color/25/000000/parachute.png"
                      style={{ paddingLeft: "0.8em" }}
                      alt={props.keyword}
                    />
                  ) : (
                    <img
                      src="https://img.icons8.com/color/25/000000/parachute.png"
                      style={{ paddingLeft: "0.8em" }}
                      id="escape-img"
                      alt={props.keyword}
                    />
                  )}

                  <p className="f12">Activities</p>
                </span>
              </span>
            </div>

            <div className="card-footer-item">
              <a
                className="button is-medium is-black is-outlined"
                onClick={() => props.categoryApiCall(list.offer_id)}
              >
                {/* <span className="icon">
                  <img src="https://img.icons8.com/bubbles/50/000000/visible.png" />
                </span> */}
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
