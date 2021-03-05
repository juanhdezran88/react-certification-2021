import { act, renderHook } from '@testing-library/react-hooks';
import useYoutube from '../useYoutube';

const mockLoad = jest.fn();
window.gapi = {
  load: mockLoad
};

describe('useYouTube', () => {
  it('should initialize the youtube hook', async () => {
    renderHook(() => useYoutube());
    expect(mockLoad).toHaveBeenCalled();
  });

  it('should has a search function', async () => {
    const { result } = renderHook(() => useYoutube());
    expect(result.current.search).toBeDefined();
  });

  it('should has an isYoutubeReady property', async () => {
    const { result } = renderHook(() => useYoutube());
    expect(result.current.isYoutubeReady).toBeDefined();
    expect(result.current.isYoutubeReady).toBeFalsy();
  });
});
