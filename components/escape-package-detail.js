import { Segment, Accordion, Icon } from "semantic-ui-react";

export default class EscapePackage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: -1,
      open: false
    };
  }

  changeOpen = () => {
    this.setState({
      open: !this.state.open
    });
  };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;
    return (
      <Segment style={{ backgroundColor: "#f1f1f1" }}>
        <div className="box">
          <article className="media">
            <div className="media-content">
              <div className="content">
                <div className="columns mb0">
                  <div className="column">
                    <h4 className="ffqs list-title">
                      Nishane Motte & Kuriharida Kallu
                    </h4>

                    <h4 className="ffqs fw2 mt0-5 fs1">
                      Price :{" "}
                      <span className="sfc3 mt0-5 fs1-3"> &#8377; 3500.00</span>
                    </h4>
                  </div>
                </div>

                <div className="columns mb0">
                  <div className="column">
                    <h4 className="ffqs fw2 mt0-5 fs1">
                      Price Caption :{" "}
                      <span className="fw2 mt0-5 fs1-2"> Trekking</span>
                    </h4>
                  </div>
                </div>

                <div className="f14 ffqs">
                  <p style={{ whiteSpace: "pre-line" }}>
                    Nishane motte is a relatively less known peak in the Tala
                    cauvery/ Brahmagiri range of Coorg. It lies to the south of
                    Bhagamandala in a range
                  </p>
                </div>
              </div>
            </div>
          </article>

          <footer className="card-footer">
            <div className="card-footer-item">
              <span className="span-flex">
                <span className="pr3">
                  <img src="https://img.icons8.com/color/30/000000/bungalow.png" />
                  <p className="f12 text-center">Stay</p>
                </span>

                <span className="pr3">
                  <img
                    src="https://img.icons8.com/color/30/000000/around-the-globe.png"
                    style={{ paddingLeft: "0.3em" }}
                  />
                  <p className="f12 text-center">Travel</p>
                </span>

                <span className="pr3">
                  <img
                    src="https://img.icons8.com/color/30/000000/tripadvisor.png"
                    style={{ paddingLeft: "0.7em" }}
                  />
                  <p className="f12 text-center">SightSeeing</p>
                </span>

                <span className="pr3">
                  <img
                    src="https://img.icons8.com/color/30/000000/sandwich.png"
                    style={{ paddingLeft: "0.7em" }}
                  />
                  <p className="f12 text-center">BreakFast</p>
                </span>

                <span className="pr3">
                  <img src="https://img.icons8.com/color/30/000000/parachute.png" />
                  <p className="f12 text-center">Activities</p>
                </span>
              </span>
            </div>
          </footer>
        </div>

        {this.state.open ? (
          <React.Fragment>
            <Segment>
              <div className="package-container">
                <article className="media">
                  <div className="media-content">
                    <div className="content">
                      <div className="columns mb0">
                        <div className="column is-8">
                          <h4 className="ffqs list-title">
                            Individual- Raptor
                          </h4>

                          <h5 className="fw2 sfc3 mt0-5 fs1-3">
                            ₹ 3325.00/-
                            <span
                              className="fw2 fs0-7 tdl ml8"
                              style={{ color: "#363636" }}
                            >
                              ₹ 3500.00/-
                            </span>
                            <span className="tag is-rounded is-warning ml8">
                              5% off
                            </span>
                          </h5>
                        </div>

                        <div className="column is-2">
                          <a className="button is-danger fr">BOOK</a>
                        </div>

                        <div className="column is-2">
                          <a className="button is-warning fr">SEND QUERY</a>
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
              <Accordion styled>
                <Accordion.Title
                  active={activeIndex === 0}
                  index={0}
                  onClick={this.handleClick}
                >
                  <h4 className="ffqs accordion-title">
                    <Icon name="dropdown" />
                    Overview
                  </h4>
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 0}>
                  <div className="f14 ffqs">
                    <p style={{ whiteSpace: "pre-line" }}>
                      Nishane motte is a relatively less known peak in the Tala
                      cauvery/ Brahmagiri range of Coorg. It lies to the south
                      of Bhagamandala in a range
                    </p>
                  </div>
                </Accordion.Content>

                <Accordion.Title
                  active={activeIndex === 1}
                  index={1}
                  onClick={this.handleClick}
                >
                  <h4 className="ffqs accordion-title">
                    <Icon name="dropdown" />
                    Inclusion
                  </h4>
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 1}>
                  <div className="f14 ffqs">
                    <p style={{ whiteSpace: "pre-line" }}>
                      Nishane motte is a relatively less known peak in the Tala
                      cauvery/ Brahmagiri range of Coorg. It lies to the south
                      of Bhagamandala in a range
                    </p>
                  </div>
                </Accordion.Content>

                <Accordion.Title
                  active={activeIndex === 2}
                  index={2}
                  onClick={this.handleClick}
                >
                  <h4 className="ffqs accordion-title">
                    <Icon name="dropdown" />
                    Terms and Condition
                  </h4>
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 2}>
                  <div className="f14 ffqs">
                    <p style={{ whiteSpace: "pre-line" }}>
                      Nishane motte is a relatively less known peak in the Tala
                      cauvery/ Brahmagiri range of Coorg. It lies to the south
                      of Bhagamandala in a range
                    </p>
                  </div>
                </Accordion.Content>
              </Accordion>
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
