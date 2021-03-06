import Link from "next/link";

import { ToastContainer, toast } from "react-toastify";

import { EMAIL } from "../constants";

import Signup from "./signup";
import Login from "./login";
import Forget from "./forget";

import "react-toastify/dist/ReactToastify.css";

import "./header.css";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      loginOpen: false,
      signupOpen: false,
      forgetOpen: false,
      profileOpen: false,

      loginEmail: "",
      loginPassword: "",
      loginButton: false,
      loginPassDisplay: false,

      signupEmail: "",
      signupMobile: "",
      signupCode: "+91",
      signupPassword: "",
      signupConfirmPassword: "",
      signupButton: false,
      signupPassDisplay: false,
      signupConfirmPassDisplay: false,

      forgetEmail: "",
      forgetButton: false,

      errorStatus: false,
      errorMsg: ""
    };
  }

  componentDidMount() {
    let loginStatus = sessionStorage.getItem("LOGIN");
    loginStatus = JSON.parse(loginStatus);

    let customerData = sessionStorage.getItem("CUSTOMER_DATA");
    customerData = JSON.parse(customerData);

    if (loginStatus) {
      const applicationStatus = {
        login: true
      };
      this.setState({
        profileOpen: true
      });
      this.props.applicationStatusAction(applicationStatus);
      this.props.updateCustomerData(customerData);
    } else {
      if (this.props.applicationStatus.applicationStatus.login) {
        sessionStorage.setItem("LOGIN", true);
        this.setState({
          profileOpen: this.props.applicationStatus.applicationStatus.login
        });

        this.props.updateCustomerData(customerData);
      }
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.login !== nextProps.login) {
      if (nextProps.login.status === "SUCCESS") {
        this.props.getProfile(nextProps.login.login.c_id);
      } else {
        this.setState({
          isLoading: false,
          errorStatus: true,
          errorMsg: nextProps.login.msg
        });
      }
    } else if (this.props.register !== nextProps.register) {
      if (nextProps.register.status === "SUCCESS") {
        const mobileCode = this.state.signupCode.slice(1);
        const mobile = `${mobileCode}${this.state.signupMobile}`;

        const customerData = {
          customer_id: this.props.customerData.customerData.customer_id,
          first_name: this.props.customerData.customerData.first_name,
          last_name: this.props.customerData.customerData.last_name,
          email: this.state.signupEmail,
          mobile: mobile,
          gender: this.props.customerData.customerData.gender,
          birthday: this.props.customerData.customerData.birthday,
          mobile_active: this.props.customerData.customerData.mobile_active,
          email_active: this.props.customerData.customerData.email_active,
          loyality: 0
        };

        this.setState({
          isLoading: false
        });

        sessionStorage.setItem("CUSTOMER_DATA", JSON.stringify(customerData));
        this.props.updateCustomerData(customerData);
        this.updateSignupState(false);

        toast.success("Successful");
      } else {
        this.setState({
          isLoading: false,
          errorStatus: true,
          errorMsg: nextProps.register.msg
        });
      }
    } else if (this.props.forget !== nextProps.forget) {
      if (nextProps.forget.status === "SUCCESS") {
        this.setState({
          isLoading: false
        });

        this.updateForgetState(false);
        toast.success("Successful");
      } else {
        this.setState({
          isLoading: false,
          errorStatus: true,
          errorMsg: nextProps.forget.msg
        });
      }
    } else if (this.props.profileData !== nextProps.profileData) {
      if (nextProps.profileData.status === "SUCCESS") {
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
        this.setState({
          profileOpen: true,
          isLoading: false
        });
        const applicationStatus = {
          login: true
        };
        sessionStorage.setItem("LOGIN", true);
        this.props.applicationStatusAction(applicationStatus);
        sessionStorage.setItem("CUSTOMER_DATA", JSON.stringify(customerData));
        this.props.updateCustomerData(customerData);
        this.updateLoginState(false);
        // toast.success("Successful");
      } else {
        this.setState({
          isLoading: false,
          errorStatus: true,
          errorMsg: nextProps.profileData.msg
        });
      }
    }
  }

  /**
   * Start Forget Function
   **/

  updateForgetEmail = e => {
    if (e.target.value === "")
      this.setState({
        forgetButton: false
      });

    this.setState({
      forgetEmail: e.target.value
    });

    if (!EMAIL.test(e.target.value)) {
      if (this.state.forgetButton)
        this.setState({
          forgetButton: false
        });
    } else {
      if (!this.state.forgetButton)
        this.setState({
          forgetButton: true
        });
    }
  };

  updateForgetState = bool => {
    this.setState({
      forgetOpen: bool
    });
  };

  onClickForgetButton = () => {
    this.setState({
      forgetButton: false,
      isLoading: true
    });

    this.props.postForget(this.state.forgetEmail);
  };

  /**
   * End Forget Function
   **/

  /**
   * Start Signup Function
   **/

  updateSignupCode = e => {
    this.setState({
      signupCode: e.target.value
    });
  };

  updateSignupPassDisplay = () => {
    this.setState({
      signupPassDisplay: !this.state.signupPassDisplay
    });
  };

  updateSignupConfirmPassDisplay = () => {
    this.setState({
      signupConfirmPassDisplay: !this.state.signupConfirmPassDisplay
    });
  };

  updateSignupEmail = e => {
    if (e.target.value === "")
      this.setState({
        signupButton: false
      });

    this.setState({
      signupEmail: e.target.value
    });

    if (!EMAIL.test(e.target.value)) {
      if (this.state.signupButton)
        this.setState({
          signupButton: false
        });
    } else {
      if (
        this.state.signupMobile !== "" &&
        this.state.signupPassword !== "" &&
        this.state.signupConfirmPassword !== "" &&
        !this.state.signupButton
      )
        this.setState({
          signupButton: true
        });
    }
  };

  updateSignupMobile = e => {
    if (e.target.value === "")
      this.setState({
        signupButton: false
      });

    this.setState({
      signupMobile: e.target.value
    });

    if (!EMAIL.test(this.state.signupEmail)) {
      if (this.state.signupButton)
        this.setState({
          signupButton: false
        });
    } else {
      if (
        e.target.value !== "" &&
        this.state.signupPassword !== "" &&
        this.state.signupConfirmPassword !== "" &&
        !this.state.signupButton
      )
        this.setState({
          signupButton: true
        });
    }
  };

  updateSignupPassword = e => {
    if (e.target.value === "")
      this.setState({
        signupButton: false
      });

    this.setState({
      signupPassword: e.target.value
    });

    if (!EMAIL.test(this.state.signupEmail)) {
      if (this.state.signupButton)
        this.setState({
          signupButton: false
        });
    } else {
      if (
        this.state.signupMobile !== "" &&
        e.target.value !== "" &&
        this.state.signupConfirmPassword !== "" &&
        !this.state.signupButton
      )
        this.setState({
          signupButton: true
        });
    }
  };

  updateSignupConfirmPassword = e => {
    if (e.target.value === "")
      this.setState({
        signupButton: false
      });

    this.setState({
      signupConfirmPassword: e.target.value
    });

    if (!EMAIL.test(this.state.signupEmail)) {
      if (this.state.signupButton)
        this.setState({
          signupButton: false
        });
    } else {
      if (
        this.state.signupPassword === e.target.value &&
        e.target.value !== "" &&
        this.state.signupMobile !== "" &&
        this.state.signupPassword !== "" &&
        !this.state.signupButton
      )
        this.setState({
          signupButton: true
        });
    }
  };

  updateSignupState = bool => {
    this.setState({
      signupOpen: bool
    });
  };

  onClickSignupButton = () => {
    this.setState({
      signupButton: false,
      isLoading: true
    });
    const mobileCode = this.state.signupCode.slice(1);
    const mobile = `${mobileCode}${this.state.signupMobile}`;

    this.props.postRegister(
      mobile,
      this.state.signupEmail,
      this.state.signupPassword,
      null,
      null,
      null,
      null
    );
  };

  /**
   * End Signup Function
   **/

  /**
   * Start Login Function
   **/

  updateLoginPassDisplay = () => {
    this.setState({
      loginPassDisplay: !this.state.loginPassDisplay
    });
  };

  updateLoginEmail = e => {
    if (e.target.value === "")
      this.setState({
        loginButton: false
      });

    this.setState({
      loginEmail: e.target.value
    });

    if (!EMAIL.test(e.target.value)) {
      if (this.state.loginButton)
        this.setState({
          loginButton: false
        });
    } else {
      if (
        e.target.value !== "" &&
        this.state.loginPassword !== "" &&
        !this.state.loginButton
      )
        this.setState({
          loginButton: true
        });
    }
  };

  updateLoginPassword = e => {
    if (e.target.value === "")
      this.setState({
        loginButton: false
      });

    this.setState({
      loginPassword: e.target.value
    });

    if (!EMAIL.test(this.state.loginEmail)) {
      if (this.state.loginButton)
        this.setState({
          loginButton: false
        });
    } else {
      if (
        this.state.loginEmail !== "" &&
        e.target.value !== "" &&
        !this.state.loginButton
      )
        this.setState({
          loginButton: true
        });
    }
  };

  updateLoginState = bool => {
    this.setState({
      loginOpen: bool
    });
  };

  onClickLoginButton = () => {
    this.setState({
      loginButton: false,
      isLoading: true
    });
    this.props.postLogin(this.state.loginEmail, this.state.loginPassword);
  };

  /**
   * End Login Function
   **/

  moveToForget = () => {
    this.updateLoginState(false);
    this.updateForgetState(true);
  };

  moveToSignup = () => {
    if (this.state.errorStatus) {
      this.setState({
        errorStatus: false,
        errorMsg: ""
      });
    }

    this.updateLoginState(false);
    this.updateSignupState(true);
  };

  render() {
    return (
      <div className="header-container">
        <ToastContainer autoClose={1000} />
        <nav
          id="navbar"
          className="navbar has-shadow"
          style={{ backgroundColor: "#fafafa" }}
        >
          <div className="container">
            <div className="navbar-brand">
              <a className="brand" href="/">
                <div className="brand-icon-header">
                  <img
                    alt="Ballyhoo"
                    role="presentation"
                    src="https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,w_40/v1569659435/BallyhooV3/WEB/ballyhoo.png"
                  />
                </div>
                <div className="brand-content">
                  <div className="brand-title letter-spacing-1px">
                    Ballyhoo Today
                  </div>
                </div>
              </a>

              <div
                id="navbarBurger"
                className="navbar-burger burger"
                data-target="navMenuExpo"
              >
                <span />
                <span />
                <span />
              </div>
            </div>

            <div id="navMenuExpo" className="navbar-menu">
              <div className="navbar-end letter-spacing-1px">
                <div className="navbar-item">
                  <div className="control">
                    <div className="buttons">
                      <a className="button is-rounded is-outlined" disabled>
                        <span>Stories</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="navbar-item">
                  <Link href="/enquiry">
                    <div className="control">
                      <div className="buttons">
                        <a className="button is-rounded is-outlined">
                          <span>Enquiry</span>
                        </a>
                      </div>
                    </div>
                  </Link>
                </div>

                {this.state.profileOpen ? null : (
                  <div className="navbar-item">
                    <div className="control">
                      <div
                        className="buttons"
                        onClick={() => this.updateLoginState(true)}
                      >
                        <a className="button is-rounded is-outlined">
                          <span>Login</span>
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                {this.state.profileOpen ? (
                  <div className="navbar-item">
                    <Link href="/profile">
                      <div className="control">
                        <div className="buttons">
                          <a className="button is-rounded is-outlined">
                            <span>Profile</span>
                          </a>
                        </div>
                      </div>
                    </Link>
                  </div>
                ) : null}

                {this.state.profileOpen ? (
                  <div className="navbar-item">
                    <Link href="/order">
                      <div className="control">
                        <div className="buttons">
                          <a className="button is-rounded is-outlined">
                            <span>Order</span>
                          </a>
                        </div>
                      </div>
                    </Link>
                  </div>
                ) : null}

                <div className="navbar-item">
                  <Link href="/explore">
                    <div className="control">
                      <a className="button is-outlined is-rounded">
                        Plan my holiday
                      </a>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {this.state.loginOpen ? (
          <Login
            isLoading={this.state.isLoading}
            loginOpen={this.state.loginOpen}
            updateLoginState={this.updateLoginState}
            moveToSignup={this.moveToSignup}
            moveToForget={this.moveToForget}
            loginButton={this.state.loginButton}
            loginPassword={this.state.loginPassword}
            loginEmail={this.state.loginEmail}
            loginPassDisplay={this.state.loginPassDisplay}
            errorStatus={this.state.errorStatus}
            errorMsg={this.state.errorMsg}
            updateLoginPassword={this.updateLoginPassword}
            updateLoginEmail={this.updateLoginEmail}
            updateLoginPassDisplay={this.updateLoginPassDisplay}
            onClickLoginButton={this.onClickLoginButton}
          />
        ) : null}

        {this.state.signupOpen ? (
          <Signup
            isLoading={this.state.isLoading}
            signupOpen={this.state.signupOpen}
            updateSignupState={this.updateSignupState}
            signupButton={this.state.signupButton}
            signupPassDisplay={this.state.signupPassDisplay}
            signupConfirmPassDisplay={this.state.signupConfirmPassDisplay}
            errorStatus={this.state.errorStatus}
            errorMsg={this.state.errorMsg}
            updateSignupPassDisplay={this.updateSignupPassDisplay}
            updateSignupConfirmPassDisplay={this.updateSignupConfirmPassDisplay}
            updateSignupEmail={this.updateSignupEmail}
            updateSignupMobile={this.updateSignupMobile}
            updateSignupCode={this.updateSignupCode}
            updateSignupPassword={this.updateSignupPassword}
            updateSignupConfirmPassword={this.updateSignupConfirmPassword}
            onClickSignupButton={this.onClickSignupButton}
          />
        ) : null}

        {this.state.forgetOpen ? (
          <Forget
            isLoading={this.state.isLoading}
            forgetOpen={this.state.forgetOpen}
            forgetButton={this.state.forgetButton}
            updateForgetState={this.updateForgetState}
            updateForgetEmail={this.updateForgetEmail}
            onClickForgetButton={this.onClickForgetButton}
            errorStatus={this.state.errorStatus}
            errorMsg={this.state.errorMsg}
          />
        ) : null}
      </div>
    );
  }
}
