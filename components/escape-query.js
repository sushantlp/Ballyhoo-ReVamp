import "react-dates/initialize";

import moment from "moment";
import { SingleDatePicker } from "react-dates";

import "react-dates/lib/css/_datepicker.css";
import "./escape-query.css";

export default class EscapeQuery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: -1,
      packages: [],
      toggle: {
        index: -1,
        door: false
      },
      collapsed: true,
      dynamic: [],
      isLoading: false,
      queryLoading: true,
      focused: false,
      date: moment()
    };
  }

  onClickSendQueryButton = () => {};

  onChangeName = () => {};

  onChangeEmail = () => {};

  onChangeMobile = () => {};

  render() {
    return (
      <React.Fragment>
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
                          type="number"
                          placeholder="Mobile"
                          onChange={e => this.onChangeMobile(e)}
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
