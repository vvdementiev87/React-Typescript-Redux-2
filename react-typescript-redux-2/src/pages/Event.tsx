import { Button, Layout, Modal, Row } from "antd";
import React, { useEffect, useState } from "react";
import EventCalendar from "../components/EventCalendar";
import EventForm from "../components/EventForm";
import { useAction } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { IEvent } from "../models/IEvent";

const Event: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { fetchGuests, createEvent, fetchEvents } = useAction();
  const { guests, events } = useTypedSelector((state) => state.event);
  const { user } = useTypedSelector((state) => state.auth);

  useEffect(() => {
    fetchGuests();
    fetchEvents(user.username);
  }, []);
  const addNewEvent = (event: IEvent) => {
    setModalVisible(!modalVisible);
    createEvent(event);
  };
  return (
    <Layout>
      <EventCalendar events={events} />
      <Row justify="center">
        <Button onClick={() => setModalVisible(!modalVisible)}>
          Add action
        </Button>
      </Row>
      <Modal
        title="Add action"
        visible={modalVisible}
        footer={null}
        onCancel={() => setModalVisible(!modalVisible)}
      >
        <EventForm guest={guests} submit={addNewEvent} />
      </Modal>
    </Layout>
  );
};

export default Event;
