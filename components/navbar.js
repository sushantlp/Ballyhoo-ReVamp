import "./navbar.css";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navbar-container">
        {/* <nav
          className="navbar has-shadow"
          role="navigation"
          aria-label="main navigation"
          style={{ backgroundColor: "#f2f2f2" }}
        >
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
              <img
                src="https://bulma.io/images/bulma-logo.png"
                width="112"
                height="28"
              />
            </a>

            <a
              role="button"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
             <div className="navbar-start">
              <a className="navbar-item">Home</a>
              <a className="navbar-item">Documentation</a>
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">More</a>
                <div className="navbar-dropdown">
                  <a className="navbar-item">About</a>
                  <a className="navbar-item">Jobs</a>
                  <a className="navbar-item">Contact</a>
                  <hr className="navbar-divider" />
                  <a className="navbar-item">Report an issue</a>
                </div>
              </div>
            </div> 

            <div className="navbar-end">
              <div className="navbar-item">
                <div class="field is-grouped is-grouped-multiline">
                

                  <a
                    class="navbar-item bd-navbar-item-expo is-active"
                    href="https://bulma.io/expo/"
                  >
                    <img src="https://img.icons8.com/color/30/000000/google-blog-search.png" />
                    <span>Expo</span>
                  </a>
                </div>
                <div className="button">LOGIN</div>
              </div>
            </div>
          </div>
        </nav> */}

        <nav id="navbar" class="navbar has-shadow">
          <div class="container">
            <div class="navbar-brand">
              <a class="navbar-item" href="https://bulma.io">
                <img
                  src="https://bulma.io/images/bulma-logo.png"
                  alt="Bulma: Free, open source, &amp; modern CSS framework based on Flexbox"
                  width="112"
                  height="28"
                />
              </a>

              <div
                id="navbarBurger"
                class="navbar-burger burger"
                data-target="navMenuExpo"
              >
                <span />
                <span />
                <span />
              </div>
            </div>

            <div id="navMenuExpo" class="navbar-menu">
              <div class="navbar-end">
                <div class="navbar-item">
                  <span className="call-now-img">
                    <img src="https://img.icons8.com/color/20/000000/ringer-volume.png" />
                  </span>
                  <span className="call-now-number">1800-123-5555</span>
                </div>

                <div class="navbar-item">
                  <span className="blog-img">
                    <img src="https://img.icons8.com/ultraviolet/20/000000/blog.png" />
                  </span>
                  <span className="blog-text">Blog</span>
                </div>

                <div class="navbar-item">
                  <p class="control">
                    <a
                      class="button is-danger"
                      href="https://github.com/jgthms/bulma/releases/download/0.7.5/bulma-0.7.5.zip"
                    >
                      <strong>LOGIN</strong>
                    </a>
                  </p>
                </div>
                {/* <div class="navbar-item has-dropdown is-hoverable">
                  <a class="navbar-link" href="https://bulma.io/more">
                    More
                  </a>

                  <div id="moreDropdown" class="navbar-dropdown">
                    <a
                      class="navbar-item "
                      href="https://bulma.io//bulma-start"
                    >
                      <span>
                        <span class="icon has-text-success">
                          <svg
                            class="svg-inline--fa fa-rocket fa-w-16"
                            aria-hidden="true"
                            data-prefix="fas"
                            data-icon="rocket"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            data-fa-i2svg=""
                          >
                            <path
                              fill="currentColor"
                              d="M505.1 19.1C503.8 13 499 8.2 492.9 6.9 460.7 0 435.5 0 410.4 0 307.2 0 245.3 55.2 199.1 128H94.9c-18.2 0-34.8 10.3-42.9 26.5L2.6 253.3c-8 16 3.6 34.7 21.5 34.7h95.1c-5.9 12.8-11.9 25.5-18 37.7-3.1 6.2-1.9 13.6 3 18.5l63.6 63.6c4.9 4.9 12.3 6.1 18.5 3 12.2-6.1 24.9-12 37.7-17.9V488c0 17.8 18.8 29.4 34.7 21.5l98.7-49.4c16.3-8.1 26.5-24.8 26.5-42.9V312.8c72.6-46.3 128-108.4 128-211.1.1-25.2.1-50.4-6.8-82.6zM400 160c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"
                            />
                          </svg>{" "}
                          <i class="fas fa-rocket" />
                        </span>
                        <strong>Bulma start</strong>
                        <br />A tiny npm package to get started
                      </span>
                    </a>

                    <hr class="navbar-divider" />

                    <a
                      class="navbar-item "
                      href="https://bulma.io//made-with-bulma"
                    >
                      <span>
                        <span class="icon has-text-primary">
                          <svg
                            class="svg-inline--fa fa-certificate fa-w-16"
                            aria-hidden="true"
                            data-prefix="fas"
                            data-icon="certificate"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            data-fa-i2svg=""
                          >
                            <path
                              fill="currentColor"
                              d="M458.622 255.92l45.985-45.005c13.708-12.977 7.316-36.039-10.664-40.339l-62.65-15.99 17.661-62.015c4.991-17.838-11.829-34.663-29.661-29.671l-61.994 17.667-15.984-62.671C337.085.197 313.765-6.276 300.99 7.228L256 53.57 211.011 7.229c-12.63-13.351-36.047-7.234-40.325 10.668l-15.984 62.671-61.995-17.667C74.87 57.907 58.056 74.738 63.046 92.572l17.661 62.015-62.65 15.99C.069 174.878-6.31 197.944 7.392 210.915l45.985 45.005-45.985 45.004c-13.708 12.977-7.316 36.039 10.664 40.339l62.65 15.99-17.661 62.015c-4.991 17.838 11.829 34.663 29.661 29.671l61.994-17.667 15.984 62.671c4.439 18.575 27.696 24.018 40.325 10.668L256 458.61l44.989 46.001c12.5 13.488 35.987 7.486 40.325-10.668l15.984-62.671 61.994 17.667c17.836 4.994 34.651-11.837 29.661-29.671l-17.661-62.015 62.65-15.99c17.987-4.302 24.366-27.367 10.664-40.339l-45.984-45.004z"
                            />
                          </svg>{" "}
                          <i class="fas fa-certificate" />
                        </span>
                        <strong>Made with Bulma</strong>
                        <br />
                        The official community badge
                      </span>
                    </a>

                    <hr class="navbar-divider" />

                    <a
                      class="navbar-item "
                      href="https://bulma.io//alternative-to-bootstrap"
                    >
                      <span>
                        <span class="icon has-text-bootstrap">
                          <svg
                            class="svg-inline--fa fa-exchange-alt fa-w-16"
                            aria-hidden="true"
                            data-prefix="fas"
                            data-icon="exchange-alt"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            data-fa-i2svg=""
                          >
                            <path
                              fill="currentColor"
                              d="M0 168v-16c0-13.255 10.745-24 24-24h360V80c0-21.367 25.899-32.042 40.971-16.971l80 80c9.372 9.373 9.372 24.569 0 33.941l-80 80C409.956 271.982 384 261.456 384 240v-48H24c-13.255 0-24-10.745-24-24zm488 152H128v-48c0-21.314-25.862-32.08-40.971-16.971l-80 80c-9.372 9.373-9.372 24.569 0 33.941l80 80C102.057 463.997 128 453.437 128 432v-48h360c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24z"
                            />
                          </svg>{" "}
                          <i class="fas fa-exchange-alt" />
                        </span>
                        <strong>Coming from Bootstrap</strong>
                        <br />
                        See how Bulma is an alternative to Bootstrap
                      </span>
                    </a>

                    <hr class="navbar-divider" />

                    <a class="navbar-item " href="https://bulma.io//backers">
                      <span>
                        <span class="icon has-text-patreon">
                          <svg
                            class="svg-inline--fa fa-patreon fa-w-16"
                            aria-hidden="true"
                            data-prefix="fab"
                            data-icon="patreon"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            data-fa-i2svg=""
                          >
                            <path
                              fill="currentColor"
                              d="M512 194.8c0 101.3-82.4 183.8-183.8 183.8-101.7 0-184.4-82.4-184.4-183.8 0-101.6 82.7-184.3 184.4-184.3C429.6 10.5 512 93.2 512 194.8zM0 501.5h90v-491H0v491z"
                            />
                          </svg>{" "}
                          <i class="fab fa-patreon" />
                        </span>
                        <strong>Patreon backers</strong>
                        <br />
                        Everyone who is supporting Bulma
                      </span>
                    </a>

                    <hr class="navbar-divider" />

                    <a class="navbar-item " href="https://bulma.io//extensions">
                      <span>
                        <span class="icon has-text-orange">
                          <svg
                            class="svg-inline--fa fa-plug fa-w-12"
                            aria-hidden="true"
                            data-prefix="fas"
                            data-icon="plug"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                            data-fa-i2svg=""
                          >
                            <path
                              fill="currentColor"
                              d="M256 144V32c0-17.673 14.327-32 32-32s32 14.327 32 32v112h-64zm112 16H16c-8.837 0-16 7.163-16 16v32c0 8.837 7.163 16 16 16h16v32c0 77.406 54.969 141.971 128 156.796V512h64v-99.204c73.031-14.825 128-79.39 128-156.796v-32h16c8.837 0 16-7.163 16-16v-32c0-8.837-7.163-16-16-16zm-240-16V32c0-17.673-14.327-32-32-32S64 14.327 64 32v112h64z"
                            />
                          </svg>{" "}
                          <i class="fas fa-plug" />
                        </span>
                        <strong>Bulma extensions</strong>
                        <br />
                        Side projects to enhance Bulma
                      </span>
                    </a>
                  </div>
                </div> */}
              </div>

              {/* <div class="navbar-end">
               

                <div class="navbar-item">
                  <div class="field is-grouped is-grouped-multiline">
                    <p class="control" />
                    <p class="control">
                      <a
                        class="button is-danger"
                        href="https://github.com/jgthms/bulma/releases/download/0.7.5/bulma-0.7.5.zip"
                      >
                        <strong>LOGIN</strong>
                      </a>
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
