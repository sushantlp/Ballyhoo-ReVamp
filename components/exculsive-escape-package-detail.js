import { Segment, Accordion, Icon } from "semantic-ui-react";
import ReadMoreAndLess from "react-read-more-less";

export default class ExculsiveEscapePackage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: -1,
      packages: []
    };
  }

  componentDidMount() {
    let packages = [];
    for (let i = 0; i < this.props.package.length; i++) {
      let obj = {};

      obj.package_available = this.props.package[i].package_available;
      obj.package_caption = this.props.package[i].package_caption;
      obj.package_destinations = this.props.package[i].package_destinations;
      obj.package_description = this.props.package[i].package_description;
      obj.package_discount = this.props.package[i].package_discount;
      obj.package_id = this.props.package[i].package_id;
      obj.package_inclusion_types = this.props.package[
        i
      ].package_inclusion_types;
      obj.package_travel_time = this.props.package[i].package_travel_time;
      obj.price = this.props.package[i].price;

      obj.package_cancel_policy = null;
      obj.package_accomodation = null;
      obj.package_inclusion = null;
      obj.package_terms = null;
      obj.package_transportation = null;
      obj.package_itenary = null;
      obj.package_faqs = null;
      obj.package_exclusion = null;

      packages.push(obj);
    }
    this.changePackageState(packages);
  }

  changePackageState = packages => {
    this.setState({
      packages
    });
  };

  initializePriceList = key => {
    let packages = [];

    for (let i = 0; i < this.props.package.length; i++) {
      let obj = {};
      obj.package_available = this.props.package[i].package_available;
      obj.package_caption = this.props.package[i].package_caption;
      obj.package_destinations = this.props.package[i].package_destinations;
      obj.package_description = this.props.package[i].package_description;
      obj.package_discount = this.props.package[i].package_discount;
      obj.package_id = this.props.package[i].package_id;
      obj.package_inclusion_types = this.props.package[
        i
      ].package_inclusion_types;
      obj.package_travel_time = this.props.package[i].package_travel_time;
      obj.price = this.props.package[i].price;

      if (
        parseInt(this.props.package[i].package_id, 10) === parseInt(key, 10)
      ) {
        obj.package_cancel_policy = this.props.package[i].package_cancel_policy;
        obj.package_accomodation = this.props.package[i].package_accomodation;
        obj.package_inclusion = this.props.package[i].package_inclusion;
        obj.package_terms = this.props.package[i].package_terms;
        obj.package_transportation = this.props.package[
          i
        ].package_transportation;
        obj.package_itenary = this.props.package[i].package_itenary;
        obj.package_faqs = this.props.package[i].package_faqs;
        obj.package_exclusion = this.props.package[i].package_exclusion;
      } else {
        obj.package_cancel_policy = null;
        obj.package_accomodation = null;
        obj.package_inclusion = null;
        obj.package_terms = null;
        obj.package_transportation = null;
        obj.package_itenary = null;
        obj.package_faqs = null;
        obj.package_exclusion = null;
      }

      packages.push(obj);
    }

    this.changePackageState(packages);
  };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;

    return this.state.packages.map((value, key) => {
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

                  <div className="f14 ffqs" style={{ whiteSpace: "pre-line" }}>
                    <ReadMoreAndLess
                      ref={this.ReadMore}
                      className="read-more-content"
                      charLimit={300}
                      readMoreText="See more"
                      readLessText="See less"
                    >
                      {value.package_description}
                    </ReadMoreAndLess>
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

          {value.package_inclusion != null ||
          value.package_exclusion != null ||
          value.package_accomodation != null ||
          value.package_itenary != null ||
          value.package_transportation != null ||
          value.package_terms != null ||
          value.package_faqs != null ||
          value.package_cancel_policy != null ||
          value.package_inclusion != null ? (
            <Segment>
              <Accordion styled>
                <Accordion.Title
                  active={activeIndex === 1}
                  index={1}
                  onClick={this.handleClick}
                >
                  <h4 className="ffqs accordion-title">
                    <Icon name="dropdown" />
                    Package Detail
                  </h4>
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 1}>
                  <h4 className="ffqs mt0-5 fs1-2 fw7 mb1">Itenary : </h4>

                  <p style={{ whiteSpace: "pre-line" }} className="fw2 ffqs">
                    {value.package_itenary}
                  </p>

                  <h4 className="ffqs mt0-5 fs1-2 fw7 mb1">Inclusion : </h4>

                  <p style={{ whiteSpace: "pre-line" }} className="fw2 ffqs">
                    {value.package_inclusion}
                  </p>

                  <h4 className="ffqs mt0-5 fs1-2 fw7 mb1">Exclusion : </h4>

                  <p style={{ whiteSpace: "pre-line" }} className="fw2 ffqs">
                    {value.package_exclusion}
                  </p>

                  <h4 className="ffqs mt0-5 fs1-2 fw7 mb1">Accommodation : </h4>

                  <p style={{ whiteSpace: "pre-line" }} className="fw2 ffqs">
                    {value.package_accomodation}
                  </p>

                  <h4 className="ffqs mt0-5 fs1-2 fw7 mb1">
                    Transportation :{" "}
                  </h4>

                  <p style={{ whiteSpace: "pre-line" }} className="fw2 ffqs">
                    {value.package_transportation}
                  </p>
                </Accordion.Content>

                {value.package_terms != null ? (
                  <React.Fragment>
                    <Accordion.Title
                      active={activeIndex === 2}
                      index={2}
                      onClick={this.handleClick}
                    >
                      <h4 className="ffqs accordion-title">
                        <Icon name="dropdown" />
                        Terms
                      </h4>
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 2}>
                      <div className="f14 ffqs">
                        <p style={{ whiteSpace: "pre-line" }}>
                          {value.package_terms}
                        </p>
                      </div>
                    </Accordion.Content>
                  </React.Fragment>
                ) : null}

                {value.package_cancel_policy != null ? (
                  <React.Fragment>
                    <Accordion.Title
                      active={activeIndex === 3}
                      index={3}
                      onClick={this.handleClick}
                    >
                      <h4 className="ffqs accordion-title">
                        <Icon name="dropdown" />
                        Cancellation Policy
                      </h4>
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 3}>
                      <div className="f14 ffqs">
                        <p style={{ whiteSpace: "pre-line" }}>
                          {value.package_cancel_policy}
                        </p>
                      </div>
                    </Accordion.Content>
                  </React.Fragment>
                ) : null}

                {value.package_faqs != null ? (
                  <React.Fragment>
                    <Accordion.Title
                      active={activeIndex === 4}
                      index={4}
                      onClick={this.handleClick}
                    >
                      <h4 className="ffqs accordion-title">
                        <Icon name="dropdown" />
                        Faqs
                      </h4>
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 4}>
                      <div className="f14 ffqs">
                        <p style={{ whiteSpace: "pre-line" }}>
                          {value.package_faqs}
                        </p>
                      </div>
                    </Accordion.Content>
                  </React.Fragment>
                ) : null}
              </Accordion>
            </Segment>
          ) : null}

          <a
            className="button is-outlined view-detail ffqs is-dark"
            onClick={() => this.initializePriceList(value.package_id)}
          >
            <span>VIEW DETAILS</span>
          </a>
        </Segment>
      );
    });
  }
}
