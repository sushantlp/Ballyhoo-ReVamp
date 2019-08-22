import "./order-model.css";

const OrderModel = props => {
  return (
    <React.Fragment>
      <div className="order-model-container">
        <div className={props.orderOpen ? "modal is-active" : "modal"}>
          <div className="modal-background" />
          <div className="modal-card">
            <header className="modal-card-head">
              <h4 className="modal-card-title fw2 ffqs">BALLYHOO</h4>
              <button
                className="delete"
                aria-label="close"
                onClick={() => props.updateOrderModel(false)}
              />
            </header>
            <section className="modal-card-body">
              <div />
            </section>
            <footer className="modal-card-foot">
              <button className="button is-danger is-active login-button">
                LOGIN
              </button>
              <label> New to Ballyhoo ? </label>
            </footer>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default OrderModel;
