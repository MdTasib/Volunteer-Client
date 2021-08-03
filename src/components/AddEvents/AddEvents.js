import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddEvents = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    const imageData = new FormData();
    imageData.set('key', 'eb7bb93d7839539a8bddb41471f7e0da');
    imageData.append('image', file);

    axios.post('https://api.imgbb.com/1/upload', imageData)
      .then(res => {
        console.log(res.data.data.display_url);
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <form className='w-50' onSubmit={handleSubmit(onSubmit)}>
      <input
        className='form-control m-2'
        defaultValue="test" {...register("example")}
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