import { COUNTRY_CODE } from "../constants";
import "bulma-checkradio";
import "./signup.css";

const Signup = props => {
  return (
    <React.Fragment>
      <div className="signup-container">
        <div className={props.signupOpen ? "modal is-active" : "modal"}>
          <div className="modal-background" />
          <div className="modal-card">
            <header className="modal-card-head">
              <h4 className="modal-card-title fw2 ffqs">BALLYHOO</h4>
              <button
                className="delete"
                aria-label="close"
                onClick={() => props.updateSignupState(false)}
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
                        onChange={e => props.updateSignupEmail(e)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* <hr className="spacer is-1" /> */}

              <div className="field">
                <div className="field-body">
                  <div className="field">
                    <div className="control ffqs fw2">
                      <div className="columns is-gapless">
                        <div className="column is-3">
                          <div className="select is-large br0">
                            <select
                              className="br0"
                              defaultValue="+91"
                              onChange={e => props.updateSignupCode(e)}
                            >
                              {COUNTRY_CODE.map((value, key) => {
                                return value.dial_code === "+91" ? (
                                  <option key={key} selected>
                                    {value.dial_code}
                                  </option>
                                ) : (
                                  <option key={key}>{value.dial_code}</option>
                                );
                              })}
                            </select>
                          </div>
                        </div>

                        <div className="column">
                          <input
                            className="input is-large br0"
                            type="number"
                            placeholder="Mobile"
                            onChange={e => props.updateSignupMobile(e)}
                          />
                        </div>
                      </div>
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
                        type={props.signupPassDisplay ? "email" : "password"}
                        placeholder="Password"
                        onChange={e => props.updateSignupPassword(e)}
                      />
                      <span
                        className="pointer icon is-small is-right"
                        onClick={() => props.updateSignupPassDisplay()}
                      >
                        <img src="https://img.icons8.com/wired/20/000000/show-password.png" />
                      </span>
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
                        type={
                          props.signupConfirmPassDisplay ? "email" : "password"
                        }
                        placeholder="Confirm Password"
                        onChange={e => props.updateSignupConfirmPassword(e)}
                      />
                      <span
                        className="pointer icon is-small is-right"
                        onClick={() => props.updateSignupConfirmPassDisplay()}
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

              <div className="field">
                <div className="control">
                  <label className="checkbox">
                    <input
                      className="is-checkradio has-background-color is-danger"
                      id="exampleCheckboxDefault1"
                      type="checkbox"
                      name="alcohol"
                      checked="checked"
                      style={{ paddingLeft: "1em" }}
                    />
                    <label
                      htmlFor="exampleCheckboxDefault1"
                      className="ffqs fw2"
                    >
                      I agree to the{" "}
                      <a href="/term" target="_blank">
                        Terms and Privacy
                      </a>
                    </label>
                  </label>
                </div>
              </div>
            </section>
            <footer className="modal-card-foot">
              {props.signupButton ? (
                <button className="button is-danger is-active signup-button">
                  SIGNUP
                </button>
              ) : (
                <button
                  style={{ backgroundColor: "#fdb6c4" }}
                  className="button is-danger is-active signup-button"
                  disabled
                >
                  SIGNUP
                </button>
              )}
            </footer>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Signup;
