import "./verify-account.css";

export default class VerifyAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitIsLoading: false,
      otp: false,
      otpButton: false,
      otpFirstPosition: "",
      otpSecondPosition: "",
      otpThirdPosition: "",
      otpFourthPosition: "",

      verifyIsLoading: false,
      errorStatus: false,
      errorMsg: ""
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.getOtp !== nextProps.getOtp) {
      if (nextProps.getOtp.status === "SUCCESS") {
        this.setState({
          verifyIsLoading: false
        });

        this.updateOtp(true);
      } else {
        this.setState({
          verifyIsLoading: false,
          errorStatus: true,
          errorMsg: nextProps.getOtp.msg
        });
      }
    } else if (this.props.postOtp !== nextProps.postOtp) {
      if (nextProps.postOtp.status === "SUCCESS") {
        this.props.getProfile(this.props.customerId);
      } else {
        this.setState({
          submitIsLoading: false,
          errorStatus: true,
          errorMsg: nextProps.postOtp.msg
        });
      }
    } else if (this.props.profileData !== nextProps.profileData) {
      if (nextProps.profileData.status === "SUCCESS") {
        this.setState({
          submitIsLoading: false
        });

        const customerData = {
          customer_id: nextProps.profileData.profile.c_id,
          first_name: nextProps.profileData.profile.fname,
          last_name: nextProps.profileData.profile.lname,
          email: nextProps.profileData.profile.email,
          mobile: nextProps.profileData.profile.mobile,
          gender: nextProps.profileData.profile.sex,
          birthday: nextProps.profileData.profile.dob,
          mobile_active: nextProps.profileData.profile.mobile_active,
          email_active: nextProps.profileData.profile.email_active,
          email_active: nextProps.profileData.profile.email_active,
          loyality: nextProps.profileData.profile.loyalty_points
        };

        sessionStorage.setItem("CUSTOMER_DATA", JSON.stringify(customerData));
        this.props.updateCustomerData(customerData);

        this.props.updateVerifyAccountState(false);
        this.props.successToast("Successful");
      } else {
        this.setState({
          submitIsLoading: false,
          errorStatus: true,
          errorMsg: nextProps.profileData.msg
        });
      }
    }
  }

  onKeyPressOtp = e => {
    if (!/[0-9]/.test(e.key) || e.target.value.length !== 0) e.preventDefault();
  };

  onChangeOtp = (e, position) => {
    if (position === 1) {
      if (e.target.value === "" && this.state.otpButton)
        this.updateOtpButton(false);

      this.setState({
        otpFirstPosition: e.target.value.toString()
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
        otpSecondPosition: e.target.value.toString()
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
        otpThirdPosition: e.target.value.toString()
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
        otpFourthPosition: e.target.value.toString()
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

  onClickVerifyButton = () => {
    this.setState({
      verifyIsLoading: true
    });
    this.props.getOtpAction(this.props.customerId, 2);
  };

  onClickSubmitButton = () => {
    this.setState({
      submitIsLoading: true
    });

    const otp =
      this.state.otpFirstPosition +
      this.state.otpSecondPosition +
      this.state.otpThirdPosition +
      this.state.otpFourthPosition;
    this.props.postOtpAction(this.props.customerId, otp, 2);
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
                    <h4 className="ffqs fw2 text-align-center fs1_3em">
                      Please enter otp.
                    </h4>

                    <div className="columns">
                      <div className="column">
                        <div className="field">
                          <div className="control">
                            <input
                              className="input is-large"
                              type="text"
                              placeholder="0"
                              value={this.state.otpFirstPosition}
                              onKeyPress={this.onKeyPressOtp}
                              onChange={event => this.onChangeOtp(event, 1)}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="column is-3">
                        <div className="field">
                          <div className="control">
                            <input
                              className="input is-large"
                              type="text"
                              placeholder="0"
                              value={this.state.otpSecondPosition}
                              onKeyPress={this.onKeyPressOtp}
                              onChange={event => this.onChangeOtp(event, 2)}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="column is-3">
                        <div className="field">
                          <div className="control">
                            <input
                              className="input is-large"
                              type="text"
                              placeholder="0"
                              value={this.state.otpThirdPosition}
                              onKeyPress={this.onKeyPressOtp}
                              onChange={event => this.onChangeOtp(event, 3)}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="column is-3">
                        <div className="field">
                          <div className="control">
                            <input
                              className="input is-large"
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
                    {this.state.errorStatus ? (
                      <p class="help is-danger">{this.state.errorMsg}</p>
                    ) : null}
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <h4 className="ffqs fw2 text-align-center fs1_3em">
                      Do you want to activate your Email ?
                    </h4>

                    <div className="field">
                      <div className="field-body">
                        <div className="field">
                          <div className="control is-expanded ffqs fw2">
                            <input
                              className="input is-large br0 text-align-center"
                              type="text"
                              placeholder="Email"
                              value={this.props.email}
                              disabled
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {this.state.errorStatus ? (
                      <p class="help is-danger">{this.state.errorMsg}</p>
                    ) : null}
                  </React.Fragment>
                )}
              </section>
              <footer className="modal-card-foot">
                {this.state.otp ? (
                  this.state.otpButton ? (
                    this.state.submitIsLoading ? (
                      <button className="button is-danger is-active verify-account-button is-loading">
                        Submit
                      </button>
                    ) : (
                      <button
                        className="button is-danger is-active verify-account-button"
                        onClick={() => this.onClickSubmitButton()}
                      >
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
                ) : this.state.verifyIsLoading ? (
                  <button className="button is-danger is-active verify-account-button is-loading">
                    Verify
                  </button>
                ) : (
                  <button
                    className="button is-danger is-active verify-account-button"
                    onClick={() => this.onClickVerifyButton()}
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
