const SpaList = props => {
  const list = props.listData.listData;

  return list.map((list, key) => {
    let description = list.offer_description;
    if (description.length >= 200) {
      description = description.slice(0, 200) + " ...";
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

    return (
      <React.Fragment key={key}>
        <div className="box letter-spacing-1px" id="child-list">
          <article className="media">
            <div className="media-left">
              <figure className="image">
                <img src={list.offer_preview_image} alt={props.keyword} />
              </figure>
            </div>

            {list.offer_promoted === 1 ? (
              <div className="ribbon ribbon-top-left">
                <span>Featured</span>
              </div>
            ) : null}

            <div className="media-content">
              <div className="content">
                <div className="columns mb0">
                  <div className="column">
                    <p className="title google">
                      {list.partner_details.p_name}
                    </p>
                    <p className="subtitle is-6 mb8">
                      {list.offer_address.locality}
                    </p>
                  </div>

                  <div className="column">
                    <span className="tag radius20 fw7 padding1-4-1" id="li">
                      <img
                        src="https://img.icons8.com/color/20/000000/hearts.png"
                        alt={props.keyword}
                      />
                      <span className="ellipsis pl0_5 fs1-4">
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
                      {/* pb8 */}
                      <span className="mr24">Starting from :</span>
                      {list.offer_max_discount != null &&
                      parseInt(list.offer_max_discount, 10) !== 0 ? (
                        <span className="tag is-danger radius20 fw7">
                          {list.offer_max_discount}% off
                        </span>
                      ) : null}
                    </span>

                    <h5
                      className="m0 f17 fw9 flh28 mt0-2"
                      style={{ color: "#635f5f" }}
                    >
                      ₹ {list.offer_min_price}/-{" "}
                      <span className="f12">onwards</span>
                      {/* <span className="f12 pfc3 tdl ml8">₹ {offer_min_price}/-</span> */}
                    </h5>
                  </div>
                  <div className="column pl8 pt0">
                    <div className="tags package-tags">
                      {list.offer_hash_tags.map((tag, key) => {
                        if (key <= 4)
                          return (
                            <li className="tag is-rounded" key={key} id="li">
                              {tag}
                            </li>
                          );
                      })}
                    </div>
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
                {list.offer_gender_preference === 1 ? (
                  <span>
                    <img
                      src="https://img.icons8.com/bubbles/50/000000/birthday-boy.png"
                      id="spa-img"
                      alt={props.keyword}
                    />
                  </span>
                ) : list.offer_gender_preference === 2 ? (
                  <span>
                    <img
                      src="https://img.icons8.com/bubbles/50/000000/birthday-girl.png"
                      id="spa-img"
                      alt={props.keyword}
                    />
                  </span>
                ) : (
                  <span>
                    {" "}
                    <span>
                      <img
                        src="https://img.icons8.com/bubbles/50/000000/birthday-boy.png"
                        id="spa-img"
                        alt={props.keyword}
                      />
                    </span>{" "}
                    <span>
                      <img
                        src="https://img.icons8.com/bubbles/50/000000/birthday-girl.png"
                        id="spa-img"
                        alt={props.keyword}
                      />
                    </span>
                  </span>
                )}
              </span>
            </div>

            <div className="card-footer-item">
              <a
                className="button is-medium is-black is-outlined"
                onClick={() => props.categoryApiCall(list.offer_id)}
              >
                <span>View Detail</span>
              </a>
            </div>
          </footer>
        </div>
      </React.Fragment>
    );
  });
};

export default SpaList;
