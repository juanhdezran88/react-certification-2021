import React, { useContext, useEffect, useState } from 'react';
import GlobalContext from '../../utils/globalContext';
import { HeaderPanel, SearchInput, ControlPanel, Toggle } from './styled';
import useYoutube from '../../utils/hooks/useYoutube';

const Header = () => {
  const { setTheme, setVideos } = useContext(GlobalContext);
  const { search, isYoutubeReady } = useYoutube();
  const [query, setQuery] = useState('Wizeline');

  useEffect(() => {
    if(isYoutubeReady) {
      executeSearch();
    }
  }, [isYoutubeReady]);

  const handleDarkMode = (e) => {
    const isChecked = e.target.checked;
    setTheme(isChecked ? 'dark' : 'main');
  };

  const handleSearch = async (e) => {
    if(e.key === 'Enter') {
      executeSearch();
    }
  };

  const executeSearch = async () => {
    const resultSearch = await search(query);
    setVideos(resultSearch.result.items);
  };

  const handleOnChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <HeaderPanel data-testid="header">
      <div className="ui icon button toggle-button">
        <i className="bars icon"></i>
      </div>
      <SearchInput
        type="text"
        className="search-input"
        placeholder="Search..."
        onKeyDown={handleSearch}
        value={query}
        onChange={handleOnChange}
      />
      <ControlPanel>
          <Toggle className="ui toggle checkbox">
            <input type="checkbox" onChange={handleDarkMode} />
            <label>Dark mode</label>
          </Toggle>
        <div className="ui red button">
          <i className="sign in alternate icon"></i>
          Sign In
        </div>
      </ControlPanel>
    </HeaderPanel>
  );
};

export default Header;
