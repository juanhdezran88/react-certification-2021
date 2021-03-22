const GlobalReducer = (state, action) => {
  switch (action.type) {
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    case 'SET_VIDEOS':
      return { ...state, videos: action.payload };
    case 'SET_SEARCH':
      return { ...state, search: action.payload };
    default:
      return state;
  }
};

export default GlobalReducer;
