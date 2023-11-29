import React from 'react';
import RegistrationForm from './RegistrationForm.js';

import '../styles/InstagramRegistration.css';

const InstagramRegistration = () => {
  return (
    <div className="registration-container">
      <div className='border-div'>
        <RegistrationForm />
      </div>
    </div>
  );
}

export default InstagramRegistration;