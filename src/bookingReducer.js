export const initializeTimes = () => {
  const today = new Date();
  return window.fetchAPI(today);
};

export const updateTimes = (state, action) => {
  if (action.type === 'update') {
    return window.fetchAPI(new Date(action.date));
  }
  return state;
};
