import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './styled';
import { useGlobal } from '../../providers/Global/Global.provider';
import { useAuth } from '../../providers/Auth/Auth.provider';

const Sidebar = () => {
  const { state } = useGlobal();
  const { authenticated } = useAuth();
  return (
    <Navbar display={state.sidebar ? '' : 'none'} data-testid="sidebar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        { authenticated &&
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        }
      </ul>
    </Navbar>
  );
};

export default Sidebar;
