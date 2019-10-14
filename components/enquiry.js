import "react-dates/initialize";

import { Segment } from "semantic-ui-react";
import { SingleDatePicker } from "react-dates";
import { COUNTRY_CODE } from "../constants";

import "react-dates/lib/css/_datepicker.css";
import "bulma-checkradio";
import "./enquiry.css";

const Enquiry = props => {
  return (
    <React.Fragment>
      <div className="enquiry-container">
        <div className="columns">
          <div className="column is-three-fifths is-offset-one-fifth">
            <Segment style={{ marginTop: "3em" }}>
              <div className="columns">
                <div className="column is-8 is-offset-one-fifth">
                  <h4 className="ffqs enquiry-title">Group Booking</h4>

                  <div className="field">
                    <label className="label is-medium ffqs fw2">Name</label>

                    <div className="field-body">
                      <div className="field">
                        <label className="control is-expanded">
                          <input
                            className="input is-large"
                            type="text"
                            placeholder="Aaron Swartz"
                            onChange={event => props.onChangeName(event)}
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
                            className={
                              props.enquiryState.enquiryEmailError.flag
                                ? "input is-large is-danger"
                                : "input is-large"
                            }
                            type="text"
                            placeholder="Open@Code"
                            onChange={event => props.onChangeEmail(event)}
                          />
                        </label>
                      </div>
                    </div>

                    {props.enquiryState.enquiryEmailError.flag ? (
                      <p class="help is-danger">
                        {props.enquiryState.enquiryEmailError.msg}
                      </p>
                    ) : null}
                  </div>

                  <div className="field">
                    <label className="label is-medium ffqs fw2">Phone</label>
                    <div className="field-body">
                      <div className="field">
                        <div className="control ffqs fw2">
                          <div className="columns is-gapless">
                            <div className="column is-3">
                              <div className="select is-large br0">
                                <select
                                  className="br0"
                                  defaultValue="+91"
                                  onChange={e => props.onChangeMobileCode(e)}
                                >
                                  {COUNTRY_CODE.map((value, key) => {
                                    return value.dial_code === "+91" ? (
                                      <option key={key} defaultChecked>
                                        {value.dial_code}
                                      </option>
                                    ) : (
                                      <option key={key}>
                                        {value.dial_code}
                                      </option>
                                    );
                                  })}
                                </select>
                              </div>
                            </div>

                            <div className="column">
                              <input
                                className="input is-large br0"
                                type="number"
                                placeholder="Mobile"
                                onChange={e => props.onChangeMobile(e)}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="field">
                    <label className="label is-medium ffqs fw2">
                      Your Occasion ?
                    </label>

                    <div className="field-body">
                      <div className="control">
                        <Segment>
                          <input
                            className="is-checkradio is-danger"
                            id="Birthday"
                            type="radio"
                            name="looking"
                            value="Birthday"
                            defaultChecked
                            onChange={event => props.onChangeOccasion(event)}
                          />
                          <label htmlFor="Birthday" className="ffqs fw2">
                            Birthday
                          </label>

                          <input
                            className="is-checkradio is-danger"
                            id="Bachelor/Bachelorette"
                            type="radio"
                            name="looking"
                            value="Bachelor/Bachelorette"
                            style={{ paddingLeft: "1em" }}
                            onChange={event => props.onChangeOccasion(event)}
                          />
                          <label
                            htmlFor="Bachelor/Bachelorette"
                            className="ffqs fw2"
                          >
                            Bachelor/Bachelorette
                          </label>

                          <input
                            className="is-checkradio is-danger"
                            id="Anniversary"
                            type="radio"
                            name="looking"
                            value="Anniversary"
                            style={{ paddingLeft: "1em" }}
                            onChange={event => props.onChangeOccasion(event)}
                          />
                          <label htmlFor="Anniversary" className="ffqs fw2">
                            Anniversary
                          </label>

                          <div className="field mt1">
                            <input
                              className="is-checkradio is-danger"
                              id="Social-Gathering"
                              type="radio"
                              name="looking"
                              value="Social Gathering"
                              onChange={event => props.onChangeOccasion(event)}
                            />
                            <label
                              htmlFor="Social-Gathering"
                              className="ffqs fw2"
                            >
                              Social Gathering
                            </label>

                            <input
                              className="is-checkradio is-danger"
                              id="Others"
                              type="radio"
                              name="looking"
                              value="Others"
                              style={{ paddingLeft: "1em" }}
                              onChange={event => props.onChangeOccasion(event)}
                            />
                            <label htmlFor="Others" className="ffqs fw2">
                              Others
                            </label>
                          </div>
                        </Segment>
                      </div>
                    </div>
                  </div>

                  <div className="field">
                    <label className="label is-medium ffqs fw2">
                      Party Date ?
                    </label>

                    <div className="field-body">
                      <div className="field ">
                        <div className="control">
                          <SingleDatePicker
                            showDefaultInputIcon={true}
                            date={props.enquiryState.enquiryPartyDate}
                            id="date"
                            onDateChange={date => props.onChangePartyDate(date)}
                            focused={props.enquiryState.focused}
                            onFocusChange={focused =>
                              props.onChangeFocused(focused)
                            }
                            displayFormat="DD-MM-YYYY"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="field">
                    <label className="label is-medium ffqs fw2">
                      Party Time ?
                    </label>

                    <div className="field-body">
                      <div className="field ">
                        <div className="control">
                          <Segment>
                            <div className="field">
                              <input
                                className="is-checkradio is-danger"
                                id="Lunch"
                                type="radio"
                                name="time"
                                value="Lunch"
                                defaultChecked
                                onChange={event =>
                                  props.onChangePartyTime(event)
                                }
                              />
                              <label htmlFor="Lunch" className="ffqs fw2">
                                Lunch
                              </label>

                              <input
                                className="is-checkradio is-danger"
                                id="Dinner"
                                type="radio"
                                name="time"
                                value="Dinner"
                                style={{ paddingLeft: "1em" }}
                                onChange={event =>
                                  props.onChangePartyTime(event)
                                }
                              />
                              <label htmlFor="Dinner" className="ffqs fw2">
                                Dinner
                              </label>
                            </div>
                          </Segment>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="field">
                    <label className="label is-medium ffqs fw2">
                      Food Preference ?
                    </label>

                    <div className="field-body">
                      <div className="field ">
                        <div className="control">
                          <Segment>
                            <div className="field">
                              <input
                                className="is-checkradio is-danger"
                                id="Veg"
                                type="radio"
                                name="food"
                                value="Veg"
                                defaultChecked
                                onChange={event =>
                                  props.onChangeFoodPreference(event)
                                }
                              />
                              <label htmlFor="Veg" className="ffqs fw2">
                                Veg
                              </label>

                              <input
                                className="is-checkradio is-danger"
                                id="Non-Veg"
                                type="radio"
                                name="food"
                                value="Non-Veg"
                                style={{ paddingLeft: "1em" }}
                                onChange={event =>
                                  props.onChangeFoodPreference(event)
                                }
                              />
                              <label htmlFor="Non-Veg" className="ffqs fw2">
                                Non Veg
                              </label>

                              <input
                                className="is-checkradio is-danger"
                                id="Both"
                                type="radio"
                                name="food"
                                value="Both"
                                style={{ paddingLeft: "1em" }}
                                onChange={event =>
                                  props.onChangeFoodPreference(event)
                                }
                              />
                              <label htmlFor="Both" className="ffqs fw2">
                                Both
                              </label>

                              <input
                                className="is-checkradio is-danger"
                                id="Alcohol"
                                type="checkbox"
                                name="alcohol"
                                value="Alcohol"
                                style={{ paddingLeft: "1em" }}
                                onChange={event =>
                                  props.enquiryFoodPreferenceAlcohol(event)
                                }
                              />
                              <label htmlFor="Alcohol" className="ffqs fw2">
                                Alcohol
                              </label>
                            </div>
                          </Segment>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="field">
                    <label className="label is-medium ffqs fw2">
                      Total number of guest 15+
                    </label>

                    <div className="field-body">
                      <div className="field">
                        <label className="control is-expanded">
                          <input
                            className="input is-large"
                            type="number"
                            placeholder="Guests"
                            onChange={event => props.onChangeGuest(event)}
                          />
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="field">
                    <label className="label is-medium ffqs fw2">
                      Average cost per head ?
                    </label>

                    <div className="field-body">
                      <div className="field ">
                        <div className="control">
                          <Segment>
                            <div className="field">
                              <input
                                className="is-checkradio is-danger"
                                id="500-1000"
                                type="radio"
                                name="cost"
                                value="500-1000"
                                defaultChecked
                                onChange={event => props.onChangeCost(event)}
                              />
                              <label htmlFor="500-1000" className="ffqs fw2">
                                500 - 1000
                              </label>

                              <input
                                className="is-checkradio is-danger"
                                id="1000-1500"
                                type="radio"
                                name="cost"
                                value="1000-1500"
                                style={{ paddingLeft: "1em" }}
                                onChange={event => props.onChangeCost(event)}
                              />
                              <label htmlFor="1000-1500" className="ffqs fw2">
                                1000 - 1500
                              </label>

                              <input
                                className="is-checkradio is-danger"
                                id="1500-2000"
                                type="radio"
                                name="cost"
                                value="1500-2000"
                                style={{ paddingLeft: "1em" }}
                                onChange={event => props.onChangeCost(event)}
                              />
                              <label htmlFor="1500-2000" className="ffqs fw2">
                                1500 - 2000
                              </label>

                              <input
                                className="is-checkradio is-danger"
                                id="2000-4000"
                                type="radio"
                                name="cost"
                                value="2000-4000"
                                style={{ paddingLeft: "1em" }}
                                onChange={event => props.onChangeCost(event)}
                              />
                              <label htmlFor="2000-4000" className="ffqs fw2">
                                2000 - 4000
                              </label>
                            </div>
                          </Segment>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="field">
                    <label className="label is-medium ffqs fw2">
                      Any special request ?
                    </label>

                    <div className="field-body">
                      <div className="field">
                        <div className="control">
                          <textarea
                            className="textarea"
                            placeholder="Any Request"
                            onChange={event => props.onChangeRequest(event)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="field">
                    <div className="control">
                      <label className="checkbox">
                        <input
                          className="is-checkradio has-background-color is-danger"
                          id="Agree"
                          type="checkbox"
                          name="term"
                          defaultChecked
                          style={{ paddingLeft: "1em" }}
                          onChange={event => props.onChangeAgree(event)}
                        />
                        <label htmlFor="Agree" className="ffqs fw2">
                          I agree to the{" "}
                          <a href="/term" target="_blank">
                            terms and conditions
                          </a>
                        </label>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {props.enquiryState.isLoading ? (
                <a
                  className="button is-loading ff"
                  onClick={() => props.onClickEnquiryButton()}
                >
                  SUBMIT
                </a>
              ) : props.enquiryState.enquiryButton ? (
                <a
                  className="button ff"
                  onClick={() => props.onClickEnquiryButton()}
                >
                  SUBMIT
                </a>
              ) : (
                <a
                  className="button ff"
                  disabled
                  style={{ backgroundColor: "#fdb6c4" }}
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

export default Enquiry;
