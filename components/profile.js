import "react-dates/initialize";
import { Segment } from "semantic-ui-react";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import "./profile.css";
import "bulma-checkradio";

const Profile = props => {
  return (
    <React.Fragment>
      <div className="profile-container">
        <div className="columns">
          <div className="column is-three-fifths is-offset-one-fifth">
            <Segment style={{ marginTop: "3em" }}>
              <div className="columns">
                <div className="column is-7 is-offset-one-fifth">
                  {/* <h4 className="ffqs profile-title">BALLYHOO</h4> */}
                  <div className="text-align-center mb1">
                    <h4 className="ffqs fw2 fs1-5">
                      {" "}
                      <span className="loyality-title">
                        Loyality Points :{" "}
                      </span>{" "}
                      <span className="loyality-price">2000 </span>
                    </h4>
                  </div>
                  <div className="field">
                    <div className="field-body">
                      <div className="field">
                        <label className="control is-expanded">
                          <input
                            className="input is-large br0"
                            type="text"
                            placeholder="Aaron"
                          />
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="field">
                    <div className="field-body">
                      <div className="field">
                        <label className="control is-expanded">
                          <input
                            className="input is-large br0"
                            type="text"
                            placeholder="Swartz"
                          />
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="field">
                    <div className="field-body">
                      <div className="field">
                        <label className="control is-expanded">
                          <input
                            className="input is-large br0"
                            type="text"
                            placeholder="Open@Code"
                            disabled
                          />
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="field">
                    <div className="field-body">
                      <div className="field">
                        <div className="control ffqs fw2">
                          <div className="columns is-gapless">
                            <div className="column is-3">
                              <div className="select is-large br0">
                                <select className="br0" disabled>
                                  <option>+91</option>
                                </select>
                              </div>
                            </div>

                            <div className="column is-9">
                              <input
                                className="input is-large br0"
                                type="number"
                                placeholder="Mobile"
                                disabled
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="field">
                    <div className="field-body">
                      <div className="field">
                        <label className="control is-expanded">
                          <SingleDatePicker
                            showDefaultInputIcon={true}
                            date={props.date}
                            id="date"
                            onDateChange={date => props.onDateChange(date)}
                            focused={props.focused}
                            onFocusChange={focused =>
                              props.onFocusChange(focused)
                            }
                            displayFormat="DD-MM-YYYY"
                          />
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="field is-horizontal">
                    <div className="field-body">
                      <div className="field ">
                        <div className="control">
                          <Segment>
                            <label className="label is-medium ffqs fw2">
                              Gender ?
                            </label>
                            <div className="field">
                              <input
                                className="is-checkradio is-danger"
                                id="male"
                                type="radio"
                                name="gender"
                              />
                              <label htmlFor="male" className="ffqs fw2">
                                Male
                              </label>

                              <input
                                className="is-checkradio is-danger"
                                id="female"
                                type="radio"
                                name="gender"
                                style={{ paddingLeft: "1em" }}
                              />
                              <label htmlFor="female" className="ffqs fw2">
                                Female
                              </label>
                            </div>
                          </Segment>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a className="button ff">SUBMIT</a>
            </Segment>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Profile;
