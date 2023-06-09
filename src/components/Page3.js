import React from 'react';
import { useSelector } from 'react-redux';
import { ImExit } from "react-icons/im";

const Page3 = () => {
  const { name, age } = useSelector((state) => state);

  return (
    <>
    <div id='chatbot-header'>
        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="profile-logo" />
        <h3>Student Enrollment</h3>
        <div className='exit-icons'><ImExit/></div>
    </div>
    <div className='entername'>
          <img src="https://png.pngtree.com/png-vector/20220630/ourmid/pngtree-chat-bot-logo-vector-template-png-image_5579481.png" alt='bot-logo'/><p>Your name {name} aged {age} has been added to student system.</p> 
    </div>
      <p className='footer-input now-exit' >You may now exit.</p>
    </>
  );
};

export default Page3;

