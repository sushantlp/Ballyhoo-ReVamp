import { Segment } from "semantic-ui-react";
export default class ActivityPackage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      packages: []
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
    let packages = [];

    for (let i = 0; i < this.props.package.length; i++) {
      indexData =
        parseInt(this.props.package[i].package_id, 10) === parseInt(key, 10)
          ? this.props.package[i].price_list
          : [];
    }

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
    return this.state.packages.map((value, key) => {
      let lessPrice = 0;
      let morePrice = 0;
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
                      <h4 className="list-title">{value.package_caption}</h4>

                      <h4 className="fw2 fs1">
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
                        Price Caption :{" "}
                        {value.price_captions.map((value, key) => {
                          return (
                            <span className="fw2 fs1-1" key={key}>
                              {value} {"  "}
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

                            <h5 className="fw2 sfc3 mt0-5 fs1-3">
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
                            <a className="button is-danger fr">BOOK</a>
                          </div>
                        </div>

                        <div className="f14 ffqs">
                          <p style={{ whiteSpace: "pre-line" }}>
                            {value.price_inclusion}
                          </p>
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
