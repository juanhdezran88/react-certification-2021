import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import './NotFound.styles.css';
import { useGlobal } from '../../providers/Global/Global.provider';

function NotFoundPage() {
  const { getStorageState } = useGlobal();
  useEffect(() => getStorageState(), []);
  return (
    <section className="not-found">
      <Link to="/" className="home-link">
        home
      </Link>
      <img src="404.gif" alt="page not found" />
    </section>
  );
}

export default NotFoundPage;
