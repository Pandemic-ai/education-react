import React, { Component } from "react";
import Calendar from "react_google_calendar";

const calendar_configuration = {
  api_key: "AIzaSyAOuDzSlG24RPBn3OKVAyjW3OK_EJhCUbp",
  calendars: [
    {
      name: "AIzaSyAOuDzSlG24RPBn3OKVAyjW3OK_EJhCUbp",
      url:
        "https://www.googleapis.com/calendar/v3/calendars/tb8ckdrm61bdsj6jfm7khob4u5@group.calendar.google.com/events?key=AIzaSyAOuDzSlG24RPBn3OKVAyjW3OK_EJhCUbp"
    }
  ],
  dailyRecurrence: 700,
  weeklyRecurrence: 500,
  monthlyRecurrence: 20
};

class Calender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }

  render() {
    return (
      <div>
        <Calendar events={this.state.events} config={calendar_configuration} />
      </div>
    );
  }
}

export default Calender;
