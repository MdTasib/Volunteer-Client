import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddEvents = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [imageUrl, setImageUrl] = useState('');
  console.log(imageUrl);

  const onSubmit = data => {
    let eventData = {
      name: data.name,
      imageUrl: imageUrl,
    }

    const url = `http://localhost:4000/addEvent`;
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(eventData)
    })
      .then(res => {
        console.log('server response', res);
      })
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    const imageData = new FormData();
    imageData.set('key', 'eb7bb93d7839539a8bddb41471f7e0da');
    imageData.append('image', file);

    axios.post('https://api.imgbb.com/1/upload', imageData)
      .then(res => {
        setImageUrl(res.data.data.display_url);
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <form className='w-50' onSubmit={handleSubmit(onSubmit)}>
      <input
        name='event'
        className='form-control m-2'
        defaultValue="" {...register("name")}
        placeholder='Your Event Name'
      />
      <input
        onChange={handleImageUpload}
        type='file'
        className='form-control m-2'
      // {...register("exampleRequired", { required: true })}
      />
      {errors.exampleRequired && <span>This field is required</span>}

      <input
        className='btn btn-primary m-2'
        type="submit"
      />
    </form>
  );
};

export default AddEvents;