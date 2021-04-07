import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SecretPage from './Secret.page';
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

describe('Secret page', () => {
  it('should render the secret page', () => {
    customRender(<SecretPage />);
    expect(screen.getByTestId('secret-page')).toBeDefined();
  });
});
