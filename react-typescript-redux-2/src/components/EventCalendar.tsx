import React from "react";
import { Calendar, List } from "antd";
import { IEvent } from "../models/IEvent";
import { Moment } from "moment";
import { formatDate } from "../utils/date";

interface EventCalendarProps {
  events: IEvent[];
}

const EventCalendar: React.FC<EventCalendarProps> = (props) => {
  function dateCellRender(value: Moment) {
    const formatedDate = formatDate(value.toDate());
    const curretDayEvents = props.events.filter(
      (ev) => ev.date === formatedDate
    );
    return (
      <List size="small" itemLayout="horizontal">
        {curretDayEvents.map((ev, index) => (
          <List.Item key={index}>
            <List.Item.Meta
              title={(index + 1).toString()}
              description={ev.description}
            />
          </List.Item>
        ))}
      </List>
    );
  }
  return <Calendar dateCellRender={dateCellRender} />;
};

export default EventCalendar;
