import "./escape-query.css";

export default class EscapeQuery extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="escape-query-container">
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
                          onChange={e => props.updateLoginEmail(e)}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="field">
                  <div className="field-body">
                    <div className="field">
                      <div className="control is-expanded has-icons-right">
                        <input
                          className="input is-large br0"
                          type={props.loginPassDisplay ? "email" : "password"}
                          placeholder="Password"
                          onChange={e => props.updateLoginPassword(e)}
                        />
                        <span
                          className="pointer icon is-small is-right"
                          onClick={() => props.updateLoginPassDisplay()}
                        >
                          <img src="https://img.icons8.com/wired/20/000000/show-password.png" />
                        </span>
                      </div>
                    </div>
                  </div>

                  {props.errorStatus ? (
                    <p class="help is-danger">{props.errorMsg}</p>
                  ) : null}
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
                {props.isLoading ? (
                  <button
                    className="button is-danger is-active login-button is-loading"
                    disabled
                    style={{ backgroundColor: "#fdb6c4" }}
                  >
                    LOGIN
                  </button>
                ) : props.loginButton ? (
                  <button
                    className="button is-danger is-active login-button"
                    onClick={() => props.onClickLoginButton()}
                  >
                    LOGIN
                  </button>
                ) : (
                  <button
                    style={{ backgroundColor: "#fdb6c4" }}
                    className="button is-danger is-active login-button"
                    disabled
                  >
                    LOGIN
                  </button>
                )}

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
  }
}
