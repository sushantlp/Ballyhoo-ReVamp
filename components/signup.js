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
                        <div className="column is-2">
                          <div className="select is-large br0">
                            <select className="br0">
                              <option>+91</option>
                              <option>+43</option>
                            </select>
                          </div>
                        </div>

                        <div className="column">
                          <input
                            className="input is-large br0"
                            type="number"
                            placeholder="Mobile"
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

              <div className="field">
                <div className="field-body">
                  <div className="field">
                    <div className="control is-expanded has-icons-right">
                      <input
                        className="input is-large br0"
                        type="email"
                        placeholder="Confirm Password"
                      />
                      <span className="pointer icon is-small is-right">
                        <img src="https://img.icons8.com/wired/20/000000/show-password.png" />
                      </span>
                    </div>
                  </div>
                </div>
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
                      I agree to the <a href="#">Terms and Privacy</a>
                    </label>
                  </label>
                </div>
              </div>
            </section>
            <footer className="modal-card-foot">
              <button className="button is-danger is-active signup-button">
                SIGNUP
              </button>
            </footer>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Signup;
