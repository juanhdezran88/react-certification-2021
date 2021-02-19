import React from 'react';
import Navbar from './styled';

const Sidebar = () => {
  return (
    <Navbar display="none">
      <ul>
        <li>Home</li>
        <li>Favorites</li>
      </ul>
    </Navbar>
  );
};

export default Sidebar;
