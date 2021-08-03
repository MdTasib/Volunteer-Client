import React from 'react';

const Event = ({ event }) => {
  return (
    <div className='col-md-4 rounded'>
      <img style={{ height: '210px', width: '200px' }} src={event.imageUrl} alt="" />
      <h3>{event.name}</h3>
    </div>
  );
};

export default Event;