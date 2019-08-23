import { Segment } from "semantic-ui-react";
// import DatePicker from "react-date-picker";
import DatePicker from "react-date-picker/dist/entry.nostyle";

import "../node_modules/react-date-picker/dist/DatePicker.css";
import "../node_modules/react-calendar/dist/Calendar.css";
import "./enquiry.css";
import "bulma-checkradio";

const Enquiry = props => {
  const date = new Date();
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
                  </div>

                  <div className="field">
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
                  </div>

                  <div className="field">
                    <label className="label is-medium ffqs fw2">
                      Your Occasion ?
                    </label>

                    <div className="field-body">
                      <div className="field ">
                        <div className="control">
                          <Segment>
                            <div className="field">
                              <input
                                className="is-checkradio"
                                id="exampleRtlRadioInline1"
                                type="radio"
                                name="looking"
                              />
                              <label
                                htmlFor="exampleRtlRadioInline1"
                                className="ffqs fw2"
                              >
                                Birthday
                              </label>

                              <input
                                className="is-checkradio"
                                id="exampleRtlRadioInline2"
                                type="radio"
                                name="looking"
                                style={{ paddingLeft: "1em" }}
                              />
                              <label
                                htmlFor="exampleRtlRadioInline2"
                                className="ffqs fw2"
                              >
                                Bachelor/Bachelorette
                              </label>

                              <input
                                className="is-checkradio"
                                id="exampleRtlRadioInline3"
                                type="radio"
                                name="looking"
                                style={{ paddingLeft: "1em" }}
                              />
                              <label
                                htmlFor="exampleRtlRadioInline3"
                                className="ffqs fw2"
                              >
                                Anniversary
                              </label>
                            </div>

                            <div className="field mt1">
                              <input
                                className="is-checkradio"
                                id="exampleRtlRadioInline4"
                                type="radio"
                                name="looking"
                              />
                              <label
                                htmlFor="exampleRtlRadioInline4"
                                className="ffqs fw2"
                              >
                                Social Gathering
                              </label>

                              <input
                                className="is-checkradio"
                                id="exampleRtlRadioInline5"
                                type="radio"
                                name="looking"
                                style={{ paddingLeft: "1em" }}
                              />
                              <label
                                htmlFor="exampleRtlRadioInline5"
                                className="ffqs fw2"
                              >
                                Others
                              </label>
                            </div>
                          </Segment>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="field">
                    <label className="label is-medium ffqs fw2">
                      Party Date
                    </label>

                    <div className="field-body">
                      <div className="field ">
                        <div className="control">
                          <DatePicker value={date} />
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
                                id="exampleRtlRadioInline6"
                                type="radio"
                                name="time"
                              />
                              <label
                                htmlFor="exampleRtlRadioInline6"
                                className="ffqs fw2"
                              >
                                Lunch
                              </label>

                              <input
                                className="is-checkradio"
                                id="exampleRtlRadioInline7"
                                type="radio"
                                name="time"
                                style={{ paddingLeft: "1em" }}
                              />
                              <label
                                htmlFor="exampleRtlRadioInline7"
                                className="ffqs fw2"
                              >
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
                                id="exampleRtlRadioInline8"
                                type="radio"
                                name="food"
                              />
                              <label
                                htmlFor="exampleRtlRadioInline8"
                                className="ffqs fw2"
                              >
                                Veg
                              </label>

                              <input
                                className="is-checkradio"
                                id="exampleRtlRadioInline9"
                                type="radio"
                                name="food"
                                style={{ paddingLeft: "1em" }}
                              />
                              <label
                                htmlFor="exampleRtlRadioInline9"
                                className="ffqs fw2"
                              >
                                Non Veg
                              </label>

                              <input
                                className="is-checkradio"
                                id="exampleRtlRadioInline10"
                                type="radio"
                                name="food"
                                style={{ paddingLeft: "1em" }}
                              />
                              <label
                                htmlFor="exampleRtlRadioInline10"
                                className="ffqs fw2"
                              >
                                Both
                              </label>

                              <input
                                className="is-checkradio"
                                id="exampleCheckboxDefault"
                                type="checkbox"
                                name="alcohol"
                                style={{ paddingLeft: "1em" }}
                              />
                              <label
                                htmlFor="exampleCheckboxDefault"
                                className="ffqs fw2"
                              >
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
                                id="exampleRtlRadioInline11"
                                type="radio"
                                name="cost"
                              />
                              <label
                                htmlFor="exampleRtlRadioInline11"
                                className="ffqs fw2"
                              >
                                500 - 1000
                              </label>

                              <input
                                className="is-checkradio"
                                id="exampleRtlRadioInline12"
                                type="radio"
                                name="cost"
                                style={{ paddingLeft: "1em" }}
                              />
                              <label
                                htmlFor="exampleRtlRadioInline12"
                                className="ffqs fw2"
                              >
                                1000 - 1500
                              </label>

                              <input
                                className="is-checkradio"
                                id="exampleRtlRadioInline13"
                                type="radio"
                                name="cost"
                                style={{ paddingLeft: "1em" }}
                              />
                              <label
                                htmlFor="exampleRtlRadioInline13"
                                className="ffqs fw2"
                              >
                                1500 - 2000
                              </label>

                              <input
                                className="is-checkradio"
                                id="exampleRtlRadioInline14"
                                type="radio"
                                name="cost"
                                style={{ paddingLeft: "1em" }}
                              />
                              <label
                                htmlFor="exampleRtlRadioInline14"
                                className="ffqs fw2"
                              >
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
