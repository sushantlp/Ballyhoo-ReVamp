import "react-dates/initialize";
import { Segment } from "semantic-ui-react";
import {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController
} from "react-dates";
// import DatePicker from "react-date-picker";
// import DatePicker from "react-date-picker/dist/entry.nostyle";

// import "../node_modules/react-date-picker/dist/DatePicker.css";
// import "../node_modules/react-calendar/dist/Calendar.css";
import "react-dates/lib/css/_datepicker.css";
import "./profile.css";
import "bulma-checkradio";

const Profile = props => {
  const date = null;
  return (
    <React.Fragment>
      <div className="enquiry-container">
        <div className="columns">
          <div className="column is-three-fifths is-offset-one-fifth">
            <Segment style={{ marginTop: "3em" }}>
              <div className="columns">
                <div className="column is-8 is-offset-one-fifth">
                  <h4 className="ffqs enquiry-title">Group Booking</h4>
                  <SingleDatePicker
                    date={date} // momentPropTypes.momentObj or null
                    //   onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
                    focused={true} // PropTypes.bool
                    //   onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                    id="1" // PropTypes.string.isRequired,
                  />
                </div>
              </div>
            </Segment>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Profile;
