import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { HeaderPanel, SearchInput, ControlPanel, Toggle, Btn, UserInfo } from './styled';
import useYoutube from '../../utils/hooks/useYoutube';
import { useGlobal } from '../../providers/Global/Global.provider';
import { useAuth } from '../../providers/Auth';

const Header = () => {
  const { state, dispatch } = useGlobal();
  const { search, isYoutubeReady } = useYoutube();
  const { authenticated, logout } = useAuth();
  const history = useHistory();

  useEffect(() => {
    if(isYoutubeReady) {
      executeSearch();
    }
  }, [isYoutubeReady]);

  const handleDarkMode = (e) => {
    const isChecked = e.target.checked;
    dispatch({ type: 'SET_THEME', payload: isChecked ? 'dark' : 'main' });
  };

  const handleSearch = async (e) => {
    if(e.key === 'Enter') {
      executeSearch();
    }
  };

  const executeSearch = async () => {
    const resultSearch = await search(state.search);
    dispatch({ type: 'SET_VIDEOS', payload: resultSearch.result.items });
  };

  const handleOnChange = (e) => {
    dispatch({ type: 'SET_SEARCH', payload: e.target.value });
  };

  const handleSession = () => {
    if (!authenticated) {
      history.push('/login');
    } else {
      dispatch({ type: 'LOGOUT' });
      logout();
    }
  };

  const handleSidebar = () => {
    dispatch({ type: 'SET_SIDEBAR', payload: !state.sidebar });
  };

  return (
    <HeaderPanel data-testid="header">
      <Btn className="ui icon button toggle-button" onClick={handleSidebar}>
        <i className="bars icon"></i>
      </Btn>
      <SearchInput
        type="text"
        className="search-input"
        placeholder="Search..."
        onKeyDown={handleSearch}
        value={state.search}
        onChange={handleOnChange}
      />
      {authenticated && (
        <UserInfo>
          <img
            class="ui avatar image"
            src={state.user.avatarUrl}
            alt={state.user.name}
          />
          <span>Welcome {state.user.name}</span>
        </UserInfo>
      )}
      <ControlPanel>
        <Toggle className="ui toggle checkbox">
          <input type="checkbox" onChange={handleDarkMode} />          
          <label>Dark mode</label>
        </Toggle>
        <Btn className="ui red button" onClick={handleSession}>
          <i className="sign in alternate icon"></i>
          { authenticated ? 'Logout' : 'Sign In' }
        </Btn>
      </ControlPanel>
    </HeaderPanel>
  );
};

export default Header;
