import ReadMoreAndLess from "react-read-more-less";
import "./food-list.css";
const FoodPackageDetail = props => {
  return (
    <div className="food-list-container">
      <div className="columns">
        <div className="column">
          {props.package.map((value, key) => {
            let price = 0;
            let cutPrice = 0;
            let bookButton = false;
            if (parseInt(value.discount, 10) === 0) price = value.price;
            else {
              price = (value.price * 100) / value.discount;
              price = value.price - price;
              cutPrice = value.price;
            }

            if (parseInt(props.expiry, 10) === 1) bookButton = true;
            else if (parseInt(value.purchase_status, 10) === 0)
              bookButton = true;

            return (
              <div
                key={key}
                className="box"
                style={{
                  boxShadow:
                    "0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1)"
                }}
              >
                <article className="media">
                  <div className="media-left">
                    <figure className="image">
                      <img src={value.img} alt={props.keyword} />
                    </figure>
                  </div>

                  <div className="media-content">
                    <div className="content">
                      <div className="columns mb0">
                        <div className="column is-10">
                          <h4 className="ffqs list-title">{value.title}</h4>
                          <h4 className="mb8 plh1 list-subtitle">
                            {value.days} {value.times.start_time} To{"  "}
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
                                  alt={props.keyword}
                                />
                              </span>
                            ) : parseInt(value.food_preference, 10) === 2 ? (
                              <span>
                                <img
                                  src="https://img.icons8.com/color/48/000000/non-vegetarian-food-symbol.png"
                                  style={{ height: "1.5em" }}
                                  alt={props.keyword}
                                />
                              </span>
                            ) : (
                              <span>
                                <span>
                                  <img
                                    src="https://img.icons8.com/color/48/000000/vegetarian-food-symbol.png"
                                    style={{ height: "1.5em" }}
                                    alt={props.keyword}
                                  />
                                </span>

                                <span>
                                  <img
                                    src="https://img.icons8.com/color/48/000000/non-vegetarian-food-symbol.png"
                                    style={{ height: "1.5em" }}
                                    alt={props.keyword}
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
                        &#8377; {"  "} {price}
                        {cutPrice === 0 ? null : (
                          <span className="f12 pfc3 tdl ml8">
                            &#8377; {"  "} {cutPrice}
                          </span>
                        )}
                        {parseInt(value.tax_inclusive, 10) === 1 ? (
                          <span className="f24 ml8">+ TAX</span>
                        ) : null}
                      </h5>
                    </span>
                  </div>

                  <div className="card-footer-item">
                    {bookButton ? (
                      <a className="button is-medium is-danger" disabled>
                        <span>Book</span>
                      </a>
                    ) : (
                      <a
                        className="button is-medium is-danger"
                        onClick={() => props.onFnbPackageClick(value)}
                      >
                        <span>Book</span>
                      </a>
                    )}
                  </div>
                </footer>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FoodPackageDetail;
