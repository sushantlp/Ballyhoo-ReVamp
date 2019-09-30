import moment from "moment";
import ReadMoreAndLess from "react-read-more-less";
import { Segment } from "semantic-ui-react";
export default class EventPackage extends React.Component {
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
    let packages = this.props.package.map((list, key) => {
      let obj = {};
      obj.package_date_id = list.package_date_id;
      obj.package_end_date = list.package_end_date;
      obj.package_end_time = list.package_end_time;
      obj.package_start_date = list.package_start_date;
      obj.package_start_time = list.package_start_time;
      obj.package_list = this.createPackageList(list.package_list, []);

      return obj;
    });
    this.changePackageState(packages);
  }

  createPackageList = (lists, price, packageId) => {
    return lists.map((list, key) => {
      let obj = {};
      obj.package_caption = list.package_caption;
      obj.package_hash_tags = list.package_hash_tags;
      obj.package_id = list.package_id;
      obj.package_inclusion = list.package_inclusion;
      obj.price_captions = list.price_captions;
      obj.price_ranges = list.price_ranges;
      obj.price_list =
        parseInt(list.package_id, 10) === parseInt(packageId, 10) ? price : [];
      return obj;
    });
  };

  changePackageState = packages => {
    this.setState({
      packages
    });
  };

  initializePriceList = (dateId, packageId) => {
    let indexData = [];

    if (parseInt(this.state.toggle.index, 10) === parseInt(dateId, 10)) {
      if (this.state.toggle.door) {
        indexData = [];
      } else {
        for (let i = 0; i < this.props.package.length; i++) {
          if (
            parseInt(this.props.package[i].package_date_id, 10) ===
            parseInt(dateId, 10)
          ) {
            for (
              let j = 0;
              j < this.props.package[i].package_list.length;
              j++
            ) {
              indexData =
                parseInt(
                  this.props.package[i].package_list[j].package_id,
                  10
                ) === parseInt(packageId, 10)
                  ? this.props.package[i].package_list[j].price_list
                  : [];

              if (indexData.length !== 0) break;
            }
          }
        }
      }
    } else {
      for (let i = 0; i < this.props.package.length; i++) {
        if (
          parseInt(this.props.package[i].package_date_id, 10) ===
          parseInt(dateId, 10)
        ) {
          for (let j = 0; j < this.props.package[i].package_list.length; j++) {
            indexData =
              parseInt(this.props.package[i].package_list[j].package_id, 10) ===
              parseInt(packageId, 10)
                ? this.props.package[i].package_list[j].price_list
                : [];

            if (indexData.length !== 0) break;
          }
        }
      }
    }

    this.setState(
      {
        toggle: {
          index: dateId,
          door: !this.state.toggle.door
        }
      },
      function() {
        this.toggleCallback(packageId, indexData);
      }
    );
  };

  toggleCallback = (packageId, indexData) => {
    let packages = this.props.package.map((list, key) => {
      let obj = {};
      obj.package_date_id = list.package_date_id;
      obj.package_end_date = list.package_end_date;
      obj.package_end_time = list.package_end_time;
      obj.package_start_date = list.package_start_date;
      obj.package_start_time = list.package_start_time;
      obj.package_list = this.createPackageList(
        list.package_list,
        indexData,
        packageId
      );

      return obj;
    });

    this.changePackageState(packages);
  };

  render() {
    return this.state.packages.map((value, key) => {
      let lessPrice = 0;
      let morePrice = 0;
      let beautyDate;
      if (value.package_start_date != null && value.package_end_date != null) {
        const start = moment(value.package_start_date).format("MMM D");
        const end = moment(value.package_end_date).format("MMM D");
        beautyDate = `${start}  -  ${end}`;
      } else {
        const start = moment(value.package_start_date).format("MMM D");
        beautyDate = start;
      }

      return (
        <Segment style={{ backgroundColor: "#f1f1f1" }} key={key}>
          <a className="button is-warning view-detail ffqs is-dark">
            <span>{beautyDate}</span>
          </a>

          {value.package_list.map((list, key) => {
            if (list.price_ranges.length === 1) {
              lessPrice = list.price_ranges;
            } else if (list.price_ranges.length === 2) {
              lessPrice = list.price_ranges[0];
              morePrice = list.price_ranges[1];
            } else {
              for (let i = 0; i < list.price_ranges.length; i++) {
                if (i === 0) {
                  lessPrice = list.price_ranges[i];
                  morePrice = list.price_ranges[i];
                }
                for (let j = i; j < list.price_ranges.length; j++) {
                  if (lessPrice > list.price_ranges[j])
                    lessPrice = list.price_ranges[j];
                }

                for (let j = i; j < list.price_ranges.length; j++) {
                  if (morePrice < list.price_ranges[j])
                    morePrice = list.price_ranges[j];
                }
              }
            }

            return (
              <React.Fragment key={key}>
                <div className="box">
                  <article className="media">
                    <div className="media-content">
                      <div className="content">
                        <div className="columns mb0">
                          <div className="column">
                            <h4 className="ffqs list-title">
                              {list.package_caption}
                            </h4>

                            <h4 className="fw2 fs1">
                              Price Range : {"  "}
                              <span
                                className="fs1-1"
                                style={{ color: "#635f5f" }}
                              >
                                {"  "}
                                &#8377; {lessPrice}
                              </span>
                              {morePrice !== 0 ? (
                                <span>
                                  {"  "}-{"  "}
                                  <span
                                    className="fs1-1"
                                    style={{ color: "#635f5f" }}
                                  >
                                    &#8377; {morePrice}
                                  </span>
                                </span>
                              ) : null}
                            </h4>
                          </div>

                          <div className="column pl8 pt0">
                            <div className="package-tag-box">
                              <ul className="package-tags">
                                {list.package_hash_tags.map((value, key) => {
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
                              Price Caption : {"  "}
                              {list.price_captions.map((value, key) => {
                                return (
                                  <span className="fw2 fs1-1" key={key}>
                                    {value}
                                  </span>
                                );
                              })}
                            </h4>
                          </div>
                        </div>

                        <div
                          className="f14 ffqs plh1"
                          style={{ whiteSpace: "pre-line" }}
                        >
                          <ReadMoreAndLess
                            ref={this.ReadMore}
                            className="read-more-content"
                            charLimit={100}
                            readMoreText="See more"
                            readLessText="See less"
                          >
                            {list.package_inclusion}
                          </ReadMoreAndLess>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>

                {list.price_list.map((money, key) => {
                  let price = 0;
                  let cutPrice = 0;
                  if (parseInt(money.price_discount, 10) === 0)
                    price = money.price;
                  else {
                    price = (money.price * money.price_discount) / 100;
                    price = money.price - price;
                    cutPrice = money.price;
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
                                    {money.price_caption}
                                  </h4>

                                  <h5
                                    className="fw2 mt0-5 fs1-3"
                                    style={{ color: "#635f5f" }}
                                  >
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
                                          {money.price_discount}% off
                                        </span>{" "}
                                      </span>
                                    )}
                                  </h5>
                                </div>

                                <div className="column is-2">
                                  <a className="button is-danger fr" disabled>
                                    BOOK
                                  </a>
                                </div>
                              </div>

                              <div
                                className="f14 ffqs plh1"
                                style={{ whiteSpace: "pre-line" }}
                              >
                                <ReadMoreAndLess
                                  ref={this.ReadMore}
                                  className="read-more-content"
                                  charLimit={100}
                                  readMoreText="See more"
                                  readLessText="See less"
                                >
                                  {money.price_inclusion}
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
                  onClick={() =>
                    this.initializePriceList(
                      value.package_date_id,
                      list.package_id
                    )
                  }
                >
                  <span>VIEW DETAILS</span>
                </a>
              </React.Fragment>
            );
          })}
        </Segment>
      );
    });
  }
}
