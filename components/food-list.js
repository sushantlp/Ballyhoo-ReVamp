import "./food-list.css";
const FoodList = props => {
  return (
    <React.Fragment>
      <div className="food-list-container">
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

                <div className="media-content">
                  <div className="content">
                    <div className="columns mb0">
                      <div className="column is-10">
                        <h4 className="ffqs list-title">Lunch Buffet</h4>
                        <h4 className="mb8 plh1 list-subtitle">
                          Mon-Sun to 12:00 PM to 03:30 PM
                        </h4>
                      </div>

                      <div className="column is-2">
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
                    </div>

                    <div className="f14 ffqs">
                      <p style={{ whiteSpace: "pre-line" }}>
                        About Buffet:- Enjoy Authentic Cuisine with Unlimited
                        spread for Lunch Buffet @Cubbon Pavilion - ITC Gardenia.
                        Inclusions: Unlimited Spread with Table Service. T&C:
                        Validity: Monday to Saturday, 12 noon to 3 pm. Taxes may
                        apply. Per person basis. Can not be shared. Rights of
                        reservation reserved. Management reserved the rights to
                        change the prices without any notice.
                      </p>
                    </div>
                  </div>
                </div>
              </article>

              <footer className="card-footer">
                <div className="card-footer-item">
                  <span className="span-flex">
                    <h5 className="sfc3 m0 f24 fw9 flh28 priceVal at_newprice">
                      ₹ 10,000/-
                      <span className="f12 pfc3 tdl ml8">₹ 11,351/-</span>
                    </h5>
                  </span>
                </div>

                <div className="card-footer-item">
                  <a className="button is-medium is-danger">
                    <span>Book</span>
                  </a>
                </div>
              </footer>
            </div>

            <div className="box">
              <article className="media">
                <div className="media-left">
                  <figure className="image">
                    <img
                      src="https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_480,w_480/v1457670910/ballyhoo/WALK-IN/19.jpg"
                      alt="Image"
                    />
                  </figure>
                </div>

                <div className="media-content">
                  <div className="content">
                    <div className="columns mb0">
                      <div className="column is-10">
                        <h4 className="ffqs list-title">Whiskey & Wings</h4>
                        <h4 className="mb8 plh1 list-subtitle">
                          Mon-Sun to 12:00 PM to 03:30 PM
                        </h4>
                      </div>

                      <div className="column is-2">
                        <span className="span-flex ">
                          {/* <span>
                            <img
                              src="https://img.icons8.com/color/48/000000/vegetarian-food-symbol.png"
                              style={{ height: "1.5em" }}
                            />
                          </span> */}

                          <span>
                            <img
                              src="https://img.icons8.com/color/48/000000/non-vegetarian-food-symbol.png"
                              style={{ height: "1.5em" }}
                            />
                          </span>
                        </span>
                      </div>
                    </div>

                    <div className="f14 ffqs">
                      <p style={{ whiteSpace: "pre-line" }}>
                        About Buffet:- Enjoy Authentic Cuisine with Unlimited
                        spread for Lunch Buffet @Cubbon Pavilion - ITC Gardenia.
                        Inclusions: Unlimited Spread with Table Service. T&C:
                        Validity: Monday to Saturday, 12 noon to 3 pm. Taxes may
                        apply. Per person basis. Can not be shared. Rights of
                        reservation reserved. Management reserved the rights to
                        change the prices without any notice.
                      </p>
                    </div>
                  </div>
                </div>
              </article>

              <footer className="card-footer">
                <div className="card-footer-item">
                  <span className="span-flex">
                    <h5 className="sfc3 m0 f24 fw9 flh28 priceVal at_newprice">
                      ₹ 99/-
                      {/* <span className="f12 pfc3 tdl ml8">₹ 11,351/-</span> */}
                    </h5>
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

export default FoodList;
