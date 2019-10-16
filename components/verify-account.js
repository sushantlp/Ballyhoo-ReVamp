import "./verify-account.css";
const VerifyAccount = props => {
  return (
    <React.Fragment>
      <div className="verify-account-container">
        <div className={props.verifyOpen ? "modal is-active" : "modal"}>
          <div className="modal-background" />
          <div className="modal-card">
            <header className="modal-card-head">
              <h4 className="modal-card-title fw2 ffqs">BALLYHOO</h4>
              <button
                className="delete"
                aria-label="close"
                onClick={() => props.updateVerifyAccountState(false)}
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
                        value={props.email}
                        disabled
                      />
                    </div>
                  </div>
                </div>
              </div>

              {props.otp ? (
                <React.Fragment>
                  <div class="columns">
                    <div class="column">
                      <div class="field">
                        <div class="control">
                          <input
                            class="input is-large"
                            type="text"
                            placeholder="0"
                            onKeyPress={props.onKeyPressOtp}
                            onChange={event => props.onChangeOtp(event, 1)}
                          />
                        </div>
                      </div>
                    </div>

                    <div class="column is-3">
                      <div class="field">
                        <div class="control">
                          <input
                            class="input is-large"
                            type="text"
                            placeholder="0"
                            onKeyPress={props.onKeyPressOtp}
                            onChange={event => props.onChangeOtp(event, 2)}
                          />
                        </div>
                      </div>
                    </div>

                    <div class="column is-3">
                      <div class="field">
                        <div class="control">
                          <input
                            class="input is-large"
                            type="text"
                            placeholder="0"
                            onKeyPress={props.onKeyPressOtp}
                            onChange={event => props.onChangeOtp(event, 3)}
                          />
                        </div>
                      </div>
                    </div>

                    <div class="column is-3">
                      <div class="field">
                        <div class="control">
                          <input
                            class="input is-large"
                            type="text"
                            placeholder="0"
                            onKeyPress={props.onKeyPressOtp}
                            onChange={event => props.onChangeOtp(event, 4)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* {this.state.errorStatus ? (
                    <p class="help is-danger">{this.state.errorMsg}</p>
                  ) : null} */}
                </React.Fragment>
              ) : null}
            </section>
            <footer className="modal-card-foot">
              {props.otp ? (
                props.isLoading ? (
                  <button className="button is-danger is-active verify-account-button is-loading">
                    Submit
                  </button>
                ) : (
                  <button className="button is-danger is-active verify-account-button">
                    Submit
                  </button>
                )
              ) : props.isLoading ? (
                <button className="button is-danger is-active verify-account-button is-loading">
                  Verify
                </button>
              ) : (
                <button className="button is-danger is-active verify-account-button">
                  Verify
                </button>
              )}
            </footer>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default VerifyAccount;
