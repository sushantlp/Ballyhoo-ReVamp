import "./forget.css";

const Forget = props => {
  return (
    <React.Fragment>
      <div className="forget-container">
        <div className={props.forgetOpen ? "modal is-active" : "modal"}>
          <div className="modal-background" />
          <div className="modal-card">
            <header className="modal-card-head">
              <h4 className="modal-card-title fw2 ffqs">BALLYHOO</h4>
              <button
                className="delete"
                aria-label="close"
                onClick={() => props.updateForgetState(false)}
              />
            </header>
            <section className="modal-card-body">
              <h4 className="ffqs fw2 text-align-center">
                Enter your email to reset your password.
              </h4>
              <div className="field">
                <div className="field-body">
                  <div className="field">
                    <div className="control is-expanded ffqs fw2">
                      <input
                        className="input is-large br0"
                        type="text"
                        placeholder="Email"
                        onChange={e => props.updateForgetEmail(e)}
                      />
                    </div>
                  </div>
                </div>

                {props.errorStatus ? (
                  <p class="help is-danger">{props.errorMsg}</p>
                ) : null}
              </div>
            </section>
            <footer className="modal-card-foot">
              {props.isLoading ? (
                <button
                  className="button is-danger is-active submit-button is-loading"
                  disabled
                  style={{ backgroundColor: "#fdb6c4" }}
                >
                  SUBMIT
                </button>
              ) : props.forgetButton ? (
                <button
                  className="button is-danger is-active submit-button"
                  onClick={() => props.onClickForgetButton()}
                >
                  SUBMIT
                </button>
              ) : (
                <button
                  className="button is-danger is-active submit-button"
                  disabled
                  style={{ backgroundColor: "#fdb6c4" }}
                >
                  SUBMIT
                </button>
              )}
            </footer>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Forget;
