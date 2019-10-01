import ReadMoreAndLess from "react-read-more-less";
import "./food-list.css";
const FoodList = props => {
  return props.buffet.map((value, key) => {
    let price = 0;
    let cutPrice = 0;
    if (parseInt(value.discount, 10) === 0) price = value.price;
    else {
      price = (parseInt(value.price, 10) * parseInt(value.discount, 10)) / 100;
      price = parseInt(value.price, 10) - price;
      cutPrice = value.price;
    }

    return (
      <React.Fragment key={key}>
        <div className="food-list-container">
          <div className="columns">
            <div className="column">
              <div className="box">
                <article className="media">
                  <div className="media-left">
                    <figure className="image">
                      <img src={value.img} alt="Image" />
                    </figure>
                  </div>

                  <div className="media-content">
                    <div className="content">
                      <div className="columns mb0">
                        <div className="column is-10">
                          <h4 className="ffqs list-title">{value.title}</h4>
                          <h4 className="mb8 plh1 list-subtitle">
                            {value.days} {value.times.start_time}
                            {"  "} To {"  "}
                            {value.times.end_time}
                          </h4>
                        </div>

                        <div className="column is-2">
                          <span className="span-flex ">
                            {parseInt(value.food_preference, 10) === 1 ? (
                              <span>
                                <img
                                  src="https://img.icons8.com/color/48/000000/vegetarian-food-symbol.png"
                                  style={{ height: "1.5em" }}
                                />
                              </span>
                            ) : parseInt(value.food_preference, 10) === 2 ? (
                              <span>
                                <img
                                  src="https://img.icons8.com/color/48/000000/non-vegetarian-food-symbol.png"
                                  style={{ height: "1.5em" }}
                                />
                              </span>
                            ) : (
                              <span>
                                {" "}
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
                            )}
                          </span>
                        </div>
                      </div>

                      <div
                        className="f14 ffqs plh1"
                        style={{ whiteSpace: "pre-line" }}
                      >
                        <ReadMoreAndLess
                          ref={props.ReadMore}
                          className="read-more-content"
                          charLimit={100}
                          readMoreText="See more"
                          readLessText="See less"
                        >
                          {value.description}
                        </ReadMoreAndLess>
                      </div>
                    </div>
                  </div>
                </article>

                <footer className="card-footer">
                  <div className="card-footer-item">
                    <span className="span-flex">
                      <h5
                        className="m0 f24 fw9 flh28"
                        style={{ color: "#635f5f" }}
                      >
                        ₹ {price}/-
                        {cutPrice === 0 ? null : (
                          <span className="f12 pfc3 tdl ml8">
                            ₹ {cutPrice}/-
                          </span>
                        )}
                      </h5>
                    </span>
                  </div>

                  <div className="card-footer-item">
                    <a className="button is-medium is-danger" disabled>
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
  });
};

export default FoodList;
