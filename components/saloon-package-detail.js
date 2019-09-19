import { Segment } from "semantic-ui-react";
export default class SaloonPackage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  componentDidMount() {
    console.log(this.props.package);
  }

  changeOpen = () => {
    this.setState({
      open: !this.state.open
    });
  };

  render() {
    return this.props.package.map((value, key) => {
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
                      <h4 className="ffqs list-title">
                        {value.package_caption}
                      </h4>

                      <h4 className="ffqs fw2 fs1">
                        Price Range :{" "}
                        <span className="sfc3 fs1-1">&#8377; {lessPrice}</span>
                        {morePrice !== 0 ? (
                          <span>
                            -
                            <span className="sfc3 fs1-1">
                              &#8377; {morePrice}
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
                      <h4 className="ffqs fw2 fs1">
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
          {this.state.open ? (
            <React.Fragment>
              <Segment>
                <div className="package-container">
                  <article className="media">
                    <div className="media-content">
                      <div className="content">
                        <div className="columns mb0">
                          <div className="column is-10">
                            <h4 className="ffqs list-title">Summer Treat</h4>

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
                            Avail Any 6 services out of 9 at discounted price.
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
                            <h4 className="ffqs list-title">Summer Treat</h4>

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
                            Avail Any 6 services out of 9 at discounted price.
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
      );
    });
  }
}
