import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const UserForm = () => {
  const { register, handleSubmit, errors } = useForm({ mode: 'onBlur' });

  let history = useHistory();

  const login = async (credentials, evt) => {
    evt.preventDefault();

    try {
      const { data } = await axiosWithAuth().post('/login', credentials)
      localStorage.setItem('token', data.token);
      history.push('/users');
    }
    catch(err) {
      console.dir(err);
    }
  };

  /* "handleSubmit" validates your inputs before invoking "onSubmit" */
  return (
    <form onSubmit={handleSubmit(login)}>
      {/* register input into the hook by invoking the "register" function */}
      <input 
        name="username" 
        placeholder="Username" 
        ref={register({ required: true })} 
        autoFocus 
      />
      {errors.username && <p>This field is required</p>}
      <input 
        name="password" 
        placeholder="Password" 
        ref={register({ required: true })} 
        type="password" 
      />
      {errors.password && <p>This field is required</p>}
      <br />
      <button type="submit">Log In</button>
    </form>
  );
}

export default UserForm;