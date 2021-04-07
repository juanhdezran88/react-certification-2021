import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import GlobalProvider from '../../providers/Global/Global.provider';

const mockLoad = jest.fn();
window.gapi = {
  load: mockLoad
};

const mockState = {
  state: {
    theme: 'main',
  },
};

const customRender = (ui) => {
  return render(<GlobalProvider {...mockState}>{ui}</GlobalProvider>);
};

describe('App component', () => {
  it('should render the app component', () => {
    customRender(<App />);
    expect(screen.getByTestId('app-root')).toBeDefined();
  });
});
