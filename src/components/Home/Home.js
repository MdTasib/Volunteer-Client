import React from 'react';
import Event from '../Event/Event';

const events = [
  {
    name: 'Child Support',
    pic: 'https://cdn.pixabay.com/photo/2021/07/26/22/04/sea-shell-6495338__340.jpg'
  },
  {
    name: 'Animal Shelter',
    pic: 'https://cdn.pixabay.com/photo/2021/07/26/13/24/el-6494302__340.jpg'
  },
  {
    name: 'Bird House',
    pic: 'https://cdn.pixabay.com/photo/2021/07/31/15/04/flowers-6512185__340.jpg'
  },
  {
    name: 'Good Student',
    pic: 'https://cdn.pixabay.com/photo/2021/07/21/12/22/lavenders-6482952__340.jpg'
  },
  {
    name: 'Child Support',
    pic: 'https://cdn.pixabay.com/photo/2021/07/26/22/04/sea-shell-6495338__340.jpg'
  },
  {
    name: 'Animal Shelter',
    pic: 'https://cdn.pixabay.com/photo/2021/07/26/13/24/el-6494302__340.jpg'
  },
  {
    name: 'Bird House',
    pic: 'https://cdn.pixabay.com/photo/2021/07/31/15/04/flowers-6512185__340.jpg'
  },
  {
    name: 'Good Student',
    pic: 'https://cdn.pixabay.com/photo/2021/07/21/12/22/lavenders-6482952__340.jpg'
  },
]

const Home = () => {
  return (
    <div className='row'>
      {
        events.map(event => < Event event={event} />)
      }
    </div>
  );
};

export default Home;