import { Segment } from "semantic-ui-react";
import "./saloon-package.css";
const SaloonPackage = props => {
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
              <Segment>
                {/* <div className="box"> */}
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
                {/* </div> */}
              </Segment>
              <a className="button ff">VIEW DETAILS</a>
            </Segment>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SaloonPackage;
