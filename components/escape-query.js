import "react-dates/initialize";

import moment from "moment";
import { SingleDatePicker } from "react-dates";
import { ToastContainer, toast } from "react-toastify";

import { EMAIL } from "../constants";

import "react-dates/lib/css/_datepicker.css";
import "./escape-query.css";

import "react-toastify/dist/ReactToastify.css";

export default class EscapeQuery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      queryLoading: false,
      focused: false,
      date: moment(),
      name: "",
      email: "",
      mobile: "",
      people: 1,
      customization: ""
    };
  }

  componentDidMount() {
    if (parseInt(this.props.customerData.customerData.customer_id, 10) !== 0) {
      this.setState({
        name: `${this.props.customerData.customerData.first_name} ${this.props.customerData.customerData.last_name}`,
        email: this.props.customerData.customerData.email,
        mobile: this.props.customerData.customerData.mobile
      });
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.escapeEnquiry !== nextProps.escapeEnquiry) {
      if (nextProps.escapeEnquiry.status === "SUCCESS") {
        toast.success(nextProps.escapeEnquiry.msg, {
          onClose: () => this.props.updateEscapeQueryState(false)
        });

        this.setState({
          isLoading: false
        });
      } else {
        toast.error(nextProps.escapeEnquiry.msg, {
          autoClose: true,
          onClose: () => this.props.updateEscapeQueryState(false)
        });

        this.setState({
          isLoading: false
        });
      }
    }
  }

  onClickSendQueryButton = () => {
    this.setState({
      isLoading: true
    });

    const date = moment(this.state.date, "YYYY-MM-DD").format("YYYY-MM-DD");

    this.props.postEscapeEnquiry(
      this.props.offer_id,
      this.state.name,
      this.state.mobile,
      this.state.email,
      date,
      this.state.people,
      this.state.customization,
      this.props.id
    );
  };

  onChangeName = e => {
    if (e.target.value === "")
      this.setState({
        queryLoading: false
      });

    this.setState({
      name: e.target.value
    });

    if (!EMAIL.test(this.state.email)) {
      if (this.state.queryLoading)
        this.setState({
          queryLoading: false
        });
    } else {
      if (
        this.state.mobile !== "" &&
        this.state.email !== "" &&
        this.state.customization !== ""
      )
        this.setState({
          queryLoading: true
        });
    }
  };

  onChangeEmail = e => {
    if (e.target.value === "")
      this.setState({
        queryLoading: false
      });

    this.setState({
      email: e.target.value
    });

    if (!EMAIL.test(e.target.value)) {
      if (this.state.queryLoading)
        this.setState({
          queryLoading: false
        });
    } else {
      if (
        e.target.value !== "" &&
        this.state.mobile !== "" &&
        this.state.name !== "" &&
        this.state.customization !== ""
      )
        this.setState({
          queryLoading: true
        });
    }
  };

  onChangeMobile = e => {
    if (e.target.value === "")
      this.setState({
        queryLoading: false
      });

    this.setState({
      mobile: e.target.value
    });

    if (!EMAIL.test(this.state.email)) {
      if (this.state.queryLoading)
        this.setState({
          queryLoading: false
        });
    } else {
      if (
        e.target.value !== "" &&
        this.state.email !== "" &&
        this.state.name !== "" &&
        this.state.customization !== ""
      )
        this.setState({
          queryLoading: true
        });
    }
  };

  onChangePeople = e => {
    if (e.target.value === "")
      this.setState({
        queryLoading: false
      });

    this.setState({
      people: e.target.value
    });

    if (!EMAIL.test(this.state.email)) {
      if (this.state.queryLoading)
        this.setState({
          queryLoading: false
        });
    } else {
      if (
        e.target.value !== "" &&
        this.state.mobile !== "" &&
        this.state.email !== "" &&
        this.state.name !== "" &&
        this.state.customization !== ""
      )
        this.setState({
          queryLoading: true
        });
    }
  };

  onChangeCustomization = e => {
    if (e.target.value === "")
      this.setState({
        queryLoading: false
      });

    this.setState({
      customization: e.target.value
    });

    if (!EMAIL.test(this.state.email)) {
      if (this.state.queryLoading)
        this.setState({
          queryLoading: false
        });
    } else {
      if (
        e.target.value !== "" &&
        this.state.mobile !== "" &&
        this.state.email !== "" &&
        this.state.name !== ""
      )
        this.setState({
          queryLoading: true
        });
    }
  };

  onKeyMobile = e => {
    if (!/[0-9]/.test(e.key)) e.preventDefault();
  };

  onKeyPeople = e => {
    if (!/[1-9]/.test(e.key)) e.preventDefault();
  };

  render() {
    return (
      <React.Fragment>
        <ToastContainer pauseOnHover />
        <div className="escape-query-container">
          <div className={this.props.escapeQuery ? "modal is-active" : "modal"}>
            <div className="modal-background" />
            <div className="modal-card">
              <header className="modal-card-head">
                <h4 className="modal-card-title ffqs escape-query-title">
                  {" "}
                  {this.props.caption}
                </h4>
                <button
                  className="delete"
                  aria-label="close"
                  onClick={() => this.props.updateEscapeQueryState(false)}
                />
              </header>
              <section className="modal-card-body">
                <div className="field">
                  <label className="label is-medium ffqs fw2">Name</label>

                  <div className="field-body">
                    <div className="field">
                      <label className="control is-expanded">
                        <input
                          className="input is-large"
                          type="text"
                          placeholder="Aaron Swartz"
                          value={this.state.name}
                          onChange={e => this.onChangeName(e)}
                        />
                      </label>
                    </div>
                  </div>
                </div>

                <div className="field">
                  <label className="label is-medium ffqs fw2">Email</label>

                  <div className="field-body">
                    <div className="field">
                      <label className="control is-expanded">
                        <input
                          className="input is-large"
                          type="text"
                          placeholder="Open@Code"
                          value={this.state.email}
                          onChange={e => this.onChangeEmail(e)}
                        />
                      </label>
                    </div>
                  </div>
                </div>

                <div className="field">
                  <label className="label is-medium ffqs fw2">Phone</label>

                  <div className="field-body">
                    <div className="field">
                      <label className="control is-expanded">
                        <input
                          className="input is-large"
                          type="text"
                          placeholder="Mobile"
                          value={this.state.mobile}
                          onChange={e => this.onChangeMobile(e)}
                          onKeyPress={this.onKeyMobile}
                        />
                      </label>
                    </div>
                  </div>
                </div>

                <div className="field">
                  <label className="label is-medium ffqs fw2">
                    Booking Date
                  </label>

                  <div className="field-body">
                    <div className="field ">
                      <div className="control">
                        <SingleDatePicker
                          showDefaultInputIcon={true}
                          id="date"
                          date={this.state.date}
                          onDateChange={date => this.setState({ date })}
                          focused={this.state.focused}
                          onFocusChange={({ focused }) =>
                            this.setState({ focused })
                          }
                          displayFormat="DD-MM-YYYY"
                          numberOfMonths={1}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="field">
                  <label className="label is-medium ffqs fw2">
                    No of People
                  </label>

                  <div className="field-body">
                    <div className="field">
                      <label className="control is-expanded">
                        <input
                          className="input is-large"
                          type="text"
                          placeholder="People"
                          value={this.state.people}
                          onChange={event => this.onChangePeople(event)}
                          onKeyPress={this.onKeyPeople}
                        />
                      </label>
                    </div>
                  </div>
                </div>

                <div className="field">
                  <label className="label is-medium ffqs fw2">
                    Any Customization ?
                  </label>

                  <div className="field-body">
                    <div className="field">
                      <div className="control">
                        <textarea
                          className="textarea"
                          placeholder="Any Customization"
                          onChange={event => this.onChangeCustomization(event)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <footer
                className="modal-card-foot"
                style={{
                  paddingLeft: "15em",
                  paddingRight: "15em"
                }}
              >
                {this.state.isLoading ? (
                  <button
                    className="button is-danger is-active send-query-button is-loading"
                    style={{ backgroundColor: "#fdb6c4" }}
                  >
                    SEND QUERY
                  </button>
                ) : this.state.queryLoading ? (
                  <button
                    className="button is-danger is-active send-query-button"
                    onClick={() => this.onClickSendQueryButton()}
                  >
                    SEND QUERY
                  </button>
                ) : (
                  <button
                    style={{ backgroundColor: "#fdb6c4" }}
                    className="button is-danger is-active send-query-button"
                    disabled
                  >
                    SEND QUERY
                  </button>
                )}
              </footer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
