import { Segment } from "semantic-ui-react";
import "./saloon-menu.css";

export default class SaloonMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props.spaMenu);
    return (
      <React.Fragment>
        <div className="saloon-menu-container">
          <div className={this.props.saloonMenu ? "modal is-active" : "modal"}>
            <div className="modal-background" />
            <div className="modal-card">
              {/* <header className="modal-card-head">
                <h4 className="modal-card-title ffqs escape-query-title">
                  {" "}
                  {this.props.caption}
                </h4>
                <button
                  className="delete"
                  aria-label="close"
                  onClick={() => this.props.updateSaloonMenuState(false)}
                />
              </header> */}
              <section className="modal-card-body">
                <h4 className="fs1-5">Saloon</h4>
                <div class="columns">
                  <div class="column">
                    <Segment>
                      <h4 className="fw2 fs1-5 ffqs">MASSAGE</h4>
                      <div className="columns">
                        <div className="column is-6">
                          <h4
                            className="fw2 fs1-5"
                            style={{ color: "#797575" }}
                          >
                            <span> &#8377;</span> 200
                          </h4>
                        </div>
                        <div className="column is-6">
                          <div className="float-right">
                            <span
                              className="icon is-medium cursor-pointer"
                              // onClick={() =>
                              //   this.props.onClickPackageMinus(
                              //     key,
                              //     value.price_id
                              //   )
                              // }
                            >
                              <img src="https://img.icons8.com/ios/22/000000/minus.png" />
                            </span>

                            <span className="ffqs fs1-5 fw2 pl0-3 pr0-3">
                              2
                            </span>

                            <span
                              className="icon is-medium cursor-pointer"
                              // onClick={() =>
                              //   this.props.onClickPackagePlus(key, value.price_id)
                              // }
                            >
                              <img src="https://img.icons8.com/ios/22/000000/plus.png" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </Segment>
                  </div>
                  <div class="column">
                    <Segment>
                      <h4 className="fw2 fs1-5 ffqs">MASSAGE</h4>
                      <div className="columns">
                        <div className="column is-6">
                          <h4
                            className="fw2 fs1-5"
                            style={{ color: "#797575" }}
                          >
                            <span> &#8377;</span> 200
                          </h4>
                        </div>
                        <div className="column is-6">
                          <div className="float-right">
                            <span
                              className="icon is-medium cursor-pointer"
                              // onClick={() =>
                              //   this.props.onClickPackageMinus(
                              //     key,
                              //     value.price_id
                              //   )
                              // }
                            >
                              <img src="https://img.icons8.com/ios/22/000000/minus.png" />
                            </span>

                            <span className="ffqs fs1-5 fw2 pl0-3 pr0-3">
                              2
                            </span>

                            <span
                              className="icon is-medium cursor-pointer"
                              // onClick={() =>
                              //   this.props.onClickPackagePlus(key, value.price_id)
                              // }
                            >
                              <img src="https://img.icons8.com/ios/22/000000/plus.png" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </Segment>
                  </div>
                </div>
              </section>
              {/* <footer
                className="modal-card-foot"
                style={{
                  paddingLeft: "15em",
                  paddingRight: "15em"
                }}
              ></footer> */}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
