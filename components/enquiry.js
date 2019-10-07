import { Segment } from "semantic-ui-react";

import DatePicker from "react-date-picker/dist/entry.nostyle";

import { COUNTRY_CODE } from "../constants";

import "../node_modules/react-date-picker/dist/DatePicker.css";
import "../node_modules/react-calendar/dist/Calendar.css";
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
                          />
                        </label>
                      </div>
                    </div>

                    {props.enquiryState.enquiryName.flag ? (
                      <p class="help is-danger">
                        {props.enquiryState.enquiryName.msg}
                      </p>
                    ) : null}
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
                          />
                        </label>
                      </div>
                    </div>

                    {props.enquiryState.enquiryEmail.flag ? (
                      <p class="help is-danger">
                        {props.enquiryState.enquiryEmail.msg}
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
                                      <option key={key} selected>
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
                                // onChange={e => props.updateSignupMobile(e)}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {props.enquiryState.enquiryMobile.flag ? (
                      <p class="help is-danger">
                        {props.enquiryState.enquiryMobile.msg}
                      </p>
                    ) : null}
                  </div>

                  {/* <div className="field">
                    <label className="label is-medium ffqs fw2">Phone</label>

                    <div className="field-body">
                      <div className="field">
                        <label className="control is-expanded">
                          <input
                            className="input is-large"
                            type="number"
                            placeholder="+91"
                          />
                        </label>
                      </div>
                    </div>
                  </div> */}

                  <div className="field">
                    <label className="label is-medium ffqs fw2">
                      Your Occasion ?
                    </label>

                    <div className="field-body">
                      {/* <div className="field "> */}
                      <div className="control">
                        <Segment>
                          {/* <div className="field"> */}
                          <input
                            className="is-checkradio"
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
                            className="is-checkradio"
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
                            className="is-checkradio"
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
                          {/* </div> */}

                          <div className="field mt1">
                            <input
                              className="is-checkradio"
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
                              className="is-checkradio"
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
                      {/* </div> */}
                    </div>
                  </div>

                  <div className="field">
                    <label className="label is-medium ffqs fw2">
                      Party Date
                    </label>

                    <div className="field-body">
                      <div className="field ">
                        <div className="control">
                          <DatePicker
                            value={props.enquiryState.enquiryPartyDate}
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
                                className="is-checkradio"
                                id="Lunch"
                                type="radio"
                                name="time"
                                defaultChecked
                              />
                              <label htmlFor="Lunch" className="ffqs fw2">
                                Lunch
                              </label>

                              <input
                                className="is-checkradio"
                                id="Dinner"
                                type="radio"
                                name="time"
                                style={{ paddingLeft: "1em" }}
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
                                className="is-checkradio"
                                id="Veg"
                                type="radio"
                                name="food"
                                defaultChecked
                              />
                              <label htmlFor="Veg" className="ffqs fw2">
                                Veg
                              </label>

                              <input
                                className="is-checkradio"
                                id="Non-Veg"
                                type="radio"
                                name="food"
                                style={{ paddingLeft: "1em" }}
                              />
                              <label htmlFor="Non-Veg" className="ffqs fw2">
                                Non Veg
                              </label>

                              <input
                                className="is-checkradio"
                                id="Both"
                                type="radio"
                                name="food"
                                style={{ paddingLeft: "1em" }}
                              />
                              <label htmlFor="Both" className="ffqs fw2">
                                Both
                              </label>

                              <input
                                className="is-checkradio"
                                id="Alcohol"
                                type="checkbox"
                                name="alcohol"
                                style={{ paddingLeft: "1em" }}
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
                                className="is-checkradio"
                                id="500-1000"
                                type="radio"
                                name="cost"
                                defaultChecked
                              />
                              <label htmlFor="500-1000" className="ffqs fw2">
                                500 - 1000
                              </label>

                              <input
                                className="is-checkradio"
                                id="1000-1500"
                                type="radio"
                                name="cost"
                                style={{ paddingLeft: "1em" }}
                              />
                              <label htmlFor="1000-1500" className="ffqs fw2">
                                1000 - 1500
                              </label>

                              <input
                                className="is-checkradio"
                                id="1500-2000"
                                type="radio"
                                name="cost"
                                style={{ paddingLeft: "1em" }}
                              />
                              <label htmlFor="1500-2000" className="ffqs fw2">
                                1500 - 2000
                              </label>

                              <input
                                className="is-checkradio"
                                id="2000-4000"
                                type="radio"
                                name="cost"
                                style={{ paddingLeft: "1em" }}
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
                          id="exampleCheckboxDefault1"
                          type="checkbox"
                          name="alcohol"
                          checked="checked"
                          style={{ paddingLeft: "1em" }}
                        />
                        <label
                          htmlFor="exampleCheckboxDefault1"
                          className="ffqs fw2"
                        >
                          I agree to the <a href="#">terms and conditions</a>
                        </label>
                      </label>
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

export default Enquiry;
