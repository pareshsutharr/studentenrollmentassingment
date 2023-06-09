import React from 'react';
import '../App.css'

const Page1 = ({ onNext }) => {

  const handleEnrollClick = () => {
    onNext();
  };

  return (
    <div className='page1-div'>
      <h1>Enter into Student Info System</h1>
      <div>
      <button onClick={handleEnrollClick}>Enroll Now!</button>
      </div>
    </div>
  );
};

export default Page1;
