import ReadMoreAndLess from "react-read-more-less";
import { Segment } from "semantic-ui-react";
export default class ActivityPackage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      packages: [],
      toggle: {
        index: -1,
        door: false
      }
    };
  }

  componentDidMount() {
    let packages = [];
    for (let i = 0; i < this.props.package.length; i++) {
      let obj = {};
      obj.package_id = this.props.package[i].package_id;
      obj.package_caption = this.props.package[i].package_caption;
      obj.package_hash_tags = this.props.package[i].package_hash_tags;
      obj.package_inclusion = this.props.package[i].package_inclusion;
      obj.price_captions = this.props.package[i].price_captions;
      obj.price_ranges = this.props.package[i].price_ranges;
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

    if (parseInt(this.state.toggle.index, 10) === parseInt(key, 10)) {
      if (this.state.toggle.door) {
        indexData = [];
      } else {
        for (let i = 0; i < this.props.package.length; i++) {
          indexData =
            parseInt(this.props.package[i].package_id, 10) === parseInt(key, 10)
              ? this.props.package[i].price_list
              : [];

          if (indexData.length !== 0) break;
        }
      }
    } else {
      for (let i = 0; i < this.props.package.length; i++) {
        indexData =
          parseInt(this.props.package[i].package_id, 10) === parseInt(key, 10)
            ? this.props.package[i].price_list
            : [];

        if (indexData.length !== 0) break;
      }
    }

    this.setState(
      {
        toggle: {
          index: key,
          door: !this.state.toggle.door
        }
      },
      function() {
        this.toggleCallback(key, indexData);
      }
    );
  };

  toggleCallback = (key, indexData) => {
    let packages = [];
    for (let i = 0; i < this.props.package.length; i++) {
      let obj = {};
      obj.package_id = this.props.package[i].package_id;
      obj.package_caption = this.props.package[i].package_caption;
      obj.package_hash_tags = this.props.package[i].package_hash_tags;
      obj.package_inclusion = this.props.package[i].package_inclusion;
      obj.price_captions = this.props.package[i].price_captions;
      obj.price_ranges = this.props.package[i].price_ranges;
      obj.price_list =
        parseInt(this.props.package[i].package_id, 10) === parseInt(key, 10)
          ? indexData
          : [];
      packages.push(obj);
    }

    this.changePackageState(packages);
  };

  render() {
    const buttonBlock =
      parseInt(this.props.expiry, 10) === 1
        ? true
        : parseInt(this.props.purchaseStatus, 10) === 0
        ? true
        : false;
    return this.state.packages.map((value, key) => {
      let lessPrice = 0;
      let morePrice = 0;
      const priceCaptionLength = value.price_captions.length;
      if (value.price_ranges.length === 1) {
        lessPrice = value.price_ranges;
      } else if (value.price_ranges.length === 2) {
        lessPrice = value.price_ranges[0];
        morePrice = value.price_ranges[1];
      } else {
        for (let i = 0; i < value.price_ranges.length; i++) {
          if (i === 0) {
            lessPrice = value.price_ranges[i];
            morePrice = value.price_ranges[i];
          }
          for (let j = i + 1; j < value.price_ranges.length; j++) {
            if (lessPrice > value.price_ranges[j])
              lessPrice = value.price_ranges[j];
          }

          for (let j = i + 1; j < value.price_ranges.length; j++) {
            if (morePrice < value.price_ranges[j])
              morePrice = value.price_ranges[j];
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
                      <h4 className="list-title">{value.package_caption}</h4>

                      <h4 className="fw2 fs1">
                        <span className="ffqs fs1-3 fw2">
                          Price Range :{"  "}
                        </span>
                        <span className="fs1-3 fw2">
                          &#8377;{"  "}
                          {lessPrice}
                        </span>
                        {morePrice !== 0 ? (
                          <span>
                            {"  "} - {"  "}
                            <span className="fs1-3 fw2">
                              &#8377; {"  "}
                              {morePrice}
                            </span>
                          </span>
                        ) : null}
                      </h4>
                    </div>

                    <div className="column pl8 pt0">
                      <div className="package-tag-box">
                        <ul className="package-tags">
                          {value.package_hash_tags.map((value, key) => {
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
                      <h4 className="fw2 fs1">
                        <span className="ffqs fs1-3 fw2">
                          Price Caption :{"  "}{" "}
                        </span>
                        {value.price_captions.map((value, key) => {
                          return (
                            <span className="fw2 fs1-3 plh1" key={key}>
                              {value} {"  "}
                              {"  "}
                              {priceCaptionLength === key + 1 ? ". " : ", "}
                              {"  "}
                            </span>
                          );
                        })}
                      </h4>
                    </div>
                  </div>
                  <div
                    className="fs1-1 ffqs plh1"
                    style={{ whiteSpace: "pre-line" }}
                  >
                    <ReadMoreAndLess
                      ref={this.ReadMore}
                      className="read-more-content"
                      charLimit={100}
                      readMoreText="See more"
                      plh1
                      readLessText="See less"
                    >
                      {value.package_inclusion}
                    </ReadMoreAndLess>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {value.price_list.map((value, key) => {
            let price = 0;
            let cutPrice = 0;
            if (parseInt(value.price_discount, 10) === 0) price = value.price;
            else {
              price = (value.price * value.price_discount) / 100;
              price = value.price - price;
              cutPrice = value.price;
            }
            return (
              <Segment key={key}>
                <div className="package-container">
                  <article className="media">
                    <div className="media-content">
                      <div className="content">
                        <div className="columns mb0">
                          <div className="column is-10">
                            <h4 className="ffqs list-title">
                              {value.price_caption}
                            </h4>

                            <h5 className="fw2 mt0-5 fs1-3">
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
                                    {value.price_discount}% off
                                  </span>{" "}
                                </span>
                              )}
                            </h5>
                          </div>

                          <div className="column is-2">
                            {buttonBlock ? (
                              <a className="button is-danger fr" disabled>
                                BOOK
                              </a>
                            ) : (
                              <a className="button is-danger fr">BOOK</a>
                            )}
                          </div>
                        </div>

                        <div
                          className="fs1-1 ffqs plh1"
                          style={{ whiteSpace: "pre-line" }}
                        >
                          <ReadMoreAndLess
                            ref={this.ReadMore}
                            className="read-more-content"
                            charLimit={100}
                            readMoreText="See more"
                            readLessText="See less"
                          >
                            {value.price_inclusion}
                          </ReadMoreAndLess>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
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
