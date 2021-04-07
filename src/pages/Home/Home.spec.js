import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './Home.page';
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

describe('Home page', () => {
  it('should render the home page', () => {
    customRender(<HomePage />);
    expect(screen.getByTestId('home-page')).toBeDefined();
  });
});
