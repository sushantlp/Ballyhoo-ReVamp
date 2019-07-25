import "./main-list.css";
const MainList = props => {
  return (
    <div className="main-list-container">
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
          <div className="media-content">
            <div className="content">
              <div className="columns mb0">
                <div className="column">
                  <p className="title is-5">Kashmir Family Tour Package</p>
                  <p className="subtitle is-6 mb8 plh1">4 Days & 3 Nights</p>
                </div>

                <div className="column">
                  <span className="rating">
                    <img src="https://img.icons8.com/color/20/000000/filled-star.png" />
                    <img src="https://img.icons8.com/color/20/000000/filled-star.png" />
                    <img src="https://img.icons8.com/color/20/000000/filled-star.png" />
                    <img src="https://img.icons8.com/color/20/000000/filled-star.png" />
                    <img src="https://img.icons8.com/color/20/000000/filled-star.png" />
                  </span>
                </div>
              </div>
              <div className="columns mb0 ">
                <div className="column pt0">
                  <span className="f12 fw4 m0 pb8 iblock">
                    <span className="mr24 pfc4">Starting from:</span>
                    <span className="tag is-primary radius20 fw7">12% off</span>
                  </span>

                  <h5 className="sfc3 m0 f24 fw9 flh28 priceVal at_newprice">
                    ₹ 10,000/-
                    <span className="f12 pfc3 tdl ml8">₹ 11,351/-</span>
                  </h5>

                  <p class="f12 m0 pfc4 fw7">Per Person on twin sharing</p>
                </div>
                <div className="column pl8 pt0">
                  <div className="package-tag-box">
                    <ul className="package-tags at_package_tags">
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
            </div>

            <p>
              The Kashmir tour itinerary begins with the pickup from the
              Srinagar Airport by the agent’s representative. A private cab will
              transfer you from the airport to a jetty around the Dal Lake.
            </p>
          </div>
        </article>

        <footer className="card-footer">
          <div className="card-footer-item">
            <a className="button is-medium">
              <span className="icon">
                <img src="https://img.icons8.com/office/23/000000/hospital.png" />
              </span>
              <span>7898130226</span>
            </a>
          </div>

          <div className="card-footer-item">
            <a className="button is-medium">
              <span className="icon">
                <img src="https://img.icons8.com/plasticine/30/000000/visible.png" />
              </span>
              <span>View Detail</span>
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default MainList;
