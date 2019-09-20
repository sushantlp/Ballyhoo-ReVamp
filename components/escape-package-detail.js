import { Segment, Accordion, Icon } from "semantic-ui-react";

export default class EscapePackage extends React.Component {
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
      obj.package_id = this.props.package[i].package_id;
      obj.package_caption = this.props.package[i].package_caption;
      obj.package_inclusion_types = this.props.package[
        i
      ].package_inclusion_types;
      obj.package_destinations = this.props.package[i].package_destinations;
      obj.package_inclusion = this.props.package[i].package_inclusion;
      obj.price_captions = this.props.package[i].price_captions;
      obj.price_ranges = this.props.package[i].price_ranges;
      obj.package_travel_time = this.props.package[i].package_travel_time;
      obj.price_list = [];
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
    let indexData = [];
    let packages = [];

    for (let i = 0; i < this.props.package.length; i++) {
      indexData =
        parseInt(this.props.package[i].package_id, 10) === parseInt(key, 10)
          ? this.props.package[i].price_list
          : [];

      if (indexData.length !== 0) break;
    }

    for (let i = 0; i < this.props.package.length; i++) {
      let obj = {};
      obj.package_id = this.props.package[i].package_id;
      obj.package_caption = this.props.package[i].package_caption;
      obj.package_inclusion_types = this.props.package[
        i
      ].package_inclusion_types;
      obj.package_destinations = this.props.package[i].package_destinations;
      obj.package_inclusion = this.props.package[i].package_inclusion;
      obj.price_captions = this.props.package[i].price_captions;
      obj.price_ranges = this.props.package[i].price_ranges;
      obj.package_travel_time = this.props.package[i].package_travel_time;
      obj.price_list =
        parseInt(this.props.package[i].package_id, 10) === parseInt(key, 10)
          ? indexData
          : [];
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
      let lessPrice = 0;
      let morePrice = 0;
      let inclusionType = {
        stay: false,
        travel: false,
        seeing: false,
        breakfast: false,
        activity: false
      };

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

      let priceCaptionLength = value.price_captions.length;
      if (value.price_ranges.length === 1) {
        lessPrice = value.price_ranges;
      } else if (value.price_ranges.length === 2) {
        lessPrice = value.price_ranges[0];
        morePrice = value.price_ranges[1];
      } else {
        for (let i = 0; i < value.price_ranges.length; i++) {
          lessPrice = value.price_ranges[i];
          morePrice = value.price_ranges[i];

          for (let j = i + 1; j < value.price_ranges.length; j++) {
            if (lessPrice > value.price_ranges[j]) {
              lessPrice = value.price_ranges[j];
            }
          }

          for (let j = i + 1; j < value.price_ranges.length; j++) {
            if (morePrice < value.price_ranges[j]) {
              morePrice = value.price_ranges[j];
            }
          }
        }
      }

      return (
        <Segment style={{ backgroundColor: "#f1f1f1" }} key={key}>
          <div className="box">
            <article className="media">
              <div className="media-content">
                <div className="content">
                  <div className="columns mb0">
                    <div className="column">
                      <h4 className="ffqs list-title">
                        {value.package_caption}
                      </h4>

                      <h4 className="ffqs fw2 fs1">
                        Price Range :{" "}
                        <span className="sfc3 fs1-1">&#8377;{lessPrice}</span>
                        {morePrice !== 0 ? (
                          <span>
                            -
                            <span className="sfc3 fs1-1">
                              &#8377;{morePrice}
                            </span>
                          </span>
                        ) : null}
                      </h4>
                    </div>

                    <div className="column pl8 pt0">
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
                  {value.package_travel_time != null ? (
                    <div className="columns mb0">
                      <div className="column">
                        <h4 className="ffqs fw2 fs1">
                          Travel Time :{" "}
                          <span className="fw2 fs1-1">
                            {value.package_travel_time} hrs
                          </span>
                        </h4>
                      </div>
                    </div>
                  ) : null}

                  <div className="columns mb0">
                    <div className="column">
                      <h4 className="ffqs fw2 fs1">
                        Price Caption :{" "}
                        {value.price_captions.map((value, key) => {
                          return (
                            <span className="fw2 fs1-1" key={key}>
                              {value} {"  "}{" "}
                              {priceCaptionLength === key + 1 ? "." : ","}
                            </span>
                          );
                        })}
                      </h4>
                    </div>
                  </div>

                  <div className="f14 ffqs">
                    <p style={{ whiteSpace: "pre-line" }}>
                      {value.package_inclusion}
                    </p>
                  </div>
                </div>
              </div>
            </article>

            <footer className="card-footer">
              <div className="card-footer-item">
                <span className="span-flex">
                  <span className="pr3">
                    {inclusionType.stay ? (
                      <img src="https://img.icons8.com/color/30/000000/bungalow.png" />
                    ) : (
                      <img
                        src="https://img.icons8.com/color/30/000000/bungalow.png"
                        className="blur not-allowed"
                      />
                    )}

                    <p className="f12 text-center">Stay</p>
                  </span>

                  <span className="pr3">
                    {inclusionType.travel ? (
                      <img
                        src="https://img.icons8.com/color/30/000000/around-the-globe.png"
                        style={{ paddingLeft: "0.3em" }}
                      />
                    ) : (
                      <img
                        src="https://img.icons8.com/color/30/000000/around-the-globe.png"
                        className="blur not-allowed"
                        style={{ paddingLeft: "0.3em" }}
                      />
                    )}

                    <p className="f12 text-center">Travel</p>
                  </span>

                  <span className="pr3">
                    {inclusionType.seeing ? (
                      <img
                        src="https://img.icons8.com/color/30/000000/tripadvisor.png"
                        style={{ paddingLeft: "1em" }}
                      />
                    ) : (
                      <img
                        src="https://img.icons8.com/color/30/000000/tripadvisor.png"
                        className="blur not-allowed"
                        style={{ paddingLeft: "1em" }}
                      />
                    )}

                    <p className="f12 text-center">SightSeeing</p>
                  </span>

                  <span className="pr3">
                    {inclusionType.breakfast ? (
                      <img
                        src="https://img.icons8.com/color/30/000000/sandwich.png"
                        style={{ paddingLeft: "1em" }}
                      />
                    ) : (
                      <img
                        src="https://img.icons8.com/color/30/000000/sandwich.png"
                        className="blur not-allowed"
                        style={{ paddingLeft: "1em" }}
                      />
                    )}

                    <p className="f12 text-center">BreakFast</p>
                  </span>

                  <span className="pr3">
                    {inclusionType.activity ? (
                      <img
                        src="https://img.icons8.com/color/30/000000/parachute.png"
                        style={{ paddingLeft: "0.7em" }}
                      />
                    ) : (
                      <img
                        src="https://img.icons8.com/color/30/000000/parachute.png"
                        className="blur not-allowed"
                        style={{ paddingLeft: "0.7em" }}
                      />
                    )}

                    <p className="f12 text-center">Activities</p>
                  </span>
                </span>
              </div>
            </footer>
          </div>

          {value.price_list.map((list, key) => {
            let price = 0;
            let cutPrice = 0;
            if (parseInt(list.price_discount, 10) === 0) price = list.price;
            else {
              price = (list.price * list.price_discount) / 100;
              price = list.price - price;
              cutPrice = list.price;
            }

            return (
              <Segment key={key}>
                <div className="package-container">
                  <article className="media">
                    <div className="media-content">
                      <div className="content">
                        <div className="columns mb0">
                          <div className="column is-8">
                            <h4 className="ffqs list-title">
                              {list.price_caption}
                            </h4>

                            <h5 className="fw2 sfc3 fs1-3">
                              ₹ {price}/-
                              {cutPrice === 0 ? null : (
                                <span>
                                  <span
                                    className="fw2 fs0-7 tdl ml8"
                                    style={{ color: "#363636" }}
                                  >
                                    ₹ {cutPrice}/-
                                  </span>
                                  <span className="tag is-rounded is-warning ml8">
                                    {list.price_discount}% off
                                  </span>{" "}
                                </span>
                              )}
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
                            {list.price_description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
                {list.price_inclusion != null ||
                list.price_exclusion != null ||
                list.price_accomodation != null ||
                list.price_itenary != null ||
                list.price_transportation != null ||
                list.price_terms != null ||
                list.price_faqs != null ||
                list.price_cancel_policy != null ? (
                  <Accordion styled>
                    {list.price_inclusion != null ? (
                      <React.Fragment>
                        {" "}
                        <Accordion.Title
                          active={activeIndex === 0}
                          index={0}
                          onClick={this.handleClick}
                        >
                          <h4 className="ffqs accordion-title">
                            <Icon name="dropdown" />
                            Inclusion
                          </h4>
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 0}>
                          <div className="f14 ffqs">
                            <p style={{ whiteSpace: "pre-line" }}>
                              {list.price_inclusion}
                            </p>
                          </div>
                        </Accordion.Content>
                      </React.Fragment>
                    ) : null}

                    {list.price_exclusion != null ? (
                      <React.Fragment>
                        <Accordion.Title
                          active={activeIndex === 1}
                          index={1}
                          onClick={this.handleClick}
                        >
                          <h4 className="ffqs accordion-title">
                            <Icon name="dropdown" />
                            Exclusion
                          </h4>
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 1}>
                          <div className="f14 ffqs">
                            <p style={{ whiteSpace: "pre-line" }}>
                              {list.price_exclusion}
                            </p>
                          </div>
                        </Accordion.Content>
                      </React.Fragment>
                    ) : null}

                    {list.price_accomodation != null ? (
                      <React.Fragment>
                        <Accordion.Title
                          active={activeIndex === 2}
                          index={2}
                          onClick={this.handleClick}
                        >
                          <h4 className="ffqs accordion-title">
                            <Icon name="dropdown" />
                            Accomodation
                          </h4>
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 2}>
                          <div className="f14 ffqs">
                            <p style={{ whiteSpace: "pre-line" }}>
                              {list.price_accomodation}
                            </p>
                          </div>
                        </Accordion.Content>
                      </React.Fragment>
                    ) : null}

                    {list.price_itenary != null ? (
                      <React.Fragment>
                        <Accordion.Title
                          active={activeIndex === 3}
                          index={3}
                          onClick={this.handleClick}
                        >
                          <h4 className="ffqs accordion-title">
                            <Icon name="dropdown" />
                            Itenary
                          </h4>
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 3}>
                          <div className="f14 ffqs">
                            <p style={{ whiteSpace: "pre-line" }}>
                              {list.price_itenary}
                            </p>
                          </div>
                        </Accordion.Content>
                      </React.Fragment>
                    ) : null}

                    {list.price_transportation != null ? (
                      <React.Fragment>
                        <Accordion.Title
                          active={activeIndex === 4}
                          index={4}
                          onClick={this.handleClick}
                        >
                          <h4 className="ffqs accordion-title">
                            <Icon name="dropdown" />
                            Transportation
                          </h4>
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 4}>
                          <div className="f14 ffqs">
                            <p style={{ whiteSpace: "pre-line" }}>
                              {list.price_transportation}
                            </p>
                          </div>
                        </Accordion.Content>
                      </React.Fragment>
                    ) : null}

                    {list.price_terms != null ? (
                      <React.Fragment>
                        <Accordion.Title
                          active={activeIndex === 5}
                          index={5}
                          onClick={this.handleClick}
                        >
                          <h4 className="ffqs accordion-title">
                            <Icon name="dropdown" />
                            Terms
                          </h4>
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 5}>
                          <div className="f14 ffqs">
                            <p style={{ whiteSpace: "pre-line" }}>
                              {list.price_terms}
                            </p>
                          </div>
                        </Accordion.Content>
                      </React.Fragment>
                    ) : null}

                    {list.price_faqs != null ? (
                      <React.Fragment>
                        <Accordion.Title
                          active={activeIndex === 6}
                          index={6}
                          onClick={this.handleClick}
                        >
                          <h4 className="ffqs accordion-title">
                            <Icon name="dropdown" />
                            Faqs
                          </h4>
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 6}>
                          <div className="f14 ffqs">
                            <p style={{ whiteSpace: "pre-line" }}>
                              {list.price_faqs}
                            </p>
                          </div>
                        </Accordion.Content>
                      </React.Fragment>
                    ) : null}

                    {list.price_cancel_policy != null ? (
                      <React.Fragment>
                        <Accordion.Title
                          active={activeIndex === 7}
                          index={7}
                          onClick={this.handleClick}
                        >
                          <h4 className="ffqs accordion-title">
                            <Icon name="dropdown" />
                            Cancel Policy
                          </h4>
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 7}>
                          <div className="f14 ffqs">
                            <p style={{ whiteSpace: "pre-line" }}>
                              {list.price_cancel_policy}
                            </p>
                          </div>
                        </Accordion.Content>
                      </React.Fragment>
                    ) : null}
                  </Accordion>
                ) : null}
              </Segment>
            );
          })}

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
