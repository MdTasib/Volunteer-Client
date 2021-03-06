import React, { useState, useEffect } from 'react';
import Event from '../Event/Event';

const Home = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/events')
      .then(res => res.json())
      .then(data => setEvents(data));
  }, [])

  return (
    <div className='row'>
      {
        events.map(event => < Event key={event._id} event={event} />)
      }
    </div>
  );
};

export default Home;