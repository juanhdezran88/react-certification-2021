const AUTH_STORAGE_KEY = 'wa_cert_authenticated';
const GLOBAL_STORAGE_KEY = 'wa_cert_state';
const FAVORITES_STORAGE_KEY = 'wa_favorites';

const INITIAL_STATE = {
  theme: 'main',
  videos: [],
  search: 'Wizeline',
  user: {},
  sidebar: false,
};

export { AUTH_STORAGE_KEY, INITIAL_STATE, GLOBAL_STORAGE_KEY, FAVORITES_STORAGE_KEY };
