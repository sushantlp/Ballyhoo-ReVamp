const EscapeList = props => {
  return (
    <React.Fragment>
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image">
              <img
                src="https://cdn-imgix.headout.com/category/26/image/d405cabb-965f-4c15-8828-4276755636a2-NYCFoodandDrinks.jpg?auto=compress&fm=pjpg&w=480&h=480&crop=faces&fit=min"
                alt="Image"
              />
            </figure>
          </div>

          <div className="ribbon ribbon-top-left">
            <span>Featured</span>
          </div>

          <div className="ribbon ribbon-bottom-right">
            <span style={{ backgroundColor: "#ffdd57", color: "black" }}>
              Exculsive
            </span>
          </div>

          <div className="media-content">
            <div className="content">
              <div className="columns mb0">
                <div className="column">
                  <p className="title google">Kashmir Family Tour Package</p>
                  <p className="subtitle is-6 mb8 plh1">4 Days & 3 Nights</p>
                </div>

                <div className="column">
                  <span className="tag radius20 fw7">
                    <img src="https://img.icons8.com/color/17/000000/hearts.png" />
                    <span className="ellipsis pl0_5">71%</span>
                  </span>

                  <span className="rating">
                    <img src="https://img.icons8.com/color/20/000000/filled-star.png" />
                    <img src="https://img.icons8.com/color/20/000000/filled-star.png" />
                    <img src="https://img.icons8.com/color/20/000000/star-half-empty.png" />
                    <img src="https://img.icons8.com/color/20/000000/star.png" />
                    <img src="https://img.icons8.com/color/20/000000/star.png" />
                  </span>
                </div>
              </div>

              <div className="columns mb0 ">
                <div className="column pt0">
                  <span className="f12 fw4 m0 pb8 iblock">
                    <span className="mr24 pfc4">Starting from:</span>
                    <span className="tag is-danger radius20 fw7">12% off</span>
                  </span>

                  <h5 className="sfc3 m0 f24 fw9 flh28">
                    ₹ 10,000/-
                    <span className="f12 pfc3 tdl ml8">₹ 11,351/-</span>
                  </h5>

                  <p className="f12 m0 pfc4 fw7">Per Person on twin sharing</p>
                </div>
                <div className="column pl8 pt0">
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
                </div>
              </div>

              <div className="css-clzwav f12 pfc4 m0 fw4">
                <p>
                  The Kashmir tour itinerary begins with the pickup from the
                  Srinagar Airport by the agent’s representative. A private cab
                  will transfer you from the airport to a jetty around the Dal
                  Lake.
                </p>
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
};

export default EscapeList;
