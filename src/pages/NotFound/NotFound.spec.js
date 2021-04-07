import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NotFoundPage from './NotFound.page';
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

describe('Not Found page', () => {
  it('should render the not found page', () => {
    customRender(<NotFoundPage />);
    expect(screen.getByTestId('not-found-page')).toBeDefined();
  });
});
