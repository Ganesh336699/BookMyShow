import React from 'react'
import AuthForm from './AuthForm'
import { sendUserAuthRequest } from '../../api-helpers/api-helpers.js';
import { userActions } from '../../store/index.js';
import { useDispatch } from 'react-redux';

const Auth = () => {
  
  const dispatch = useDispatch();
  const onResReceived = (data) => {
    console.log(data);
    dispatch(userActions.login());
    localStorage.setItem("userId", data.id);
   
  };
  const getData = (data) => {

    console.log(data);
    sendUserAuthRequest(data.inputs, data.signup).then(onResReceived).catch((err) => console.log(err));
    
  };


  return (
    <div>
      <AuthForm    onSubmit={getData} isAdmin={false}/>
    </div>
  )
}

export default Auth;