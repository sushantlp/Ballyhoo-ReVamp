import "./detail-list.css";
const DetailList = props => {
  return (
    <React.Fragment>
      <div className="detail-list-container">
        <div className="columns">
          <div className="column">
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
                        <h4 className="ffqs list-title">Lunch Buffet</h4>
                        <h4 className="mb8 plh1 list-subtitle">
                          Mon-Sun to 12:00 PM to 03:30 PM
                        </h4>
                      </div>
                      {/* 
                      <div className="column">
                      

                        <span className="rating">
                          <img src="https://img.icons8.com/color/20/000000/filled-star.png" />
                          <img src="https://img.icons8.com/color/20/000000/filled-star.png" />
                          <img src="https://img.icons8.com/color/20/000000/star-half-empty.png" />
                          <img src="https://img.icons8.com/color/20/000000/star.png" />
                          <img src="https://img.icons8.com/color/20/000000/star.png" />
                        </span>
                      </div> */}
                    </div>

                    <div className="css-clzwav f12 pfc4 m0 fw4">
                      <p>
                        The Kashmir tour itinerary begins with the pickup from
                        the Srinagar Airport by the agent’s representative. A
                        private cab will transfer you from the airport to a
                        jetty around the Dal Lake.
                      </p>
                    </div>
                  </div>
                </div>
              </article>

              <footer className="card-footer">
                <div className="card-footer-item">
                  <span className="span-flex" />
                </div>

                <div className="card-footer-item">
                  <span className="span-flex ">
                    <span>
                      <img
                        src="https://img.icons8.com/color/48/000000/vegetarian-food-symbol.png"
                        style={{ height: "1.5em" }}
                      />
                    </span>

                    <span>
                      <img
                        src="https://img.icons8.com/color/48/000000/non-vegetarian-food-symbol.png"
                        style={{ height: "1.5em" }}
                      />
                    </span>
                  </span>
                </div>

                <div className="card-footer-item">
                  <a className="button is-medium is-danger">
                    <span>Book</span>
                  </a>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DetailList;
