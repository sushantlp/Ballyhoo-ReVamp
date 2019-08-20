import { Segment } from "semantic-ui-react";
import DatePicker from "react-date-picker/dist/entry.nostyle";

import "../node_modules/react-date-picker/dist/DatePicker.css";
import "../node_modules/react-calendar/dist/Calendar.css";

import "./explore.css";
import "bulma-checkradio";

const Explore = props => {
  const date = new Date();
  console.log(props.gate);
  return (
    <React.Fragment>
      <div className="explore-container">
        <div className="columns">
          <div className="column is-three-fifths is-offset-one-fifth">
            <Segment style={{ marginTop: "3em" }}>
              <div className="columns">
                <div className="column is-8 is-offset-one-fifth">
                  <h4 className="ffqs explore-title">Plan Your Trip</h4>

                  {props.gate ? (
                    <React.Fragment>
                      <div className="field">
                        <label className="label is-medium ffqs fw2">Name</label>

                        <div className="field-body">
                          <div className="field">
                            <p className="control is-expanded">
                              <input
                                className="input is-medium"
                                type="text"
                                placeholder="Aaron Swartz"
                              />
                              {/* <span className="icon  is-left">
                            <img src="https://img.icons8.com/bubbles/50/000000/employee-card.png" />
                          </span> */}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="field">
                        <label className="label is-medium ffqs fw2">
                          Email
                        </label>

                        <div className="field-body">
                          <div className="field">
                            <p className="control is-expanded">
                              <input
                                className="input is-medium"
                                type="text"
                                placeholder="Open@Code"
                              />
                              {/* <span className="icon is-left">
                            <img src="https://img.icons8.com/bubbles/50/000000/email.png" />
                          </span> */}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="field">
                        <label className="label is-medium ffqs fw2">
                          Phone
                        </label>

                        <div className="field-body">
                          <div className="field">
                            <p className="control is-expanded">
                              <input
                                className="input is-medium"
                                type="number"
                                placeholder="+91"
                              />
                              {/* <span className="icon is-left">
                            <img src="https://img.icons8.com/bubbles/50/000000/phone.png" />
                          </span> */}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="field">
                        <label className="label is-medium ffqs fw2">
                          What kind of Escape are you looking for ?
                        </label>

                        <div className="field-body">
                          <div className="field ">
                            <div className="control">
                              <Segment>
                                <div className="field">
                                  <input
                                    className="is-checkradio "
                                    id="exampleRtlRadioInline1"
                                    type="radio"
                                    name="looking"
                                  />
                                  <label
                                    htmlFor="exampleRtlRadioInline1"
                                    className="ffqs fw2"
                                  >
                                    Incity Escape
                                  </label>

                                  <input
                                    className="is-checkradio  "
                                    id="exampleRtlRadioInline2"
                                    type="radio"
                                    name="looking"
                                    style={{ paddingLeft: "1em" }}
                                  />
                                  <label
                                    htmlFor="exampleRtlRadioInline2"
                                    className="ffqs fw2"
                                  >
                                    Outstation
                                  </label>

                                  <input
                                    className="is-checkradio  "
                                    id="exampleRtlRadioInline3"
                                    type="radio"
                                    name="looking"
                                    style={{ paddingLeft: "1em" }}
                                  />
                                  <label
                                    htmlFor="exampleRtlRadioInline3"
                                    className="ffqs fw2"
                                  >
                                    Wonderlust/Nature
                                  </label>
                                </div>

                                <div className="field mt1">
                                  <input
                                    className="is-checkradio "
                                    id="exampleRtlRadioInline4"
                                    type="radio"
                                    name="looking"
                                  />
                                  <label
                                    htmlFor="exampleRtlRadioInline4"
                                    className="ffqs fw2"
                                  >
                                    Backpacking
                                  </label>

                                  <input
                                    className="is-checkradio "
                                    id="exampleRtlRadioInline5"
                                    type="radio"
                                    name="looking"
                                    style={{ paddingLeft: "1em" }}
                                  />
                                  <label
                                    htmlFor="exampleRtlRadioInline5"
                                    className="ffqs fw2"
                                  >
                                    Group Outing
                                  </label>

                                  <input
                                    className="is-checkradio "
                                    id="exampleRtlRadioInline6"
                                    type="radio"
                                    name="looking"
                                    style={{ paddingLeft: "1em" }}
                                  />
                                  <label
                                    htmlFor="exampleRtlRadioInline6"
                                    className="ffqs fw2"
                                  >
                                    Adventurous
                                  </label>
                                </div>

                                <div className="field mt1">
                                  <input
                                    className="is-checkradio "
                                    id="exampleRtlRadioInline7"
                                    type="radio"
                                    name="looking"
                                  />
                                  <label
                                    htmlFor="exampleRtlRadioInline7"
                                    className="ffqs fw2"
                                  >
                                    Religious
                                  </label>

                                  <input
                                    className="is-checkradio "
                                    id="exampleRtlRadioInline8"
                                    type="radio"
                                    name="looking"
                                    style={{ paddingLeft: "1em" }}
                                  />
                                  <label
                                    htmlFor="exampleRtlRadioInline8"
                                    className="ffqs fw2"
                                  >
                                    Luxury
                                  </label>
                                </div>
                              </Segment>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="field">
                        <label className="label is-medium ffqs fw2">
                          Tour type ?
                        </label>

                        <div className="field-body">
                          <div className="field ">
                            <div className="control">
                              <Segment>
                                <div className="field">
                                  <input
                                    className="is-checkradio "
                                    id="exampleRtlRadioInline9"
                                    type="radio"
                                    name="tour"
                                  />
                                  <label
                                    htmlFor="exampleRtlRadioInline9"
                                    className="ffqs fw2"
                                  >
                                    Yes
                                  </label>

                                  <input
                                    className="is-checkradio  "
                                    id="exampleRtlRadioInline10"
                                    type="radio"
                                    name="tour"
                                    style={{ paddingLeft: "1em" }}
                                  />
                                  <label
                                    htmlFor="exampleRtlRadioInline10"
                                    className="ffqs fw2"
                                  >
                                    No
                                  </label>
                                </div>
                              </Segment>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="field">
                        <label className="label is-medium ffqs fw2">
                          Do you need a guided tour with 24hr tour coordinator ?
                        </label>

                        <div className="field-body">
                          <div className="field ">
                            <div className="control">
                              <Segment>
                                <div className="field">
                                  <input
                                    className="is-checkradio "
                                    id="exampleRtlRadioInline11"
                                    type="radio"
                                    name="guided"
                                  />
                                  <label
                                    htmlFor="exampleRtlRadioInline11"
                                    className="ffqs fw2"
                                  >
                                    Yes
                                  </label>

                                  <input
                                    className="is-checkradio  "
                                    id="exampleRtlRadioInline12"
                                    type="radio"
                                    name="guided"
                                    style={{ paddingLeft: "1em" }}
                                  />
                                  <label
                                    htmlFor="exampleRtlRadioInline12"
                                    className="ffqs fw2"
                                  >
                                    No
                                  </label>
                                </div>
                              </Segment>
                            </div>
                          </div>
                        </div>
                      </div>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <div className="field">
                        <label className="label is-medium ffqs fw2">
                          Select Date
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
                          Total duration of trip in days and nights ?
                        </label>

                        <div className="field-body">
                          <div className="field">
                            <p className="control is-expanded">
                              <input
                                className="input is-medium"
                                type="text"
                                placeholder="3-days 4-nights"
                              />
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="field">
                        <label className="label is-medium ffqs fw2">
                          Total Number of guest ?
                        </label>
                        <div className="field is-horizontal">
                          <div className="field-body">
                            <div className="field">
                              <p className="control is-expanded">
                                <input
                                  className="input is-medium"
                                  type="number"
                                  placeholder="Adult"
                                />
                              </p>
                            </div>

                            <div className="field">
                              <p className="control is-expanded">
                                <input
                                  className="input is-medium"
                                  type="number"
                                  placeholder="Children"
                                />
                              </p>
                            </div>

                            <div className="field">
                              <p className="control is-expanded">
                                <input
                                  className="input is-medium"
                                  type="number"
                                  placeholder="Pet"
                                />
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="field">
                        <label className="label is-medium ffqs fw2">
                          Accommodation of guest ?
                        </label>

                        <div className="field-body">
                          <div className="field ">
                            <div className="control">
                              <Segment>
                                <div className="field">
                                  <input
                                    className="is-checkradio "
                                    id="exampleRtlRadioInline13"
                                    type="radio"
                                    name="accommodation"
                                  />
                                  <label
                                    htmlFor="exampleRtlRadioInline13"
                                    className="ffqs fw2"
                                  >
                                    Basic amenities
                                  </label>

                                  <input
                                    className="is-checkradio  "
                                    id="exampleRtlRadioInline14"
                                    type="radio"
                                    name="accommodation"
                                    style={{ paddingLeft: "1em" }}
                                  />
                                  <label
                                    htmlFor="exampleRtlRadioInline14"
                                    className="ffqs fw2"
                                  >
                                    3 star
                                  </label>

                                  <input
                                    className="is-checkradio  "
                                    id="exampleRtlRadioInline15"
                                    type="radio"
                                    name="accommodation"
                                    style={{ paddingLeft: "1em" }}
                                  />
                                  <label
                                    htmlFor="exampleRtlRadioInline15"
                                    className="ffqs fw2"
                                  >
                                    5 star
                                  </label>

                                  <input
                                    className="is-checkradio  "
                                    id="exampleRtlRadioInline16"
                                    type="radio"
                                    name="accommodation"
                                    style={{ paddingLeft: "1em" }}
                                  />
                                  <label
                                    htmlFor="exampleRtlRadioInline16"
                                    className="ffqs fw2"
                                  >
                                    Luxury Stay
                                  </label>
                                </div>
                              </Segment>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="field">
                        <label className="label is-medium ffqs fw2">
                          Do you need a cab services for pickup, drop and sight
                          seeing ?
                        </label>

                        <div className="field-body">
                          <div className="field ">
                            <div className="control">
                              <Segment>
                                <div className="field">
                                  <input
                                    className="is-checkradio "
                                    id="exampleRtlRadioInline17"
                                    type="radio"
                                    name="cab"
                                  />
                                  <label
                                    htmlFor="exampleRtlRadioInline17"
                                    className="ffqs fw2"
                                  >
                                    Yes
                                  </label>

                                  <input
                                    className="is-checkradio  "
                                    id="exampleRtlRadioInline18"
                                    type="radio"
                                    name="cab"
                                    style={{ paddingLeft: "1em" }}
                                  />
                                  <label
                                    htmlFor="exampleRtlRadioInline18"
                                    className="ffqs fw2"
                                  >
                                    No
                                  </label>
                                </div>
                              </Segment>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="field">
                        <label className="label is-medium ffqs fw2">
                          Preferred destination ?
                        </label>

                        <div className="field-body">
                          <div className="field">
                            <p className="control is-expanded">
                              <input
                                className="input is-medium"
                                type="text"
                                placeholder="Goa, Delhi ..."
                              />
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="field">
                        <label className="label is-medium ffqs fw2">
                          Would you like to include sight seeing in this package
                          ?
                        </label>

                        <div className="field-body">
                          <div className="field ">
                            <div className="control">
                              <Segment>
                                <div className="field">
                                  <input
                                    className="is-checkradio "
                                    id="exampleRtlRadioInline19"
                                    type="radio"
                                    name="destination"
                                  />
                                  <label
                                    htmlFor="exampleRtlRadioInline19"
                                    className="ffqs fw2"
                                  >
                                    Yes
                                  </label>

                                  <input
                                    className="is-checkradio  "
                                    id="exampleRtlRadioInline20"
                                    type="radio"
                                    name="destination"
                                    style={{ paddingLeft: "1em" }}
                                  />
                                  <label
                                    htmlFor="exampleRtlRadioInline20"
                                    className="ffqs fw2"
                                  >
                                    No
                                  </label>
                                </div>
                              </Segment>
                            </div>
                          </div>
                        </div>
                      </div>
                    </React.Fragment>
                  )}
                </div>
              </div>

              {props.gate ? (
                <button className="button is-danger button-previous-disabled ff">
                  PREVIOUS
                </button>
              ) : (
                <a
                  className="button is-danger button-previous ff"
                  onClick={() => props.changeGate(true)}
                >
                  PREVIOUS
                </a>
              )}

              <a
                className="button is-warning button-next ff"
                onClick={() => props.changeGate(false)}
              >
                NEXT
              </a>
            </Segment>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Explore;
