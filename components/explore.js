import { Segment } from "semantic-ui-react";
import DatePicker from "react-date-picker";

import "./explore.css";
import "bulma-checkradio";

const Explore = props => {
  const date = new Date();
  return (
    <React.Fragment>
      <div className="explore-container">
        <div className="columns">
          <div className="column is-three-fifths is-offset-one-fifth">
            <Segment style={{ marginTop: "3em" }}>
              <div className="columns">
                <div className="column is-8 is-offset-one-fifth">
                  <h4 className="ffqs explore-title">Plan Your Trip</h4>

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
                          {/* <span class="icon  is-left">
                            <img src="https://img.icons8.com/bubbles/50/000000/employee-card.png" />
                          </span> */}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="field">
                    <label className="label is-medium ffqs fw2">Email</label>

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
                    <label className="label is-medium ffqs fw2">Phone</label>

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
                            <div class="field">
                              <input
                                className="is-checkradio is-rtl"
                                id="exampleRtlRadioInline1"
                                type="radio"
                                name="looking"
                                checked="checked"
                              />
                              <label
                                for="exampleRtlRadioInline1"
                                className="ffqs fw2"
                              >
                                Incity Escape
                              </label>

                              <input
                                className="is-checkradio is-rtl "
                                id="exampleRtlRadioInline2"
                                type="radio"
                                name="looking"
                              />
                              <label
                                for="exampleRtlRadioInline2"
                                className="ffqs fw2"
                                style={{ paddingLeft: "1em" }}
                              >
                                Outstation
                              </label>

                              <input
                                className="is-checkradio is-rtl "
                                id="exampleRtlRadioInline3"
                                type="radio"
                                name="looking"
                              />
                              <label
                                for="exampleRtlRadioInline3"
                                className="ffqs fw2"
                                style={{ paddingLeft: "1em" }}
                              >
                                Wonderlust/Nature
                              </label>
                            </div>

                            <div class="field mt1">
                              <input
                                className="is-checkradio is-rtl"
                                id="exampleRtlRadioInline4"
                                type="radio"
                                name="looking"
                              />
                              <label
                                for="exampleRtlRadioInline4"
                                className="ffqs fw2"
                              >
                                Backpacking
                              </label>

                              <input
                                className="is-checkradio is-rtl"
                                id="exampleRtlRadioInline5"
                                type="radio"
                                name="looking"
                              />
                              <label
                                for="exampleRtlRadioInline5"
                                className="ffqs fw2"
                                style={{ paddingLeft: "1em" }}
                              >
                                Group Outing
                              </label>

                              <input
                                className="is-checkradio is-rtl"
                                id="exampleRtlRadioInline6"
                                type="radio"
                                name="looking"
                              />
                              <label
                                for="exampleRtlRadioInline6"
                                className="ffqs fw2"
                                style={{ paddingLeft: "1em" }}
                              >
                                Adventurous
                              </label>
                            </div>

                            <div class="field mt1">
                              <input
                                className="is-checkradio is-rtl"
                                id="exampleRtlRadioInline7"
                                type="radio"
                                name="looking"
                              />
                              <label
                                for="exampleRtlRadioInline7"
                                className="ffqs fw2"
                              >
                                Religious
                              </label>

                              <input
                                className="is-checkradio is-rtl"
                                id="exampleRtlRadioInline8"
                                type="radio"
                                name="looking"
                              />
                              <label
                                for="exampleRtlRadioInline8"
                                className="ffqs fw2"
                                style={{ paddingLeft: "1em" }}
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
                            <div class="field">
                              <input
                                className="is-checkradio is-rtl"
                                id="exampleRtlRadioInline9"
                                type="radio"
                                name="tour"
                                checked="checked"
                              />
                              <label
                                for="exampleRtlRadioInline9"
                                className="ffqs fw2"
                              >
                                Yes
                              </label>

                              <input
                                className="is-checkradio is-rtl "
                                id="exampleRtlRadioInline10"
                                type="radio"
                                name="tour"
                              />
                              <label
                                for="exampleRtlRadioInline10"
                                className="ffqs fw2"
                                style={{ paddingLeft: "1em" }}
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
                            <div class="field">
                              <input
                                className="is-checkradio is-rtl"
                                id="exampleRtlRadioInline11"
                                type="radio"
                                name="guided"
                                checked="checked"
                              />
                              <label
                                for="exampleRtlRadioInline11"
                                className="ffqs fw2"
                              >
                                Yes
                              </label>

                              <input
                                className="is-checkradio is-rtl "
                                id="exampleRtlRadioInline12"
                                type="radio"
                                name="guided"
                              />
                              <label
                                for="exampleRtlRadioInline12"
                                className="ffqs fw2"
                                style={{ paddingLeft: "1em" }}
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
                            <div class="field">
                              <input
                                className="is-checkradio is-rtl"
                                id="exampleRtlRadioInline13"
                                type="radio"
                                name="accommodation"
                                checked="checked"
                              />
                              <label
                                for="exampleRtlRadioInline13"
                                className="ffqs fw2"
                              >
                                Basic amenities
                              </label>

                              <input
                                className="is-checkradio is-rtl "
                                id="exampleRtlRadioInline14"
                                type="radio"
                                name="accommodation"
                              />
                              <label
                                for="exampleRtlRadioInline14"
                                className="ffqs fw2"
                                style={{ paddingLeft: "1em" }}
                              >
                                3 star
                              </label>

                              <input
                                className="is-checkradio is-rtl "
                                id="exampleRtlRadioInline15"
                                type="radio"
                                name="accommodation"
                              />
                              <label
                                for="exampleRtlRadioInline15"
                                className="ffqs fw2"
                                style={{ paddingLeft: "1em" }}
                              >
                                5 star
                              </label>

                              <input
                                className="is-checkradio is-rtl "
                                id="exampleRtlRadioInline16"
                                type="radio"
                                name="accommodation"
                              />
                              <label
                                for="exampleRtlRadioInline16"
                                className="ffqs fw2"
                                style={{ paddingLeft: "1em" }}
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
                            <div class="field">
                              <input
                                className="is-checkradio is-rtl"
                                id="exampleRtlRadioInline17"
                                type="radio"
                                name="cab"
                                checked="checked"
                              />
                              <label
                                for="exampleRtlRadioInline17"
                                className="ffqs fw2"
                              >
                                Yes
                              </label>

                              <input
                                className="is-checkradio is-rtl "
                                id="exampleRtlRadioInline18"
                                type="radio"
                                name="cab"
                              />
                              <label
                                for="exampleRtlRadioInline18"
                                className="ffqs fw2"
                                style={{ paddingLeft: "1em" }}
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
                      Would you like to include sight seeing in this package ?
                    </label>

                    <div className="field-body">
                      <div className="field ">
                        <div className="control">
                          <Segment>
                            <div class="field">
                              <input
                                className="is-checkradio is-rtl"
                                id="exampleRtlRadioInline19"
                                type="radio"
                                name="destination"
                                checked="checked"
                              />
                              <label
                                for="exampleRtlRadioInline19"
                                className="ffqs fw2"
                              >
                                Yes
                              </label>

                              <input
                                className="is-checkradio is-rtl "
                                id="exampleRtlRadioInline20"
                                type="radio"
                                name="destination"
                              />
                              <label
                                for="exampleRtlRadioInline20"
                                className="ffqs fw2"
                                style={{ paddingLeft: "1em" }}
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
                      Would you like to include sight seeing in this package ?
                    </label>

                    <div className="field-body">
                      <div className="field ">
                        <div className="control">
                          <Segment>
                            <div class="field">
                              <input
                                className="is-checkradio is-rtl"
                                id="exampleRtlRadioInline19"
                                type="radio"
                                name="destination"
                                checked="checked"
                              />
                              <label
                                for="exampleRtlRadioInline19"
                                className="ffqs fw2"
                              >
                                Yes
                              </label>

                              <input
                                className="is-checkradio is-rtl "
                                id="exampleRtlRadioInline20"
                                type="radio"
                                name="destination"
                              />
                              <label
                                for="exampleRtlRadioInline20"
                                className="ffqs fw2"
                                style={{ paddingLeft: "1em" }}
                              >
                                No
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

export default Explore;
