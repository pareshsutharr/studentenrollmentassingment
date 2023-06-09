import React, { useState } from 'react';
import { Provider} from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import Page1 from './components/Page1';
import Chatbot from './components/Chatbot';
import Page3 from './components/Page3';

const store = createStore(rootReducer);

const App = () => {
  const [step, setStep] = useState(1);

  const handleEnrollClick = () => {
    setStep(2);
  };

  const handleExit = () => {
    setStep(3);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Page1 onNext={handleEnrollClick} />;
      case 2:
        return <Chatbot onExit={handleExit} />;
      case 3:
        return <Page3 />;
      default:
        return null;
    }
  };

  return (
    <Provider store={store}>
      <div className="App">
        {renderStep()}
      </div>
    </Provider>
  );
};

export default App;
