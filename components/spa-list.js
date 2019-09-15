const SpaList = props => {
  const list = props.listData.listData.results;

  console.log(list);
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

            <div className="ribbon ribbon-top-left">
              <span>Featured</span>
            </div>
            <div className="media-content">
              <div className="content">
                <div className="columns mb0">
                  <div className="column">
                    <p className="title google">{list.offer_title}</p>
                    <p className="subtitle is-6 mb8 plh1">
                      {list.offer_locality}
                    </p>
                  </div>

                  <div className="column">
                    <span className="tag radius20 fw7">
                      <img src="https://img.icons8.com/color/17/000000/hearts.png" />
                      <span className="ellipsis pl0_5">
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
                      {/* pb8 */}
                      <span className="mr24 pfc4">Starting from:</span>
                      <span className="tag is-danger radius20 fw7">
                        {list.offer_max_discount}% off
                      </span>
                    </span>

                    <h5 className="sfc3 m0 f24 fw9 flh28 priceVal at_newprice">
                      ₹ {list.offer_min_price}/-
                      <span className="f12">onwards</span>
                      {/* <span className="f12 pfc3 tdl ml8">₹ {offer_min_price}/-</span> */}
                    </h5>
                  </div>
                  <div className="column pl8 pt0">
                    <div className="package-tag-box">
                      <ul className="package-tags at_package_tags">
                        {list.offer_hash_tags.map((tag, key) => {
                          return (
                            <li className="ellipsis" key={key}>
                              {tag}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
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
                {list.offer_gender_preference === 1 ? (
                  <span>
                    <img src="https://img.icons8.com/bubbles/50/000000/birthday-boy.png" />
                  </span>
                ) : list.offer_gender_preference === 2 ? (
                  <span>
                    <img src="https://img.icons8.com/bubbles/50/000000/birthday-girl.png" />
                  </span>
                ) : (
                  <span>
                    {" "}
                    <span>
                      <img src="https://img.icons8.com/bubbles/50/000000/birthday-boy.png" />
                    </span>{" "}
                    <span>
                      <img src="https://img.icons8.com/bubbles/50/000000/birthday-girl.png" />
                    </span>
                  </span>
                )}
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

export default SpaList;
