import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUserName, setUserAge } from '../actions';
import '../App.css'
import { ImExit } from "react-icons/im";

const Chatbot = ({ onExit }) => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showNamePrompt, setShowNamePrompt] = useState(false);
  const [showAgePrompt, setShowAgePrompt] = useState(false);
  const [name, setName] = useState('');
  const [age, setAge] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(true);
      setShowNamePrompt(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  let temp = true
  const handleGotItClick = () => {
    if (showNamePrompt && temp) {
      showuserenteredname(true);
      setShowNamePrompt(true);
      setShowAgePrompt(true);
      temp = false
    } else if (showAgePrompt) {
      setShowAgePrompt(false);
      onExit();
    }
  };

  const showuserenteredname=()=>{
    // const textnode = document.createTextNode(name);
    let temp =  document.getElementsByClassName("username")[0]
     temp.innerHTML = `${name}`
    temp.style.display = "block"
  }

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  useEffect(() => {
    if (name !== '') {
      dispatch(setUserName(name));
    }
  }, [name, dispatch]);

  useEffect(() => {
    if (age !== null) {
      dispatch(setUserAge(age));
    }
  }, [age, dispatch]);

  return (
    <>
    <div>
    <div id='chatbot-header'>
        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="profile-logo" />
        <h3>Student Enrollment</h3>
        <div className='exit-icons'><ImExit/></div>
    </div>
      {showWelcome && <div className='entername'> <img src="https://png.pngtree.com/png-vector/20220630/ourmid/pngtree-chat-bot-logo-vector-template-png-image_5579481.png" alt='bot-logo'/><p>Hello, Welcome to student info system!</p></div>}
      {showNamePrompt && (
        <>
        <div className='entername'>
          <img src="https://png.pngtree.com/png-vector/20220630/ourmid/pngtree-chat-bot-logo-vector-template-png-image_5579481.png" alt='bot-logo'/><p>Enter your Name</p>
          <input type="text" value={name} onChange={handleNameChange} className='footer-input' placeholder='Enter Your Name'/>
          </div>
          </>
      )}
       {showuserenteredname ? <div className='username'></div>:null}
      {showAgePrompt && (
        <>
        <div className='entername'>
          <img src="https://png.pngtree.com/png-vector/20220630/ourmid/pngtree-chat-bot-logo-vector-template-png-image_5579481.png" alt='bot-logo'/><p>Enter your Age</p>
          </div>
          <select value={age} onChange={handleAgeChange}  className='footer-input'>
            <option value="">Select</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
            <option value="32">32</option>
            <option value="33">33</option>
            <option value="34">34</option>
            <option value="35">35</option>
            <option value="36">36</option>
            <option value="37">37</option>
            <option value="38">38</option>
            <option value="39">39</option>
            <option value="40">40</option>
          </select>
        </>
      )}
      <button onClick={handleGotItClick} className='send-btn'>Got it!</button>
    </div>
    </>
  );
};

export default Chatbot;
