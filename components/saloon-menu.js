import { Segment } from "semantic-ui-react";

import "./saloon-menu.css";

export default class SaloonMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: [],
      api_menus: [],
      skipLoading: false,
      proccedLoading: false
    };
  }

  componentDidMount() {
    const menus = this.props.spaMenu.data.categories.map((menu, key) => {
      let obj = {};
      obj.title = menu.category_title;
      obj.items = menu.items.map((item, key) => {
        let obj = {};
        obj.item_id = item.item_id;
        obj.item_name = item.item_name;
        obj.description = item.description;
        obj.price = item.price;
        obj.additional_charge = item.additional_charge;
        obj.quantity = 0;

        return obj;
      });

      return obj;
    });

    this.setState({
      menus
    });
  }

  onClickAdd = (itemId, key, unique, price, name) => {
    let menus = this.state.menus;
    let apiMenu = this.state.api_menus;
    menus[key].items[unique].quantity = 1;

    const obj = {
      item_id: itemId,
      quantity: 1,
      price: price,
      name: name
    };

    apiMenu.push(obj);
    this.setState({
      menus,
      api_menus: apiMenu
    });
  };

  onClickMinus = (itemId, key, unique) => {
    let menus = this.state.menus;
    let apiMenu = this.state.api_menus;
    let index = 0;
    for (let i = 0; i < apiMenu.length; i++) {
      if (itemId === apiMenu[i].item_id) {
        index = i;
        break;
      }
    }

    if (menus[key].items[unique].quantity === 1) {
      apiMenu.splice(index, 1);
      menus[key].items[unique].quantity = menus[key].items[unique].quantity - 1;
    } else {
      menus[key].items[unique].quantity = menus[key].items[unique].quantity - 1;
      apiMenu[index].quantity = apiMenu[index].quantity - 1;
    }

    this.setState({
      menus,
      api_menus: apiMenu
    });
  };

  onClickPlus = (itemId, key, unique) => {
    let menus = this.state.menus;
    let apiMenu = this.state.api_menus;
    let index = 0;
    for (let i = 0; i < apiMenu.length; i++) {
      if (itemId === apiMenu[i].item_id) {
        index = i;
        break;
      }
    }

    menus[key].items[unique].quantity = menus[key].items[unique].quantity + 1;
    apiMenu[index].quantity = apiMenu[index].quantity + 1;

    this.setState({
      menus,
      api_menus: apiMenu
    });
  };

  onClickSkip = () => {
    this.setState({
      skipLoading: true
    });
    this.props.routeChange("/checkout");
  };

  onClickProcced = () => {
    this.setState({
      proccedLoading: true
    });

    let appointment = sessionStorage.getItem("SPA_APPOINTMENT");
    appointment = JSON.parse(appointment);

    appointment = {
      partner_id: appointment.partner_id,
      name: appointment.name,
      customer_id: appointment.customer_id,
      customer_mobile: appointment.customer_mobile,
      customer_email: appointment.customer_email,
      date: appointment.date,
      time: appointment.time,
      display_time: appointment.display_time,
      display_date: appointment.display_date,
      menu: this.state.api_menus
    };

    sessionStorage.setItem("SPA_APPOINTMENT", JSON.stringify(appointment));
    this.props.routeChange("/checkout");
  };

  render() {
    if (this.state.menus.length === 0) return null;

    return (
      <React.Fragment>
        <div className="saloon-menu-container">
          <div className={this.props.saloonMenu ? "modal is-active" : "modal"}>
            <div className="modal-background" />
            <div className="modal-card">
              <section className="modal-card-body">
                {this.state.menus.map((menu, key) => {
                  return (
                    <React.Fragment key={key}>
                      <h4 className="fs2em fw2 ffqs">{menu.title}</h4>

                      {menu.items.map((item, unique) => {
                        // for (let i = 2; i < key; i++) {
                        //   key % i === 0 || key < 1? : ;
                        // }
                        return (
                          <div className="columns" key={unique}>
                            <div className="column">
                              <Segment>
                                <h4 className="fw2 fs1-5 ffqs">
                                  {item.item_name}
                                </h4>

                                <h4 className="fw2 ffqs mt1em">
                                  {item.description}
                                </h4>
                                <div className="columns">
                                  <div className="column is-6">
                                    <h4
                                      className="fw2 fs1-5"
                                      style={{ color: "#797575" }}
                                    >
                                      <span> &#8377;</span> {item.price}
                                    </h4>
                                  </div>
                                  <div className="column is-6">
                                    <div className="float-right">
                                      {item.quantity === 0 ? (
                                        <button
                                          className="button is-danger"
                                          onClick={() =>
                                            this.onClickAdd(
                                              item.item_id,
                                              key,
                                              unique,
                                              item.price,
                                              item.item_name
                                            )
                                          }
                                        >
                                          ADD
                                        </button>
                                      ) : (
                                        <React.Fragment>
                                          {" "}
                                          <span
                                            className="icon is-medium cursor-pointer"
                                            onClick={() =>
                                              this.onClickMinus(
                                                item.item_id,
                                                key,
                                                unique
                                              )
                                            }
                                          >
                                            <img src="https://img.icons8.com/ios/30/000000/minus.png" />
                                          </span>
                                          <span className="ffqs fs2em fw2 pl0-3 pr0-3">
                                            {item.quantity}
                                          </span>
                                          <span
                                            className="icon is-medium cursor-pointer"
                                            onClick={() =>
                                              this.onClickPlus(
                                                item.item_id,
                                                key,
                                                unique
                                              )
                                            }
                                          >
                                            <img src="https://img.icons8.com/ios/30/000000/plus.png" />
                                          </span>{" "}
                                        </React.Fragment>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </Segment>
                            </div>
                          </div>
                        );
                      })}
                    </React.Fragment>
                  );
                })}
              </section>

              <footer className="modal-card-foot">
                {/* <div className="border-top-dashed" />
                <br /> */}
                <div
                  className="columns"
                  style={{
                    paddingLeft: "8em",

                    paddingRight: "8em"
                  }}
                >
                  <div className="column">
                    {this.state.skipLoading ? (
                      <button
                        className="button is-outlined fw2 fs1-5 ffqs is-loading"
                        style={{ width: "8em" }}
                      >
                        Skip
                      </button>
                    ) : (
                      <button
                        className="button is-outlined fw2 fs1-5 ffqs"
                        style={{ width: "8em" }}
                        onClick={() => this.onClickSkip()}
                      >
                        Skip
                      </button>
                    )}
                  </div>

                  <div className="column">
                    {this.state.proccedLoading ? (
                      <button
                        className="button is-danger is-outlined fw2 fs1-5 ffqs is-loading"
                        style={{ width: "8em" }}
                      >
                        Procced
                      </button>
                    ) : (
                      <button
                        className="button is-danger is-outlined fw2 fs1-5 ffqs"
                        style={{ width: "8em" }}
                        onClick={() => this.onClickProcced()}
                      >
                        Procced
                      </button>
                    )}
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
