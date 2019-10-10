import "react-dates/initialize";
import { Segment } from "semantic-ui-react";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import "bulma-checkradio";

import "./profile.css";

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
                      <span className="loyality-price">{props.loyality}</span>
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
                            value={props.firstName}
                            onChange={event => props.onChangeFirstName(event)}
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
                            value={props.lastName}
                            onChange={event => props.onChangeLastName(event)}
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
                            value={props.email}
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
                            {/* <div className="column is-3">
                              <div className="select is-large br0">
                                <select className="br0" disabled>
                                  <option>+91</option>
                                </select>
                              </div>
                            </div> */}

                            <div className="column is-12">
                              <input
                                className="input is-large br0"
                                type="number"
                                placeholder="Mobile"
                                disabled
                                value={props.mobile}
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
                                id="Male"
                                type="radio"
                                name="gender"
                                value={props.gender}
                                defaultChecked={
                                  props.gender === "Male" ? true : false
                                }
                                onChange={() => props.onChangeGender("Male")}
                              />
                              <label htmlFor="Male" className="ffqs fw2">
                                Male
                              </label>

                              <input
                                className="is-checkradio is-danger"
                                id="Female"
                                type="radio"
                                name="gender"
                                style={{ paddingLeft: "1em" }}
                                value={props.gender}
                                defaultChecked={
                                  props.gender === "Female" ? true : false
                                }
                                onChange={() => props.onChangeGender("Female")}
                              />
                              <label htmlFor="Female" className="ffqs fw2">
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

              {props.isLoading ? (
                <a className="button is-loading ff">SUBMIT</a>
              ) : (
                <a
                  className="button ff"
                  onClick={() => props.onClickProfileButton()}
                >
                  SUBMIT
                </a>
              )}
            </Segment>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Profile;
