import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import Header from '../Header';
import GlobalProvider from '../../providers/Global/Global.provider';
import AuthProvider from '../../providers/Auth/Auth.provider';

const mockSearchFn = jest.fn(() => {
  return {
    result: {
      items: [],
    },
  };
});

jest.mock('../../utils/hooks/useYoutube', () => {
  return jest.fn(() => {
    return {
      search: mockSearchFn,
      isYoutubeReady: true,
    };
  });
});

const customRender = (ui) => {
  return act(() => {
    render(
      <BrowserRouter>
        <GlobalProvider>
          <AuthProvider>{ui}</AuthProvider>
        </GlobalProvider>
      </BrowserRouter>
    );
  });
};

const getBySelector = (selector) => {
  return screen.getByTestId('header').querySelectorAll(selector);
};

describe('Header component', () => {
  it('should render a header', () => {
    customRender(<Header />);
    expect(screen.getByTestId('header')).not.toBeEmptyDOMElement();
  });

  it('should render a search input', () => {
    customRender(<Header />);
    const [input] = getBySelector('.search-input');
    expect(input).toHaveClass('search-input');
  });

  it('should render a toggle checkbox', () => {
    customRender(<Header />);
    const [toggle] = getBySelector('.toggle');
    expect(toggle).toHaveClass('checkbox');
  });

  it('should render a toggle checkbox', () => {
    customRender(<Header />);
    const [toggle] = getBySelector('.toggle');
    expect(toggle).toHaveClass('checkbox');
    expect(toggle).toHaveTextContent('Dark mode');
  });

  it('should render a sign in button', () => {
    customRender(<Header />);
    const button = screen.getByText('Sign In');
    expect(button).toBeDefined();
    expect(button).toHaveClass('button');
  });

  it('should call search function when the user hits the enter key', () => {
    customRender(<Header />);
    const [input] = getBySelector('.search-input');
    fireEvent.change(input, { taget: { value: 'wizeline' } });
    fireEvent.keyPress(input, { key: "Enter", code: 13, charCode: 13 });
    expect(mockSearchFn).toHaveBeenCalled();
  });
});
