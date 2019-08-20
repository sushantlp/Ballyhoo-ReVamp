import "./login.css";

const Login = props => {
  return (
    <React.Fragment>
      <div className="login-container">
        <div className={props.loginOpen ? "modal is-active" : "modal"}>
          <div className="modal-background" />
          <div className="modal-card">
            <header className="modal-card-head">
              <h4 className="modal-card-title fw2">BALLYHOO</h4>
              <button
                className="delete"
                aria-label="close"
                onClick={() => props.updateOpenState(false)}
              />
            </header>
            <section className="modal-card-body fw2">
              <div className="field">
                <div className="field-body">
                  <div className="field">
                    <p className="control is-expanded">
                      <input
                        className="input is-large"
                        type="text"
                        placeholder="Email"
                      />
                    </p>
                  </div>
                </div>
              </div>
              {/* <hr className="spacer is-1" /> */}
              <div className="field">
                <div className="field-body">
                  <div className="field">
                    <p className="control is-expanded">
                      <input
                        className="input is-large"
                        type="password"
                        placeholder="Password"
                      />
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <footer className="modal-card-foot">
              <button className="button is-danger is-active button-previous ff">
                SUBMIT
              </button>
              <label>
                {" "}
                I agree to the <a href="#">terms and conditions</a>
              </label>
            </footer>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
