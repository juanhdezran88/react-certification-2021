const GlobalReducer = (state, action) => {
  switch (action.type) {
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    case 'SET_VIDEOS':
      return { ...state, videos: action.payload };
    case 'SET_SEARCH':
      return { ...state, search: action.payload };
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'LOGOUT':
      return { ...state, user: {} };
    case 'SET_STATE':
      return { ...action.payload };
    case 'SET_SIDEBAR':
      return { ...state, sidebar: action.payload };
    default:
      return state;
  }
};

export default GlobalReducer;
