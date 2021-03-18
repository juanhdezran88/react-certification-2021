import React, { useContext, useEffect } from 'react';
import GlobalContext from '../../utils/globalContext';
import { HeaderPanel, SearchInput, ControlPanel, Toggle, Btn } from './styled';
import useYoutube from '../../utils/hooks/useYoutube';

const Header = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const { search, isYoutubeReady } = useYoutube();

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

  return (
    <HeaderPanel data-testid="header">
      <Btn className="ui icon button toggle-button">
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
      <ControlPanel>
        <Toggle className="ui toggle checkbox">
          <input type="checkbox" onChange={handleDarkMode} />
          <label>Dark mode</label>
        </Toggle>
        <Btn className="ui red button">
          <i className="sign in alternate icon"></i>
          Sign In
        </Btn>
      </ControlPanel>
    </HeaderPanel>
  );
};

export default Header;
