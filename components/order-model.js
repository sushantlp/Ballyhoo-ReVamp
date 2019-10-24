import "./order-model.css";

const OrderModel = props => {
  console.log(props);
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
                return (
                  <div className="box" key={key}>
                    <article className="media">
                      <div className="media-content">
                        <div className="content">
                          <div className="columns m0">
                            <div className="column is-8">
                              {item.package_caption === null ? (
                                <h4 className="fs1-5 fw2 ffqs">
                                  {" "}
                                  {item.price_caption}
                                </h4>
                              ) : (
                                <React.Fragment>
                                  {" "}
                                  <h4 className="fs1-5 fw2 ffqs">
                                    {" "}
                                    {item.package_caption}
                                  </h4>
                                  <h4 className="fs1-5 fw2 ffqs">
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
                            <div className="column is-3">
                              <span className="tag is-warning is-medium">
                                Price : {item.quantity}
                              </span>
                            </div>

                            {item.package_start_date === null ? null : (
                              <div className="column is-3">
                                <h4 className="fs1-2 fw2 ffqs">
                                  <span className="tag is-warning is-medium">
                                    Start Date : {item.package_start_date}
                                  </span>
                                </h4>
                              </div>
                            )}

                            {item.package_end_date === null ? null : (
                              <div className="column is-3">
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
