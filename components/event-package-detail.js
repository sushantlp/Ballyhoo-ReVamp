import { Segment } from "semantic-ui-react";
export default class EventPackage extends React.Component {
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
        <a className="button is-warning view-detail ffqs is-dark">
          <span>AUG 21</span>
        </a>
        <Segment>
          <div className="box">
            <article className="media">
              <div className="media-content">
                <div className="content">
                  <div className="columns mb0">
                    <div className="column">
                      <h4 className="ffqs list-title">Open Mic Night</h4>

                      <h4 className="ffqs fw2 mt0-5 fs1">
                        Price :{" "}
                        <span className="sfc3 mt0-5 fs1-3">
                          {" "}
                          &#8377; 300.00
                        </span>
                      </h4>
                    </div>

                    <div className="column pl8 pt0">
                      <div className="package-tag-box">
                        <ul className="package-tags">
                          <li className="ellipsis">Comedy</li>
                          <li className="ellipsis">Music</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="columns mb0">
                    <div className="column">
                      <h4 className="ffqs fw2 mt0-5 fs1">
                        Price Caption :{" "}
                        <span className="fw2 mt0-5 fs1-2"> Single</span>
                      </h4>
                    </div>
                  </div>

                  <div className="f14 ffqs">
                    <p style={{ whiteSpace: "pre-line" }}>
                      This one is all about you: You're on stage, You take over
                      with your music, dance, beat box, spoken word, poetry.
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
                            <h4 className="ffqs list-title">Single</h4>

                            <h5 className="fw2 sfc3 mt0-5 fs1-3">₹ 300.00/-</h5>
                          </div>

                          <div className="column is-2">
                            <a className="button is-danger fr">BOOK</a>
                          </div>
                        </div>

                        <div className="f14 ffqs">
                          <p style={{ whiteSpace: "pre-line" }}>
                            What we have at the venue (Tech Stuff): 1 * Guitar
                            Amplifier 3 * Mics 1 * 5 piece Drum Kit.
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

        <Segment>
          <div className="box">
            <article className="media">
              <div className="media-content">
                <div className="content">
                  <div className="columns mb0">
                    <div className="column">
                      <h4 className="ffqs list-title">Open Mic Night</h4>

                      <h4 className="ffqs fw2 mt0-5 fs1">
                        Price :{" "}
                        <span className="sfc3 mt0-5 fs1-3">
                          {" "}
                          &#8377; 300.00
                        </span>
                      </h4>
                    </div>

                    <div className="column pl8 pt0">
                      <div className="package-tag-box">
                        <ul className="package-tags">
                          <li className="ellipsis">Comedy</li>
                          <li className="ellipsis">Music</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="columns mb0">
                    <div className="column">
                      <h4 className="ffqs fw2 mt0-5 fs1">
                        Price Caption :{" "}
                        <span className="fw2 mt0-5 fs1-2"> Single</span>
                      </h4>
                    </div>
                  </div>

                  <div className="f14 ffqs">
                    <p style={{ whiteSpace: "pre-line" }}>
                      This one is all about you: You're on stage, You take over
                      with your music, dance, beat box, spoken word, poetry.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {this.props.open ? (
            <React.Fragment>
              <Segment>
                <div className="package-container">
                  <article className="media">
                    <div className="media-content">
                      <div className="content">
                        <div className="columns mb0">
                          <div className="column is-10">
                            <h4 className="ffqs list-title">Single</h4>

                            <h5 className="fw2 sfc3 mt0-5 fs1-3">₹ 300.00/-</h5>
                          </div>

                          <div className="column is-2">
                            <a className="button is-danger fr">BOOK</a>
                          </div>
                        </div>

                        <div className="f14 ffqs">
                          <p style={{ whiteSpace: "pre-line" }}>
                            What we have at the venue (Tech Stuff): 1 * Guitar
                            Amplifier 3 * Mics 1 * 5 piece Drum Kit.
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
      </Segment>
    );
  }
}
