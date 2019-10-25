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
      dynamic: []
    };
  }

  onClickSendQueryButton = () => {};

  onChangeName = () => {};
  render() {
    return (
      <React.Fragment>
        <div className="escape-query-container">
          <div className={this.props.escapeQuery ? "modal is-active" : "modal"}>
            <div className="modal-background" />
            <div className="modal-card">
              <header className="modal-card-head">
                <h4 className="modal-card-title fw2 ffqs">BALLYHOO</h4>
                <button
                  className="delete"
                  aria-label="close"
                  onClick={() => this.props.updateEscapeQueryState(false)}
                />
              </header>
              <section className="modal-card-body">
                <h4 className="ffqs escape-query-title">Group Booking</h4>

                <div className="field">
                  <label className="label is-medium ffqs fw2">Name</label>

                  <div className="field-body">
                    <div className="field">
                      <label className="control is-expanded">
                        <input
                          className="input is-large"
                          type="text"
                          placeholder="Aaron Swartz"
                          onChange={event => this.onChangeName(event)}
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </section>
              <footer className="modal-card-foot">
                {props.isLoading ? (
                  <button
                    className="button is-danger is-active send-query-button is-loading"
                    disabled
                    style={{ backgroundColor: "#fdb6c4" }}
                  >
                    SEND QUERY
                  </button>
                ) : props.loginButton ? (
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
