import React from 'react';

const Event = ({ event }) => {
  return (
    <div className='col-md-3 rounded'>
      <img style={{ height: '200px', width: '200px' }} src={event.pic} alt="" />
      <h3>{event.name}</h3>
    </div>
  );
};

export default Event;