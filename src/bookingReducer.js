/* global fetchAPI, submitAPI */

export const initializeTimes = () => {
    const today = new Date();
    return window.fetchAPI(today); // ✅ use window.fetchAPI
  };
  
  export const updateTimes = (state, action) => {
    if (action.type === 'update') {
      return window.fetchAPI(new Date(action.date)); // ✅ use window.fetchAPI
    }
    return state;
  };  