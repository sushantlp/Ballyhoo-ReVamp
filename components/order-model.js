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
                onClick={() => props.updateOrderModel(false)}
              />
            </header>
            <section className="modal-card-body">
              <div className="box">
                <article className="media">
                  <div className="media-content">
                    <div className="content">
                      <div className="columns m0">
                        <div className="column is-12">
                          <h4 className="fs1-5 fw2 ffqs">
                            {" "}
                            Wake and Bake by Rohan Joshi That Comedy Club
                          </h4>
                        </div>

                        {/* <div className="column is-2">
                          <h4 className="fs1 fw2 ffqs">Aug 31 2019</h4>
                        </div> */}
                      </div>

                      <div className="columns m0">
                        <div className="column is-4">
                          <h4 className="fs1-2 fw2 ffqs ">
                            <span className="grey">
                              Price : <span> &#8377;</span> 5
                            </span>
                          </h4>
                        </div>

                        <div className="column is-4">
                          <h4 className="fs1-2 fw2 ffqs">
                            {" "}
                            <span className="grey">Aug 31 2019</span>
                          </h4>
                        </div>

                        <div className="column is-4">
                          <h4 className="fs1-2 fw2 ffqs float-right">
                            <span className="grey">Quantity : 2</span>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>

              <div className="box">
                <article className="media">
                  <div className="media-content">
                    <div className="content">
                      <div className="columns m0">
                        <div className="column is-12">
                          <h4 className="fs1-5 fw2 ffqs">
                            {" "}
                            Wake and Bake by Rohan Joshi That Comedy Club
                          </h4>
                        </div>

                        {/* <div className="column is-2">
                          <h4 className="fs1 fw2 ffqs">Aug 31 2019</h4>
                        </div> */}
                      </div>

                      <div className="columns m0">
                        <div className="column is-4">
                          <h4 className="fs1-2 fw2 ffqs ">
                            <span className="grey">
                              Price : <span> &#8377;</span> 5
                            </span>
                          </h4>
                        </div>

                        <div className="column is-4">
                          <h4 className="fs1-2 fw2 ffqs">
                            {" "}
                            <span className="grey">Aug 31 2019</span>
                          </h4>
                        </div>

                        <div className="column is-4">
                          <h4 className="fs1-2 fw2 ffqs float-right">
                            <span className="grey">Quantity : 2</span>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </section>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default OrderModel;
