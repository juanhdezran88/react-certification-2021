import React, { useEffect, useState } from 'react';
import { HeaderPanel, SearchInput, ControlPanel, Toggle, Btn, UserInfo } from './styled';
import useYoutube from '../../utils/hooks/useYoutube';
import { useGlobal } from '../../providers/Global/Global.provider';
import { useAuth } from '../../providers/Auth';
import LoginPage from '../../pages/Login';

const Header = ({ searchEnabled = true }) => {
  const { state, dispatch } = useGlobal();
  const { search, isYoutubeReady } = useYoutube();
  const { authenticated, logout } = useAuth();
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    if(isYoutubeReady && searchEnabled) {
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
      setShowLogin(true);
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
      {searchEnabled && (
        <SearchInput
          type="text"
          className="search-input"
          placeholder="Search..."
          onKeyDown={handleSearch}
          value={state.search}
          onChange={handleOnChange}
        />
      )}
      {authenticated && (
        <UserInfo>
          <img className="ui avatar image" src={state.user.avatarUrl} alt={state.user.name} />
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
      <LoginPage showLogin={showLogin} onClose={() => setShowLogin(false)} />
    </HeaderPanel>
  );
};

export default Header;
