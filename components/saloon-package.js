import { Segment } from "semantic-ui-react";
import "./saloon-package.css";
const SaloonPackage = props => {
  return (
    <React.Fragment>
      <div className="saloon-package-container">
        <div className="columns">
          <div className="column">
            <Segment style={{ backgroundColor: "#f1f1f1" }}>
              <div className="box">
                <article className="media">
                  <div className="media-content">
                    <div className="content">
                      <div className="columns mb0">
                        <div className="column">
                          <h4 className="ffqs list-title">Summer Treat</h4>

                          <h4 className="ffqs fw2 mt0-5 fs1">
                            Price :{" "}
                            <span className="sfc3 mt0-5 fs1-3">
                              {" "}
                              &#8377; 2,365
                            </span>
                          </h4>
                        </div>

                        <div className="column pl8 pt0">
                          <div className="package-tag-box">
                            <ul className="package-tags">
                              <li className="ellipsis">Shikara Ride</li>
                              <li className="ellipsis">Nature</li>
                              <li className="ellipsis">Martand Temple</li>
                              <li className="ellipsis">Hill station</li>
                              <li className="ellipsis">Amusement Park</li>
                              <li className="ellipsis">Sightseeing</li>
                              <li className="ellipsis">Gondola Ride</li>
                              <li className="ellipsis">Family</li>
                              <li className="ellipsis">Budget</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="columns mb0">
                        <div className="column">
                          <h4 className="ffqs fw2 mt0-5 fs1">
                            Price Caption :{" "}
                            <span className="fw2 mt0-5 fs1-2"> 6 Services</span>
                          </h4>
                        </div>
                      </div>
                      <div className="f14 ffqs">
                        <p style={{ whiteSpace: "pre-line" }}>
                          Avail Any 6 services out of 9 at discounted price.
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              {props.open ? (
                <React.Fragment>
                  <Segment>
                    <div className="package-container">
                      <article className="media">
                        <div className="media-content">
                          <div className="content">
                            <div className="columns mb0">
                              <div className="column is-10">
                                <h4 className="ffqs list-title">
                                  Summer Treat
                                </h4>

                                <h5 className="fw2 sfc3 mt0-5 fs1-3">
                                  ₹ 10,000/-
                                  <span
                                    className="fw2 fs0-7 tdl ml8"
                                    style={{ color: "#363636" }}
                                  >
                                    ₹ 11,351/-
                                  </span>
                                  <span className="tag is-rounded is-warning ml8">
                                    12% off
                                  </span>
                                </h5>
                              </div>

                              <div className="column is-2">
                                <a className="button is-danger fr">BOOK</a>
                              </div>
                            </div>

                            <div className="f14 ffqs">
                              <p style={{ whiteSpace: "pre-line" }}>
                                Avail Any 6 services out of 9 at discounted
                                price.
                              </p>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </Segment>
                  <Segment>
                    <div className="package-container">
                      <article className="media">
                        <div className="media-content">
                          <div className="content">
                            <div className="columns mb0">
                              <div className="column is-10">
                                <h4 className="ffqs list-title">
                                  Summer Treat
                                </h4>

                                <h5 className="fw2 sfc3 mt0-5 fs1-3">
                                  ₹ 10,000/-
                                  <span
                                    className="fw2 fs0-7 tdl ml8"
                                    style={{ color: "#363636" }}
                                  >
                                    ₹ 11,351/-
                                  </span>
                                  <span className="tag is-rounded is-warning ml8">
                                    12% off
                                  </span>
                                </h5>
                              </div>

                              <div className="column is-2">
                                <a className="button is-danger fr">BOOK</a>
                              </div>
                            </div>

                            <div className="f14 ffqs">
                              <p style={{ whiteSpace: "pre-line" }}>
                                Avail Any 6 services out of 9 at discounted
                                price.
                              </p>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </Segment>
                </React.Fragment>
              ) : null}

              <a
                className="button is-outlined view-detail ffqs is-dark"
                onClick={() => props.changeOpen()}
              >
                <span>VIEW DETAILS</span>
              </a>
            </Segment>

            <Segment style={{ backgroundColor: "#f1f1f1" }}>
              <div className="box">
                <article className="media">
                  <div className="media-content">
                    <div className="content">
                      <div className="columns mb0">
                        <div className="column">
                          <h4 className="ffqs list-title">Go Karting</h4>

                          <h4 className="ffqs fw2 mt0-5 fs1">
                            Price Range :{" "}
                            <span className="sfc3 mt0-5 fs1-3">
                              {" "}
                              &#8377; 200.00 - &#8377; 500.00
                            </span>
                          </h4>
                        </div>

                        <div className="column pl8 pt0">
                          <div className="package-tag-box">
                            <ul className="package-tags">
                              <li className="ellipsis">Shikara Ride</li>
                              <li className="ellipsis">Nature</li>
                              <li className="ellipsis">Martand Temple</li>
                              <li className="ellipsis">Hill station</li>
                              <li className="ellipsis">Amusement Park</li>
                              <li className="ellipsis">Sightseeing</li>
                              <li className="ellipsis">Gondola Ride</li>
                              <li className="ellipsis">Family</li>
                              <li className="ellipsis">Budget</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="columns mb0">
                        <div className="column">
                          <h4 className="ffqs fw2 mt0-5 fs1">
                            Price Caption :{" "}
                            <span className="fw2 mt0-5 fs1-2">
                              {" "}
                              Individual-evo, Individual- Raptor, Individual-
                              Intruder
                            </span>
                          </h4>
                        </div>
                      </div>

                      <div className="f14 ffqs">
                        <p style={{ whiteSpace: "pre-line" }}>
                          Go Karting has been the highlights of Torq03. A
                          Renovated track, new karts and never seen before
                          safety barriers
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </div>

              {props.open ? (
                <React.Fragment>
                  <Segment>
                    <div className="package-container">
                      <article className="media">
                        <div className="media-content">
                          <div className="content">
                            <div className="columns mb0">
                              <div className="column is-10">
                                <h4 className="ffqs list-title">
                                  Individual-evo
                                </h4>

                                <h5 className="fw2 sfc3 mt0-5 fs1-3">
                                  ₹ 500.00/-
                                  {/* <span
                                  className="fw2 fs0-7 tdl ml8"
                                  style={{ color: "#363636" }}
                                >
                                  ₹ 11,351/-
                                </span>
                                <span className="tag is-rounded is-warning ml8">
                                  12% off
                                </span> */}
                                </h5>
                              </div>

                              <div className="column is-2">
                                <a className="button is-danger fr">BOOK</a>
                              </div>
                            </div>

                            <div className="f14 ffqs">
                              <p style={{ whiteSpace: "pre-line" }}>
                                Valid- 1 person Standard T&C apply
                              </p>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </Segment>

                  <Segment>
                    <div className="package-container">
                      <article className="media">
                        <div className="media-content">
                          <div className="content">
                            <div className="columns mb0">
                              <div className="column is-10">
                                <h4 className="ffqs list-title">
                                  Individual- Raptor
                                </h4>

                                <h5 className="fw2 sfc3 mt0-5 fs1-3">
                                  ₹ 294.00/-
                                  <span
                                    className="fw2 fs0-7 tdl ml8"
                                    style={{ color: "#363636" }}
                                  >
                                    ₹ 300.00/-
                                  </span>
                                  <span className="tag is-rounded is-warning ml8">
                                    2% off
                                  </span>
                                </h5>
                              </div>

                              <div className="column is-2">
                                <a className="button is-danger fr">BOOK</a>
                              </div>
                            </div>

                            <div className="f14 ffqs">
                              <p style={{ whiteSpace: "pre-line" }}>
                                Valid- 1 person Standard T&C apply
                              </p>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </Segment>
                </React.Fragment>
              ) : null}

              <a
                className="button is-outlined view-detail ffqs is-dark"
                onClick={() => props.changeOpen()}
              >
                <span>VIEW DETAILS</span>
              </a>
            </Segment>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SaloonPackage;
