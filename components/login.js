import "./login.css";

const Login = props => {
  return (
    <React.Fragment>
      <div className="login-container">
        <div className={props.loginOpen ? "modal is-active" : "modal"}>
          <div className="modal-background" />
          <div className="modal-card">
            <header className="modal-card-head">
              <h4 className="modal-card-title fw2 ffqs">BALLYHOO</h4>
              <button
                className="delete"
                aria-label="close"
                onClick={() => props.updateLoginState(false)}
              />
            </header>
            <section className="modal-card-body">
              <div className="field">
                <div className="field-body">
                  <div className="field">
                    <div className="control is-expanded ffqs fw2">
                      <input
                        className="input is-large br0"
                        type="text"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* <hr className="spacer is-1" /> */}

              <div className="field">
                <div className="field-body">
                  <div className="field">
                    <div className="control is-expanded has-icons-right">
                      <input
                        className="input is-large br0"
                        type="email"
                        placeholder="Password"
                      />
                      <span className="pointer icon is-small is-right">
                        <img src="https://img.icons8.com/wired/20/000000/show-password.png" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ textAlign: "right" }}>
                <label>
                  {" "}
                  <strong
                    className="pointer ffqs is-success"
                    onClick={() => props.moveToForget()}
                  >
                    Forget Password ?
                  </strong>
                </label>
              </div>
            </section>
            <footer className="modal-card-foot">
              <button className="button is-danger is-active login-button">
                LOGIN
              </button>
              <label>
                {" "}
                New to Ballyhoo ?{" "}
                <strong
                  className="pointer ffqs is-success"
                  onClick={() => props.moveToSignup()}
                >
                  Create an account
                </strong>
              </label>
            </footer>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
