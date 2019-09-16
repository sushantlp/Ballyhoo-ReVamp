import { Segment } from "semantic-ui-react";
export default class SaloonPackage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  changeOpen = () => {
    this.setState({
      open: !this.state.open
    });
  };

  render() {
    return (
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
                      <span className="sfc3 mt0-5 fs1-3"> &#8377; 2,365</span>
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
        {this.state.open ? (
          <React.Fragment>
            <Segment>
              <div className="package-container">
                <article className="media">
                  <div className="media-content">
                    <div className="content">
                      <div className="columns mb0">
                        <div className="column is-10">
                          <h4 className="ffqs list-title">Summer Treat</h4>

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
                          Avail Any 6 services out of 9 at discounted price.
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
                          <h4 className="ffqs list-title">Summer Treat</h4>

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
                          Avail Any 6 services out of 9 at discounted price.
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
          onClick={() => this.changeOpen()}
        >
          <span>VIEW DETAILS</span>
        </a>
      </Segment>
    );
  }
}
