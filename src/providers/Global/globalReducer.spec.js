import GlobalReducer from './globalReducer';
import { INITIAL_STATE } from '../../utils/constants';

describe('Global reducer', () => {
  it('should set the theme', () => {
    const result = GlobalReducer(INITIAL_STATE, { type: 'SET_THEME', payload: 'dark' });
    expect(result.theme).toBe('dark');
  });

  it('should set the videos', () => {
    const videos = [{ videoId: '1' }, { videoId: '2' }, { videoId: '3' }];
    const result = GlobalReducer(INITIAL_STATE, { type: 'SET_VIDEOS', payload: videos });
    expect(result.videos).toHaveLength(3);
    expect(result.videos).toEqual(videos);
  });

  it('should set a search term', () => {
    const result = GlobalReducer(INITIAL_STATE, {
      type: 'SET_SEARCH',
      payload: 'WIZELINE',
    });
    expect(result.search).toBe('WIZELINE');
  });

  it('should set a user', () => {
    const user = { userId: '1', name: 'test' };
    const result = GlobalReducer(INITIAL_STATE, { type: 'SET_USER', payload: user });
    expect(result.user).toEqual(user);
  });

  it('should logout the user', () => {
    const result = GlobalReducer(INITIAL_STATE, { type: 'LOGOUT' });
    expect(result.user).toEqual({});
  });

  it('should set the state', () => {
    const stateUpdated = {
      theme: 'dark',
      videos: [],
      search: 'term',
      user: { name: 'test' },
      sidebar: true,
    };
    const result = GlobalReducer(INITIAL_STATE, {
      type: 'SET_STATE',
      payload: stateUpdated,
    });
    expect(result).toEqual(stateUpdated);
  });

  it('should set the sidebar property', () => {
    const result = GlobalReducer(INITIAL_STATE, { type: 'SET_SIDEBAR', payload: true });
    expect(result.sidebar).toBe(true);
  });
});
