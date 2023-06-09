const initialState = {
    name: '',
    age: null,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USER_NAME':
        return {
          ...state,
          name: action.payload,
        };
      case 'SET_USER_AGE':
        return {
          ...state,
          age: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  