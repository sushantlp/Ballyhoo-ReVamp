import { Segment, Accordion, Icon } from "semantic-ui-react";
import ReadMoreAndLess from "react-read-more-less";

export default class ExculsiveEscapePackage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: -1
    };
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;

    return this.props.package.map((value, key) => {
      let price = 0;
      let cutPrice = 0;
      let inclusionType = {
        stay: false,
        travel: false,
        seeing: false,
        breakfast: false,
        activity: false
      };

      if (parseInt(value.package_discount, 10) === 0)
        price = parseInt(value.price, 10);
      else {
        price = (parseInt(value.price, 10) * value.package_discount) / 100;
        price = parseInt(value.price, 10) - price;
        cutPrice = parseInt(value.price, 10);
      }

      for (let i = 0; i < value.package_inclusion_types.length; i++) {
        if (parseInt(value.package_inclusion_types[i]) === 1)
          inclusionType.stay = true;

        if (parseInt(value.package_inclusion_types[i]) === 2)
          inclusionType.travel = true;
        if (parseInt(value.package_inclusion_types[i]) === 3)
          inclusionType.seeing = true;
        if (parseInt(value.package_inclusion_types[i]) === 4)
          inclusionType.breakfast = true;
        if (parseInt(value.package_inclusion_types[i]) === 5)
          inclusionType.activity = true;
      }

      return (
        <Segment style={{ backgroundColor: "#f1f1f1" }} key={key}>
          <div className="box">
            <article className="media">
              <div className="media-content">
                <div className="content">
                  <div className="columns mb0">
                    <div className="column is-7">
                      <h4 className="ffqs list-title">
                        {value.package_caption}
                      </h4>

                      <h5 className="fw2 ffqs fs1-3">
                        Price : <span className="sfc3">₹ {price}/-</span>
                        {cutPrice === 0 ? null : (
                          <span>
                            <span
                              className="fw2 fs0-7 tdl ml8"
                              style={{ color: "#363636" }}
                            >
                              ₹ {cutPrice}/-
                            </span>
                            <span className="tag is-rounded is-warning ml8">
                              {value.package_discount}% off
                            </span>{" "}
                          </span>
                        )}
                      </h5>
                    </div>

                    <div className="column is-5 pl8 pt0">
                      <div className="package-tag-box">
                        <ul className="package-tags">
                          {value.package_destinations.map((value, key) => {
                            return (
                              <li className="ellipsis" key={key}>
                                {value}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="columns mb0">
                    <div className="column">
                      <h4 className="ffqs fw2">
                        Travel Duration :{" "}
                        <span className="tag is-rounded is-danger">
                          {value.package_travel_time} hours
                        </span>
                      </h4>
                    </div>
                  </div>

                  <div className="f14 ffqs">
                    <p style={{ whiteSpace: "pre-line" }}>
                      <ReadMoreAndLess
                        ref={this.ReadMore}
                        className="read-more-content"
                        charLimit={300}
                        readMoreText="See more"
                        readLessText="See less"
                      >
                        {value.package_description}
                      </ReadMoreAndLess>
                    </p>
                  </div>
                </div>
              </div>
            </article>

            <footer className="card-footer">
              <div className="card-footer-item">
                <span className="span-flex">
                  <span className="pr2">
                    {inclusionType.stay ? (
                      <img src="https://img.icons8.com/color/25/000000/bungalow.png" />
                    ) : (
                      <img
                        src="https://img.icons8.com/color/25/000000/bungalow.png"
                        className="blur not-allowed"
                      />
                    )}
                    <p className="f12 text-center">Stay</p>
                  </span>

                  <span className="pr2">
                    {inclusionType.travel ? (
                      <img
                        src="https://img.icons8.com/color/25/000000/around-the-globe.png"
                        style={{ paddingLeft: "0.3em" }}
                      />
                    ) : (
                      <img
                        src="https://img.icons8.com/color/25/000000/around-the-globe.png"
                        className="blur not-allowed"
                        style={{ paddingLeft: "0.3em" }}
                      />
                    )}
                    <p className="f12 text-center">Travel</p>
                  </span>

                  <span className="pr2">
                    {inclusionType.seeing ? (
                      <img
                        src="https://img.icons8.com/color/25/000000/tripadvisor.png"
                        style={{ paddingLeft: "1.2em" }}
                      />
                    ) : (
                      <img
                        src="https://img.icons8.com/color/25/000000/tripadvisor.png"
                        className="blur not-allowed"
                        style={{ paddingLeft: "1.2em" }}
                      />
                    )}
                    <p className="f12 text-center">SightSeeing</p>
                  </span>

                  <span className="pr2">
                    {inclusionType.breakfast ? (
                      <img
                        src="https://img.icons8.com/color/25/000000/sandwich.png"
                        style={{ paddingLeft: "0.7em" }}
                      />
                    ) : (
                      <img
                        src="https://img.icons8.com/color/25/000000/sandwich.png"
                        className="blur not-allowed"
                        style={{ paddingLeft: "0.7em" }}
                      />
                    )}
                    <p className="f12 text-center">BreakFast</p>
                  </span>

                  <span className="pr2">
                    {inclusionType.activity ? (
                      <img
                        src="https://img.icons8.com/color/25/000000/parachute.png"
                        style={{ paddingLeft: "0.8em" }}
                      />
                    ) : (
                      <img
                        src="https://img.icons8.com/color/25/000000/parachute.png"
                        className="blur not-allowed"
                        style={{ paddingLeft: "0.8em" }}
                      />
                    )}
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

                <h4 className="ffqs mt0-5 fs1-2 fw5 mb1">Transportation : </h4>

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
                    cauvery/ Brahmagiri range of Coorg. It lies to the south of
                    Bhagamandala in a range
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
                    cauvery/ Brahmagiri range of Coorg. It lies to the south of
                    Bhagamandala in a range
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
                    cauvery/ Brahmagiri range of Coorg. It lies to the south of
                    Bhagamandala in a range
                  </p>
                </div>
              </Accordion.Content>
            </Accordion>
          </Segment>
        </Segment>
      );
    });
  }
}
