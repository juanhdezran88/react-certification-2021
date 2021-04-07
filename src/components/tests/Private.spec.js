import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Private from '../Private';
import AuthProvider from '../../providers/Auth/Auth.provider';
import GlobalProvider from '../../providers/Global/Global.provider';

const customRender = (ui) => {
  return render(
      <BrowserRouter>
        <GlobalProvider>
          <AuthProvider>{ui}</AuthProvider>
      </GlobalProvider>
    </BrowserRouter>
  );
};

describe('Private component', () => {
  it('should render the private component', () => {
    customRender(<Private />);
    expect(screen.getByTestId('private-route')).toBeDefined();
  });
});
