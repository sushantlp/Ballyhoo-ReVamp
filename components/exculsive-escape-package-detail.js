import { Segment, Accordion, Icon } from "semantic-ui-react";

export default class ExculsiveEscapePackage extends React.Component {
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
                  <div className="column is-8">
                    <h4 className="ffqs list-title">
                      Royal Rajasthan - 5 Destinations
                    </h4>

                    <h4 className="ffqs fw2 mt0-5 fs1">
                      Price :{" "}
                      <span className="sfc3 mt0-5 fs1-3">
                        {" "}
                        &#8377; 38000.00
                      </span>
                    </h4>
                  </div>

                  <div className="column is-4 pl8 pt0">
                    <div className="package-tag-box">
                      <ul className="package-tags">
                        <li className="ellipsis">Udaipur</li>
                        <li className="ellipsis">Mount Abu</li>
                        <li className="ellipsis">Jodhpur</li>
                        <li className="ellipsis">Ajmer</li>
                        <li className="ellipsis">Jaipur</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="columns mb0">
                  <div className="column">
                    <h4 className="ffqs fw2 mt0-5 fs1">
                      Travel Duration :{" "}
                      {/* <span className="fw2 mt0-5 fs1-2">14 hours</span> */}
                      <span className="tag is-rounded is-warning  fw2 mt0-5 fs0-9">
                        14 hours
                      </span>
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
                <span className="pr2">
                  <img src="https://img.icons8.com/color/25/000000/bungalow.png" />
                  <p className="f12 text-center">Stay</p>
                </span>

                <span className="pr2">
                  <img
                    src="https://img.icons8.com/color/25/000000/around-the-globe.png"
                    style={{ paddingLeft: "0.3em" }}
                  />
                  <p className="f12 text-center">Travel</p>
                </span>

                <span className="pr2">
                  <img
                    src="https://img.icons8.com/color/25/000000/tripadvisor.png"
                    style={{ paddingLeft: "1.2em" }}
                  />
                  <p className="f12 text-center">SightSeeing</p>
                </span>

                <span className="pr2">
                  <img
                    src="https://img.icons8.com/color/25/000000/sandwich.png"
                    style={{ paddingLeft: "0.7em" }}
                  />
                  <p className="f12 text-center">BreakFast</p>
                </span>

                <span className="pr2">
                  <img
                    src="https://img.icons8.com/color/25/000000/parachute.png"
                    style={{ paddingLeft: "0.8em" }}
                  />
                  <p className="f12 text-center">Activities</p>
                </span>
              </span>
            </div>

            <div className="card-footer-item">
              <a className="button is-danger fr">BOOK</a>
            </div>

            <div className="card-footer-item">
              <a className="button is-warning fr">SEND QUERY</a>
            </div>
          </footer>
        </div>

        {this.state.open ? (
          <React.Fragment>
            <Segment>
              <Accordion styled>
                <Accordion.Title
                  active={activeIndex === 6}
                  index={6}
                  onClick={this.handleClick}
                >
                  {/* Overview */}
                  <h4 className="ffqs accordion-title">
                    <Icon name="dropdown" />
                    Package Detail
                  </h4>
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 6}>
                  <h4 className="ffqs mt0-5 fs1-2 fw5 mb1">Itinerary : </h4>

                  <p style={{ whiteSpace: "pre-line" }} className="fw2 ffqs">
                    Nishane motte is a relatively less known peak in the Tala
                    cauvery/ Brahmagiri range of Coorg. It lies to the south of
                    Bhagamandala in a range
                  </p>

                  <h4 className="ffqs mt0-5 fs1-2 fw5 mb1">Inclusion : </h4>

                  <p style={{ whiteSpace: "pre-line" }} className="fw2 ffqs">
                    Nishane motte is a relatively less known peak in the Tala
                    cauvery/ Brahmagiri range of Coorg. It lies to the south of
                    Bhagamandala in a range
                  </p>

                  <h4 className="ffqs mt0-5 fs1-2 fw5 mb1">Exclusion : </h4>

                  <p style={{ whiteSpace: "pre-line" }} className="fw2 ffqs">
                    Nishane motte is a relatively less known peak in the Tala
                    cauvery/ Brahmagiri range of Coorg. It lies to the south of
                    Bhagamandala in a range
                  </p>

                  <h4 className="ffqs mt0-5 fs1-2 fw5 mb1">Accommodation : </h4>

                  <p style={{ whiteSpace: "pre-line" }} className="fw2 ffqs">
                    Nishane motte is a relatively less known peak in the Tala
                    cauvery/ Brahmagiri range of Coorg. It lies to the south of
                    Bhagamandala in a range
                  </p>

                  <h4 className="ffqs mt0-5 fs1-2 fw5 mb1">
                    Transportation :{" "}
                  </h4>

                  <p style={{ whiteSpace: "pre-line" }} className="fw2 ffqs">
                    Nishane motte is a relatively less known peak in the Tala
                    cauvery/ Brahmagiri range of Coorg. It lies to the south of
                    Bhagamandala in a range
                  </p>
                </Accordion.Content>

                <Accordion.Title
                  active={activeIndex === 7}
                  index={7}
                  onClick={this.handleClick}
                >
                  <h4 className="ffqs accordion-title">
                    <Icon name="dropdown" />
                    Terms and Condition
                  </h4>
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 7}>
                  <div className="f14 ffqs">
                    <p style={{ whiteSpace: "pre-line" }}>
                      Nishane motte is a relatively less known peak in the Tala
                      cauvery/ Brahmagiri range of Coorg. It lies to the south
                      of Bhagamandala in a range
                    </p>
                  </div>
                </Accordion.Content>

                <Accordion.Title
                  active={activeIndex === 8}
                  index={8}
                  onClick={this.handleClick}
                >
                  <h4 className="ffqs accordion-title">
                    <Icon name="dropdown" />
                    Cancellation Policy
                  </h4>
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 8}>
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
                    FAQS
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
