import "./order-model.css";

const OrderModel = props => {
  return (
    <React.Fragment>
      <div className="order-model-container">
        <div className={props.orderOpen ? "modal is-active" : "modal"}>
          <div className="modal-background" />
          <div className="modal-card">
            <header className="modal-card-head">
              <h4 className="modal-card-title fw2 ffqs">Items Bought : </h4>
              <button
                className="delete"
                aria-label="close"
                onClick={() =>
                  props.updateOrderModel(false, [], props.currency)
                }
              />
            </header>
            <section className="modal-card-body">
              {props.items.map((item, key) => {
                let price = 0;
                let cutPrice = 0;
                if (parseInt(item.discount, 10) === 0) price = item.price;
                else {
                  price = (item.price * item.discount) / 100;
                  price = item.price - price;
                  cutPrice = item.price;
                }

                return (
                  <div className="box" key={key}>
                    <article className="media">
                      <div className="media-content">
                        <div className="content">
                          <div className="columns m0">
                            <div className="column is-8">
                              {item.package_caption === null ? (
                                <h4 className="fs1-5 fw2">
                                  {" "}
                                  {item.price_caption}
                                </h4>
                              ) : (
                                <React.Fragment>
                                  {" "}
                                  <h4 className="fs1-5 fw2">
                                    {" "}
                                    {item.package_caption}
                                  </h4>
                                  <h4
                                    className="fs1-5 fw2 ffqs"
                                    style={{ marginTop: "-0.3em" }}
                                  >
                                    {" "}
                                    {item.price_caption}
                                  </h4>
                                </React.Fragment>
                              )}
                            </div>

                            <div className="column is-4">
                              <span
                                className="tag is-warning is-medium"
                                style={{ float: "right" }}
                              >
                                <span>Quantity : {item.quantity}</span>
                              </span>
                            </div>
                          </div>

                          <div className="columns m0">
                            <div className="column is-4">
                              {/* <span className="tag is-warning is-medium">
                                Price : {item.quantity}
                              </span> */}

                              <h5 className="fw2 fs1-2">
                                {props.currency} {price}/-
                                {cutPrice === 0 ? null : (
                                  <span>
                                    <span
                                      className="fw2 fs0-7 tdl ml8"
                                      style={{ color: "#363636" }}
                                    >
                                      {props.currency} {cutPrice}/-
                                    </span>
                                    <span className="tag is-rounded is-warning ml8">
                                      {list.price_discount}% off
                                    </span>{" "}
                                  </span>
                                )}
                              </h5>
                            </div>

                            {item.package_start_date === null ? null : (
                              <div className="column is-4">
                                <h4 className="fs1-2 fw2 ffqs">
                                  <span className="tag is-warning is-medium">
                                    Start Date : {item.package_start_date}
                                  </span>
                                </h4>
                              </div>
                            )}

                            {item.package_end_date === null ? null : (
                              <div className="column is-4">
                                <h4 className="fs1-2 fw2 ffqs">
                                  <span className="tag is-warning is-medium">
                                    End Date : {item.package_end_date}
                                  </span>
                                </h4>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                );
              })}
            </section>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default OrderModel;
