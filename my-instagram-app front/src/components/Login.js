import React from 'react';
import LoginForm from './LoginForm';
import { useForm } from 'react-hook-form'
import '../styles/InstagramRegistration.css';


const Login = () => {

  return (
    <div className="registration-container">
      <div className='border-div'>
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;