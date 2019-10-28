import moment from "moment";

import "./saloon-menu.css";

export default class SaloonMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div className="saloon-menu-container">
          <div className={this.props.saloonMenu ? "modal is-active" : "modal"}>
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
                  onClick={() => this.props.updateSaloonMenuState(false)}
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
