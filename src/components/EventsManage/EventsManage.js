import React from 'react';

const EventsManage = ({ event }) => {
  const deleteEvent = (event, id) => {
    fetch(`http://localhost:4000/deleteEvent/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          event.target.parentNode.style.display = 'none';
        }
      });
  }

  return (
    <div className='col-md-3 p-3' key={event._id}>
      <img style={{ width: '150px' }} src={event.imageUrl} alt="" />
      <p>{event.name}</p>
      <button onClick={() => deleteEvent(event, event._id)} className='btn btn-danger'>Delete</button>
    </div>
  );
};

export default EventsManage;