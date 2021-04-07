import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from '../Sidebar';
import GlobalProvider from '../../providers/Global/Global.provider';
import AuthProvider from '../../providers/Auth/Auth.provider';

const customRender = (ui) => {
  return render(
    <BrowserRouter>
      <GlobalProvider>
        <AuthProvider>{ui}</AuthProvider>
      </GlobalProvider>
    </BrowserRouter>
  );
};

describe('Sidebar component', () => {
  it('should render a sidebar', () => {
    customRender(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeDefined();
  });

  it('should contain li elements', async () => {
    await customRender(<Sidebar />);
    const sidebar = screen.getByTestId('sidebar');
    await expect(sidebar.querySelectorAll('li')).toHaveLength(1);
  });
});
