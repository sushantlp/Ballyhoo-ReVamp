import Link from "next/link";
import "./header.css";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

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
              <a className="navbar-item" href="/">
                <img
                  src="https://bulma.io/images/bulma-logo.png"
                  alt="Bulma: Free, open source, &amp; modern CSS framework based on Flexbox"
                  width="112"
                  height="28"
                />
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
                  <p className="control">
                    <Link href="/enquiry">
                      <p className="buttons">
                        <a className="button is-rounded is-outlined">
                          {/* <span class="icon">
                          <img src="https://img.icons8.com/color/20/000000/story-book.png" />
                        </span> */}
                          <span>STORIES</span>
                        </a>
                      </p>
                    </Link>
                  </p>
                </div>

                <div className="navbar-item">
                  <p className="control">
                    <Link href="/enquiry">
                      <p className="buttons">
                        <a className="button is-rounded is-outlined">
                          {/* <span class="icon">
                          <img src="https://img.icons8.com/plasticine/100/000000/questions.png" />
                        </span> */}
                          <span>ENQUIRY</span>
                        </a>
                      </p>
                    </Link>
                  </p>
                </div>

                <div className="navbar-item">
                  <p className="control">
                    <Link href="/enquiry">
                      <p className="buttons">
                        <a className="button is-rounded is-outlined">
                          {/* <span class="icon">
                          <img src="https://img.icons8.com/cotton/48/000000/login-rounded-right--v2.png" />
                        </span> */}
                          <span>LOGIN</span>
                        </a>
                      </p>
                    </Link>
                  </p>
                </div>

                <div className="navbar-item">
                  <Link href="/explore">
                    <p className="control">
                      <a className="button is-outlined is-rounded">
                        PLAN MY HOLIDAY
                      </a>
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
