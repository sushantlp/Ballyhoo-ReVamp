import ReadMoreAndLess from "react-read-more-less";
import EmptyMessage from "./empty-message";
import "./food-list.css";

const FoodList = props => {
  if (props.buffet.length === 0)
    return (
      <EmptyMessage
        img={"https://img.icons8.com/bubbles/64/000000/restaurant.png"}
        description={"No Buffets Available"}
        title={"Buffet"}
      />
    );
  return (
    <div className="food-list-container">
      <div className="columns">
        <div className="column">
          {props.buffet.map((value, key) => {
            let price = 0;
            let cutPrice = 0;
            let bookButton = false;
            if (parseInt(value.discount, 10) === 0) price = value.price;
            else {
              price =
                (parseFloat(value.price) * parseFloat(value.discount)) / 100;
              price = Math.round(parseFloat(value.price) - price);
              cutPrice = parseFloat(value.price);
            }

            if (parseInt(props.expiry, 10) === 1) {
              bookButton = true;
            } else {
              if (parseInt(value.purchase_status, 10) === 0) bookButton = true;
            }

            return (
              <div className="box" key={key}>
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
                          <h4 className="ffqs list-title letter-spacing-1px">
                            {value.title}
                          </h4>
                          <h4 className="mb8 plh1 list-subtitle letter-spacing-1px">
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
                                {" "}
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
                        className="f14 ffqs plh1 letter-spacing-1px"
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
                  <div className="card-footer-item letter-spacing-1px">
                    <span className="span-flex">
                      <h5
                        className="m0 f24 fw9 flh28"
                        style={{ color: "#635f5f" }}
                      >
                        {cutPrice === 0 ? null : (
                          <span className="f18 pfc3 tdl">₹ {cutPrice}</span>
                        )}
                        <span className="ml8"> ₹ {price}</span>

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
                        onClick={() => props.onFnbBuffetClick(value, price)}
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

export default FoodList;
