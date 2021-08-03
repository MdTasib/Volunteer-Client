import React, { useState, useEffect } from 'react';
import EventsManage from '../EventsManage/EventsManage';

const Dasboard = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/events')
      .then(res => res.json())
      .then(data => setEvents(data));
  }, []);

  return (
    <div className='rounded row'>
      {
        events.map(event => <EventsManage key={event._id} event={event} />)
      }
    </div>
  );
};

export default Dasboard;