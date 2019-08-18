export const fetchState = () => {
  try {
    const savedState = localStorage.getItem('ZW52b2x1dGlvbg==');
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
    localStorage.setItem('ZW52b2x1dGlvbg==', stateToSave);
    return stateToSave;
  } catch (err) {
    return undefined;
  }
};
