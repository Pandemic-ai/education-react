import React, { Component } from "react";
import PropTypes from "prop-types";
const EventCalendar = require("react-event-calendar");

class Calender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }

  render() {
    const events = [
      {
        start: "2015-07-20",
        end: "2015-07-02",
        eventClasses: "optionalEvent",
        title: "test event",
        description: "This is a test description of an event"
      },
      {
        start: "2015-07-19",
        end: "2015-07-25",
        title: "test event",
        description: "This is a test description of an event",
        data: "you can add what ever random data you may want to use later"
      }
    ];
    return (
      <div>
        <EventCalendar
          month={7}
          year={2015}
          events={events}
          onEventClick={(target, eventData, day) => console.log(eventData)}
        />
      </div>
    );
  }
}

Calender.propTypes = {
  test: PropTypes.string
};

export default Calender;
