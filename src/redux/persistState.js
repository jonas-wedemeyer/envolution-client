export const fetchState = () => {
  try {
    const savedState = localStorage.getItem('state');
    if (savedState === null) {
      return undefined;
    }
    return JSON.parse(savedState);
  } catch (err) {
    return undefined;
  }
};

export const storeState = (state) => {
  try {
    const stateToSave = JSON.stringify(state);
    localStorage.setItem('state', stateToSave);
    return stateToSave;
  } catch (err) {
    return undefined;
  }
};
