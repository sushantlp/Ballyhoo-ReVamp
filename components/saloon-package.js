import { Segment, Accordion, Icon } from "semantic-ui-react";
import "./saloon-package.css";

export default class SaloonPackage extends React.Component {
  // const SaloonPackage = props => {

  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;
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
                              <span className="fw2 mt0-5 fs1-2">
                                {" "}
                                6 Services
                              </span>
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
                {this.props.open ? (
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
                  onClick={() => this.props.changeOpen()}
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

                {this.props.open ? (
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
                  onClick={() => this.props.changeOpen()}
                >
                  <span>VIEW DETAILS</span>
                </a>
              </Segment>

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
                              <h4 className="ffqs list-title">
                                Open Mic Night
                              </h4>

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
                              This one is all about you: You're on stage, You
                              take over with your music, dance, beat box, spoken
                              word, poetry.
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

                                    <h5 className="fw2 sfc3 mt0-5 fs1-3">
                                      ₹ 300.00/-
                                    </h5>
                                  </div>

                                  <div className="column is-2">
                                    <a className="button is-danger fr">BOOK</a>
                                  </div>
                                </div>

                                <div className="f14 ffqs">
                                  <p style={{ whiteSpace: "pre-line" }}>
                                    What we have at the venue (Tech Stuff): 1 *
                                    Guitar Amplifier 3 * Mics 1 * 5 piece Drum
                                    Kit.
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
                    onClick={() => this.props.changeOpen()}
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
                              <h4 className="ffqs list-title">
                                Open Mic Night
                              </h4>

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
                              This one is all about you: You're on stage, You
                              take over with your music, dance, beat box, spoken
                              word, poetry.
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

                                    <h5 className="fw2 sfc3 mt0-5 fs1-3">
                                      ₹ 300.00/-
                                    </h5>
                                  </div>

                                  <div className="column is-2">
                                    <a className="button is-danger fr">BOOK</a>
                                  </div>
                                </div>

                                <div className="f14 ffqs">
                                  <p style={{ whiteSpace: "pre-line" }}>
                                    What we have at the venue (Tech Stuff): 1 *
                                    Guitar Amplifier 3 * Mics 1 * 5 piece Drum
                                    Kit.
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
                    onClick={() => this.props.changeOpen()}
                  >
                    <span>VIEW DETAILS</span>
                  </a>
                </Segment>
              </Segment>

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
                              <span className="sfc3 mt0-5 fs1-3">
                                {" "}
                                &#8377; 3500.00
                              </span>
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
                            Nishane motte is a relatively less known peak in the
                            Tala cauvery/ Brahmagiri range of Coorg. It lies to
                            the south of Bhagamandala in a range
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>

                  <footer className="card-footer">
                    <div className="card-footer-item">
                      <span className="span-flex">
                        <span className="pr3">
                          {/* <img src="https://img.icons8.com/color/25/000000/3-star-hotel.png" /> */}
                          <img src="https://img.icons8.com/color/40/000000/bungalow.png" />
                          <p className="f12 text-center">Stay</p>
                        </span>

                        <span className="pr3">
                          <img
                            src="https://img.icons8.com/color/40/000000/around-the-globe.png"
                            style={{ paddingLeft: "0.3em" }}
                          />
                          <p className="f12 text-center">Travel</p>
                        </span>

                        <span className="pr3">
                          <img
                            src="https://img.icons8.com/color/40/000000/tripadvisor.png"
                            style={{ paddingLeft: "0.7em" }}
                          />
                          <p className="f12 text-center">SightSeeing</p>
                        </span>

                        <span className="pr3">
                          <img
                            src="https://img.icons8.com/color/40/000000/sandwich.png"
                            style={{ paddingLeft: "0.7em" }}
                          />
                          <p className="f12 text-center">BreakFast</p>
                        </span>

                        <span className="pr3">
                          <img
                            src="https://img.icons8.com/color/40/000000/parachute.png"
                            // style={{ paddingLeft: "0.8em" }}
                          />
                          <p className="f12 text-center">Activities</p>
                        </span>
                      </span>
                    </div>
                    {/* 
                  <div className="card-footer-item">
                    <a className="button is-medium">
                      <span className="icon">
                        <img src="https://img.icons8.com/bubbles/50/000000/visible.png" />
                      </span>
                      <span>View Detail</span>
                    </a>
                  </div> */}
                  </footer>
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
                                  <a className="button is-danger fr">
                                    SEND OUERY
                                  </a>
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
                          {/* Overview */}
                          <h4 className="ffqs accordion-title">
                            <Icon name="dropdown" />
                            Overview
                          </h4>
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 0}>
                          <div className="f14 ffqs">
                            <p style={{ whiteSpace: "pre-line" }}>
                              Nishane motte is a relatively less known peak in
                              the Tala cauvery/ Brahmagiri range of Coorg. It
                              lies to the south of Bhagamandala in a range
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
                              Nishane motte is a relatively less known peak in
                              the Tala cauvery/ Brahmagiri range of Coorg. It
                              lies to the south of Bhagamandala in a range
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
                              Nishane motte is a relatively less known peak in
                              the Tala cauvery/ Brahmagiri range of Coorg. It
                              lies to the south of Bhagamandala in a range
                            </p>
                          </div>
                        </Accordion.Content>
                      </Accordion>
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
                                  <a className="button is-danger fr">
                                    SEND OUERY
                                  </a>
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
                          active={activeIndex === 3}
                          index={3}
                          onClick={this.handleClick}
                        >
                          {/* Overview */}
                          <h4 className="ffqs accordion-title">
                            <Icon name="dropdown" />
                            Overview
                          </h4>
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 3}>
                          <div className="f14 ffqs">
                            <p style={{ whiteSpace: "pre-line" }}>
                              Nishane motte is a relatively less known peak in
                              the Tala cauvery/ Brahmagiri range of Coorg. It
                              lies to the south of Bhagamandala in a range
                            </p>
                          </div>
                        </Accordion.Content>

                        <Accordion.Title
                          active={activeIndex === 4}
                          index={4}
                          onClick={this.handleClick}
                        >
                          <h4 className="ffqs accordion-title">
                            <Icon name="dropdown" />
                            Inclusion
                          </h4>
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 4}>
                          <div className="f14 ffqs">
                            <p style={{ whiteSpace: "pre-line" }}>
                              Nishane motte is a relatively less known peak in
                              the Tala cauvery/ Brahmagiri range of Coorg. It
                              lies to the south of Bhagamandala in a range
                            </p>
                          </div>
                        </Accordion.Content>

                        <Accordion.Title
                          active={activeIndex === 5}
                          index={5}
                          onClick={this.handleClick}
                        >
                          <h4 className="ffqs accordion-title">
                            <Icon name="dropdown" />
                            Terms and Condition
                          </h4>
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 5}>
                          <div className="f14 ffqs">
                            <p style={{ whiteSpace: "pre-line" }}>
                              Nishane motte is a relatively less known peak in
                              the Tala cauvery/ Brahmagiri range of Coorg. It
                              lies to the south of Bhagamandala in a range
                            </p>
                          </div>
                        </Accordion.Content>
                      </Accordion>
                    </Segment>
                  </React.Fragment>
                ) : null}

                <a
                  className="button is-outlined view-detail ffqs is-dark"
                  onClick={() => this.props.changeOpen()}
                >
                  <span>VIEW DETAILS</span>
                </a>
              </Segment>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

// export default SaloonPackage;
