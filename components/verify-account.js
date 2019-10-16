import "./verify-account.css";

export default class VerifyAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      otp: false,
      otpButton: false,
      otpFirstPosition: "",
      otpSecondPosition: "",
      otpThirdPosition: "",
      otpFourthPosition: ""
    };
  }

  onKeyPressOtp = e => {
    if (!/[0-9]/.test(e.key) || e.target.value.length !== 0) e.preventDefault();
  };

  onChangeOtp = (e, position) => {
    if (position === 1) {
      if (e.target.value === "" && this.state.otpButton)
        this.updateOtpButton(false);

      this.setState({
        otpFirstPosition: e.target.value
      });

      if (
        e.target.value !== "" &&
        this.state.otpSecondPosition !== "" &&
        this.state.otpThirdPosition !== "" &&
        this.state.otpFourthPosition !== ""
      )
        this.updateOtpButton(true);
    } else if (position === 2) {
      if (e.target.value === "" && this.state.otpButton)
        this.updateOtpButton(false);

      this.setState({
        otpSecondPosition: e.target.value
      });

      if (
        this.state.otpFirstPosition !== "" &&
        e.target.value !== "" &&
        this.state.otpThirdPosition !== "" &&
        this.state.otpFourthPosition !== ""
      )
        this.updateOtpButton(true);
    } else if (position === 3) {
      if (e.target.value === "" && this.state.otpButton)
        this.updateOtpButton(false);

      this.setState({
        otpThirdPosition: e.target.value
      });

      if (
        this.state.otpFirstPosition !== "" &&
        this.state.otpSecondPosition !== "" &&
        e.target.value !== "" &&
        this.state.otpFourthPosition !== ""
      )
        this.updateOtpButton(true);
    } else if (position === 4) {
      if (e.target.value === "" && this.state.otpButton)
        this.updateOtpButton(false);

      this.setState({
        otpFourthPosition: e.target.value
      });

      if (
        this.state.otpFirstPosition !== "" &&
        this.state.otpSecondPosition !== "" &&
        this.state.otpThirdPosition !== "" &&
        e.target.value !== ""
      )
        this.updateOtpButton(true);
    }
  };

  updateOtpButton = bool => {
    this.setState({
      otpButton: bool
    });
  };

  updateOtp = bool => {
    this.setState({
      otp: bool
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="verify-account-container">
          <div className={this.props.verifyOpen ? "modal is-active" : "modal"}>
            <div className="modal-background" />
            <div className="modal-card">
              <header className="modal-card-head">
                <h4 className="modal-card-title fw2 ffqs">BALLYHOO</h4>
                <button
                  className="delete"
                  aria-label="close"
                  onClick={() => this.props.updateVerifyAccountState(false)}
                />
              </header>
              <section className="modal-card-body">
                {this.state.otp ? (
                  <React.Fragment>
                    <div class="columns">
                      <div class="column">
                        <div class="field">
                          <div class="control">
                            <input
                              class="input is-large"
                              type="text"
                              placeholder="0"
                              value={this.state.otpFirstPosition}
                              onKeyPress={this.onKeyPressOtp}
                              onChange={event => this.onChangeOtp(event, 1)}
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
                              value={this.state.otpSecondPosition}
                              onKeyPress={this.onKeyPressOtp}
                              onChange={event => this.onChangeOtp(event, 2)}
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
                              value={this.state.otpThirdPosition}
                              onKeyPress={this.onKeyPressOtp}
                              onChange={event => this.onChangeOtp(event, 3)}
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
                              value={this.state.otpFourthPosition}
                              onKeyPress={this.onKeyPressOtp}
                              onChange={event => this.onChangeOtp(event, 4)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* {this.state.errorStatus ? (
                            <p class="help is-danger">{this.state.errorMsg}</p>
                          ) : null} */}
                  </React.Fragment>
                ) : (
                  <div className="field">
                    <div className="field-body">
                      <div className="field">
                        <div className="control is-expanded ffqs fw2">
                          <input
                            className="input is-large br0"
                            type="text"
                            placeholder="Email"
                            value={this.props.email}
                            disabled
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </section>
              <footer className="modal-card-foot">
                {this.state.otp ? (
                  this.state.otpButton ? (
                    this.state.isLoading ? (
                      <button className="button is-danger is-active verify-account-button is-loading">
                        Submit
                      </button>
                    ) : (
                      <button className="button is-danger is-active verify-account-button" >
                        Submit
                      </button>
                    )
                  ) : (
                    <button
                      style={{ backgroundColor: "#fdb6c4" }}
                      className="button is-danger is-active verify-account-button"
                      disabled
                    >
                      Submit
                    </button>
                  )
                ) : (
                  <button
                    className="button is-danger is-active verify-account-button"
                    onClick={() => this.updateOtp(true)}
                  >
                    Verify
                  </button>
                )}
              </footer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
