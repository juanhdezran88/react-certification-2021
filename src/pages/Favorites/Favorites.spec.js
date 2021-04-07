import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FavoritesPage from './Favorites.page';
import GlobalProvider from '../../providers/Global/Global.provider';
import AuthProvider from '../../providers/Auth/Auth.provider';

const mockLoad = jest.fn();
window.gapi = {
  load: mockLoad
};

const customRender = (ui) => {
  return render(
      <BrowserRouter>
        <GlobalProvider>
          <AuthProvider>{ui}</AuthProvider>
      </GlobalProvider>
    </BrowserRouter>
  );
};

describe('Favorites page', () => {
  it('should render the favorites page', () => {
    customRender(<FavoritesPage />);
    expect(screen.getByTestId('favorites-page')).toBeDefined();
  });
});
