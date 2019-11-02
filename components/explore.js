import "react-dates/initialize";
import { Segment } from "semantic-ui-react";
import { SingleDatePicker } from "react-dates";
import { COUNTRY_CODE } from "../constants";

import "react-dates/lib/css/_datepicker.css";
import "bulma-checkradio";

import "./explore.css";

const Explore = props => {
  return (
    <React.Fragment>
      <div className="explore-container">
        <div className="columns letter-spacing-1px">
          <div className="column is-three-fifths is-offset-one-fifth">
            <Segment style={{ marginTop: "3em" }}>
              <div className="columns">
                <div className="column is-8 is-offset-one-fifth">
                  <h4 className="ffqs explore-title">Plan Your Trip</h4>

                  {props.exploreState.gate ? (
                    <React.Fragment>
                      <div className="field">
                        <label className="label is-medium ffqs fw2">Name</label>

                        <div className="field-body">
                          <div className="field">
                            <p className="control is-expanded">
                              <input
                                className="input is-large"
                                type="text"
                                placeholder="Aaron Swartz"
                                onChange={event => props.onChangeName(event)}
                              />
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
                                className={
                                  props.exploreState.exploreEmailError.flag
                                    ? "input is-large is-danger"
                                    : "input is-large"
                                }
                                type="text"
                                placeholder="Open@Code"
                                onChange={event => props.onChangeEmail(event)}
                              />
                            </p>
                          </div>
                        </div>

                        {props.exploreState.exploreEmailError.flag ? (
                          <p class="help is-danger">
                            {props.exploreState.exploreEmailError.msg}
                          </p>
                        ) : null}
                      </div>

                      <div className="field">
                        <label className="label is-medium ffqs fw2">
                          Phone
                        </label>
                        <div className="field-body">
                          <div className="field">
                            <div className="control ffqs fw2">
                              <div className="columns is-gapless">
                                <div className="column is-3">
                                  <div className="select is-large br0">
                                    <select
                                      className="br0"
                                      defaultValue="+91"
                                      onChange={e =>
                                        props.onChangeMobileCode(e)
                                      }
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
                          What kind of Escape are you looking for ?
                        </label>

                        <div className="field-body">
                          <div className="field ">
                            <div className="control">
                              <Segment>
                                <div className="field">
                                  <input
                                    className="is-checkradio is-danger"
                                    id="Incity-Escape"
                                    type="radio"
                                    name="escape"
                                    value="Incity Escape"
                                    defaultChecked
                                    onChange={event =>
                                      props.onChangeEscapeType(event)
                                    }
                                  />
                                  <label
                                    htmlFor="Incity-Escape"
                                    className="ffqs fw2"
                                  >
                                    Incity Escape
                                  </label>

                                  <input
                                    className="is-checkradio is-danger"
                                    id="Outstation"
                                    type="radio"
                                    name="escape"
                                    value="Outstation"
                                    style={{ paddingLeft: "1em" }}
                                    onChange={event =>
                                      props.onChangeEscapeType(event)
                                    }
                                  />
                                  <label
                                    htmlFor="Outstation"
                                    className="ffqs fw2"
                                  >
                                    Outstation
                                  </label>

                                  <input
                                    className="is-checkradio is-danger"
                                    id="Wonderlust/Nature"
                                    type="radio"
                                    name="escape"
                                    value="Wonderlust/Nature"
                                    style={{ paddingLeft: "1em" }}
                                    onChange={event =>
                                      props.onChangeEscapeType(event)
                                    }
                                  />
                                  <label
                                    htmlFor="Wonderlust/Nature"
                                    className="ffqs fw2"
                                  >
                                    Wonderlust/Nature
                                  </label>
                                </div>

                                <div className="field mt1">
                                  <input
                                    className="is-checkradio is-danger"
                                    id="Backpacking"
                                    type="radio"
                                    name="escape"
                                    value="Backpacking"
                                    onChange={event =>
                                      props.onChangeEscapeType(event)
                                    }
                                  />
                                  <label
                                    htmlFor="Backpacking"
                                    className="ffqs fw2"
                                  >
                                    Backpacking
                                  </label>

                                  <input
                                    className="is-checkradio is-danger"
                                    id="Group-Outing"
                                    type="radio"
                                    name="escape"
                                    value="Group Outing"
                                    style={{ paddingLeft: "1em" }}
                                    onChange={event =>
                                      props.onChangeEscapeType(event)
                                    }
                                  />
                                  <label
                                    htmlFor="Group-Outing"
                                    className="ffqs fw2"
                                  >
                                    Group Outing
                                  </label>

                                  <input
                                    className="is-checkradio is-danger"
                                    id="Adventurous"
                                    type="radio"
                                    name="escape"
                                    value="Adventurous"
                                    style={{ paddingLeft: "1em" }}
                                    onChange={event =>
                                      props.onChangeEscapeType(event)
                                    }
                                  />
                                  <label
                                    htmlFor="Adventurous"
                                    className="ffqs fw2"
                                  >
                                    Adventurous
                                  </label>
                                </div>

                                <div className="field mt1">
                                  <input
                                    className="is-checkradio is-danger"
                                    id="Religious"
                                    type="radio"
                                    name="escape"
                                    value="Religious"
                                    onChange={event =>
                                      props.onChangeEscapeType(event)
                                    }
                                  />
                                  <label
                                    htmlFor="Religious"
                                    className="ffqs fw2"
                                  >
                                    Religious
                                  </label>

                                  <input
                                    className="is-checkradio is-danger"
                                    id="Luxury"
                                    type="radio"
                                    name="escape"
                                    value="Luxury"
                                    style={{ paddingLeft: "1em" }}
                                    onChange={event =>
                                      props.onChangeEscapeType(event)
                                    }
                                  />
                                  <label htmlFor="Luxury" className="ffqs fw2">
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
                                    defaultChecked
                                    className="is-checkradio is-danger"
                                    id="Private"
                                    type="radio"
                                    name="tour"
                                    value="Private"
                                    onChange={event =>
                                      props.onChangeTourType(event)
                                    }
                                  />
                                  <label htmlFor="Private" className="ffqs fw2">
                                    Private
                                  </label>

                                  <input
                                    className="is-checkradio is-danger"
                                    id="Group"
                                    type="radio"
                                    name="tour"
                                    value="Group"
                                    style={{ paddingLeft: "1em" }}
                                    onChange={event =>
                                      props.onChangeTourType(event)
                                    }
                                  />
                                  <label htmlFor="Group" className="ffqs fw2">
                                    Group
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
                                    className="is-checkradio is-danger"
                                    id="Yes"
                                    type="radio"
                                    name="guided"
                                    value="Yes"
                                    defaultChecked
                                    onChange={event =>
                                      props.onChangeTourCoordination(event)
                                    }
                                  />
                                  <label htmlFor="Yes" className="ffqs fw2">
                                    Yes
                                  </label>

                                  <input
                                    className="is-checkradio is-danger"
                                    id="No"
                                    type="radio"
                                    name="guided"
                                    value="No"
                                    onChange={event =>
                                      props.onChangeTourCoordination(event)
                                    }
                                    style={{ paddingLeft: "1em" }}
                                  />
                                  <label htmlFor="No" className="ffqs fw2">
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
                              <SingleDatePicker
                                showDefaultInputIcon={true}
                                date={props.exploreState.exploreTourDate}
                                id="date"
                                onDateChange={date => props.onChangeDate(date)}
                                focused={props.exploreState.focused}
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
                          Total duration of trip in days and nights ?
                        </label>

                        <div className="field-body">
                          <div className="field">
                            <p className="control is-expanded">
                              <input
                                className="input is-medium"
                                type="text"
                                placeholder="3-days 4-nights"
                                value={props.exploreState.exploreTourDuration}
                                onChange={event =>
                                  props.onChangeTourDuration(event)
                                }
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
                                  value={props.exploreState.exploreAdult}
                                  onChange={event => props.onChangeAdult(event)}
                                />
                              </p>
                            </div>

                            <div className="field">
                              <p className="control is-expanded">
                                <input
                                  className="input is-medium"
                                  type="number"
                                  placeholder="Children"
                                  value={props.exploreState.exploreChildren}
                                  onChange={event =>
                                    props.onChangeChildren(event)
                                  }
                                />
                              </p>
                            </div>

                            <div className="field">
                              <p className="control is-expanded">
                                <input
                                  className="input is-medium"
                                  type="number"
                                  placeholder="Pet"
                                  value={props.exploreState.explorePet}
                                  onChange={event => props.onChangePet(event)}
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
                                    defaultChecked
                                    className="is-checkradio is-danger"
                                    id="Amenities"
                                    type="radio"
                                    name="accommodation"
                                    value="Basic Amenities"
                                    onChange={event =>
                                      props.onChangeAccomodation(event)
                                    }
                                  />
                                  <label
                                    htmlFor="Amenities"
                                    className="ffqs fw2"
                                  >
                                    Basic Amenities
                                  </label>

                                  <input
                                    className="is-checkradio is-danger"
                                    id="3-star"
                                    type="radio"
                                    name="accommodation"
                                    value="3 star"
                                    style={{ paddingLeft: "1em" }}
                                    onChange={event =>
                                      props.onChangeAccomodation(event)
                                    }
                                  />
                                  <label htmlFor="3-star" className="ffqs fw2">
                                    3 star
                                  </label>

                                  <input
                                    className="is-checkradio is-danger"
                                    id="5-star"
                                    type="radio"
                                    name="accommodation"
                                    value="5 star"
                                    style={{ paddingLeft: "1em" }}
                                    onChange={event =>
                                      props.onChangeAccomodation(event)
                                    }
                                  />
                                  <label htmlFor="5-star" className="ffqs fw2">
                                    5 star
                                  </label>

                                  <input
                                    className="is-checkradio is-danger"
                                    id="Luxury-Stay"
                                    type="radio"
                                    name="accommodation"
                                    value="Luxury Stay"
                                    style={{ paddingLeft: "1em" }}
                                    onChange={event =>
                                      props.onChangeAccomodation(event)
                                    }
                                  />
                                  <label
                                    htmlFor="Luxury-Stay"
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
                                    className="is-checkradio is-danger"
                                    id="Yes-Cab"
                                    type="radio"
                                    name="cab"
                                    value="Yes-Cab"
                                    defaultChecked
                                    onChange={event =>
                                      props.onChangeCabService(event)
                                    }
                                  />
                                  <label htmlFor="Yes-Cab" className="ffqs fw2">
                                    Yes
                                  </label>

                                  <input
                                    className="is-checkradio is-danger"
                                    id="No-Cab"
                                    type="radio"
                                    name="cab"
                                    value="No-Cab"
                                    style={{ paddingLeft: "1em" }}
                                    onChange={event =>
                                      props.onChangeCabService(event)
                                    }
                                  />
                                  <label htmlFor="No-Cab" className="ffqs fw2">
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
                                onChange={event =>
                                  props.onChangeDestination(event)
                                }
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
                                    className="is-checkradio is-danger"
                                    id="Yes-sight"
                                    type="radio"
                                    name="destination"
                                    value="Yes"
                                    defaultChecked
                                    onChange={event =>
                                      props.onChangeSightSeeing(event)
                                    }
                                  />
                                  <label
                                    htmlFor="Yes-sight"
                                    className="ffqs fw2"
                                  >
                                    Yes
                                  </label>

                                  <input
                                    className="is-checkradio is-danger"
                                    id="No-sight"
                                    type="radio"
                                    name="destination"
                                    value="No"
                                    style={{ paddingLeft: "1em" }}
                                    onChange={event =>
                                      props.onChangeSightSeeing(event)
                                    }
                                  />
                                  <label
                                    htmlFor="No-sight"
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

              {props.exploreState.gate ? (
                <a
                  className="button is-danger button-previous ff"
                  style={{ backgroundColor: "#fdb6c4" }}
                  disabled
                >
                  PREVIOUS
                </a>
              ) : (
                <a
                  className="button is-danger button-previous ff"
                  onClick={() => props.onChangeGate(true)}
                >
                  PREVIOUS
                </a>
              )}

              {props.exploreState.exploreNextButton ? (
                <a
                  className="button is-warning button-next ff"
                  onClick={
                    props.exploreState.gate
                      ? () => props.onChangeGate(false)
                      : () => props.onClickExploreButton()
                  }
                >
                  {props.exploreState.gate ? "NEXT" : "SUBMIT"}
                </a>
              ) : (
                <a
                  className="button is-warning button-next ff"
                  disabled
                  style={{ backgroundColor: "#fdeeb5" }}
                >
                  {props.exploreState.gate ? "NEXT" : "SUBMIT"}
                </a>
              )}
            </Segment>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Explore;
