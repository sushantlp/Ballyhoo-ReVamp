import Link from "next/link";
import Login from "./login";
import Signup from "./signup";
import Forget from "./forget";

import "./header.css";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginOpen: false,
      signupOpen: false,
      forgetOpen: false
    };
  }

  updateLoginState = bool => {
    this.setState({
      loginOpen: bool
    });
  };

  updateSignupState = bool => {
    this.setState({
      signupOpen: bool
    });
  };

  updateForgetState = bool => {
    this.setState({
      forgetOpen: bool
    });
  };

  moveToForget = () => {
    this.updateLoginState(false);
    this.updateForgetState(true);
  };

  moveToSignup = () => {
    this.updateLoginState(false);
    this.updateSignupState(true);
  };
  render() {
    return (
      <div className="header-container">
        <nav
          id="navbar"
          className="navbar has-shadow"
          style={{ backgroundColor: "#fafafa" }}
        >
          <div className="container">
            <div className="navbar-brand">
              {/* <a className="navbar-item" href="/">
                <img
                  src="https://res.cloudinary.com/dp67gawk6/image/upload/v1569315724/BallyhooV3/WEB/logo.png"
                  alt="Bulma: Free, open source, &amp; modern CSS framework based on Flexbox"
                  // width="112"
                  // height="28"
                />
              </a> */}

              <a className="brand" href="/">
                <div className="brand-icon-header">
                  <img
                    alt="Ballyhoo"
                    role="presentation"
                    src="https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,w_50/v1569659435/BallyhooV3/WEB/ballyhoo.png"
                  />
                </div>
                <div className="brand-content">
                  <div className="brand-title">Ballyhoo Today</div>
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
              <div className="navbar-end">
                {/* <div className="navbar-item">
                  <span className="call-now-img">
                    <img src="https://img.icons8.com/color/20/000000/ringer-volume.png" />
                  </span>
                  <span className="call-now-number">1800-123-5555</span>
                </div> */}

                <div className="navbar-item">
                  {/* <Link href="/profile"> */}
                  <div className="control">
                    <div className="buttons">
                      <a className="button is-rounded is-outlined" disabled>
                        <span>Story</span>
                      </a>
                    </div>
                  </div>
                  {/* </Link> */}
                </div>
                {/* 
                <div className="navbar-item">
                  <Link href="/enquiry">
                  <div className="control">
                    <div className="buttons">
                      <a className="button is-rounded is-outlined" disabled>
                        <span>Enquiry</span>
                      </a>
                    </div>
                  </div>
                  </Link>
                </div> */}

                <div className="navbar-item">
                  <div className="control">
                    <div
                      className="buttons"
                      // onClick={() => this.updateLoginState(true)}
                    >
                      <a className="button is-rounded is-outlined" disabled>
                        <span>Login</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* <div className="navbar-item">
                   <Link href="/explore"> 
                  <div className="control">
                    <a className="button is-outlined is-rounded" disabled>
                      Plan my holiday
                    </a>
                  </div>
                  </Link> 
                </div> */}
              </div>
            </div>
          </div>
        </nav>

        {this.state.loginOpen ? (
          <Login
            loginOpen={this.state.loginOpen}
            updateLoginState={this.updateLoginState}
            moveToSignup={this.moveToSignup}
            moveToForget={this.moveToForget}
          />
        ) : null}

        {this.state.signupOpen ? (
          <Signup
            signupOpen={this.state.signupOpen}
            updateSignupState={this.updateSignupState}
          />
        ) : null}

        {this.state.forgetOpen ? (
          <Forget
            forgetOpen={this.state.forgetOpen}
            updateForgetState={this.updateForgetState}
          />
        ) : null}
      </div>
    );
  }
}
