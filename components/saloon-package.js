import { Segment } from "semantic-ui-react";
import "./saloon-package.css";
const SaloonPackage = props => {
  console.log(props.open);
  return (
    <React.Fragment>
      <div className="saloon-package-container">
        <div className="columns">
          <div className="column">
            <Segment>
              <div className="box">
                <article className="media">
                  <div className="media-content">
                    <div className="content">
                      <div className="columns mb0">
                        <div className="column is-12">
                          <h4 className="ffqs list-title">Summer Treat</h4>

                          <h4 className="ffqs fw2 mt0-5 fs1">
                            Price :{" "}
                            <span className="sfc3 mt0-5 fs1-3">
                              {" "}
                              &#8377; 2,365
                            </span>
                          </h4>

                          <h4 className="ffqs fw2 mt0-5 fs1">
                            Price Caption :{" "}
                            <span className="fw2 mt0-5 fs1-3"> 6 Services</span>
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
                {/* <span class="icon is-small">
                  <img src="https://img.icons8.com/carbon-copy/100/000000/down-squared.png" />
                </span> */}
              </a>
            </Segment>

            <Segment>
              <div className="box">
                <article className="media">
                  <div className="media-content">
                    <div className="content">
                      <div className="columns mb0">
                        <div className="column is-12">
                          <h4 className="ffqs list-title">
                            Swedish Massage or Aromatherapy
                          </h4>

                          <h4 className="ffqs fw2 mt0-5 fs1">
                            Price :{" "}
                            <span className="sfc3 mt0-5 fs1-3">
                              {" "}
                              &#8377; 999.00
                            </span>
                          </h4>

                          <h4 className="ffqs fw2 mt0-5 fs1">
                            Price Caption :{" "}
                            <span className="fw2 mt0-5 fs1-3">Single</span>
                          </h4>
                        </div>
                      </div>

                      <div className="f14 ffqs">
                        <p style={{ whiteSpace: "pre-line" }}>
                          Experience bliss with o2 Spa's Swedish Massage or
                          Aromatherapy @Rs. 999/-*.
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </div>

              {props.open ? (
                <Segment>
                  <div className="package-container">
                    <article className="media">
                      <div className="media-content">
                        <div className="content">
                          <div className="columns mb0">
                            <div className="column is-10">
                              <h4 className="ffqs list-title">Single</h4>

                              <h5 className="fw2 sfc3 mt0-5 fs1-3">
                                ₹ 999.00/-
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
                              Avail Any 6 services out of 9 at discounted price.
                            </p>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </Segment>
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
