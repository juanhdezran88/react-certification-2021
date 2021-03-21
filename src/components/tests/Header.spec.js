import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../Header';
import GlobalContext from '../../utils/globalContext';
import { INITIAL_STATE } from '../../utils/constants';

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

const providerValues = {
  state: INITIAL_STATE,
  dispatch: jest.fn(),
};

const customRender = (ui) => {
  return render(<GlobalContext.Provider value={providerValues}>{ui}</GlobalContext.Provider>);
};

describe('Header component', () => {
  it('should render a header', () => {
    customRender(<Header />);
    expect(screen.getByTestId('header')).not.toBeEmptyDOMElement();
  });

  it('should render a search input', () => {
    customRender(<Header />);
    const [input] = screen.getByTestId('header').querySelectorAll('.search-input');
    expect(input).toHaveClass('search-input');
  });

  it('should render a toggle checkbox', () => {
    customRender(<Header />);
    const [toggle] = screen.getByTestId('header').querySelectorAll('.toggle');
    expect(toggle).toHaveClass('checkbox');
  });

  it('should render a toggle checkbox', () => {
    customRender(<Header />);
    const [toggle] = screen.getByTestId('header').querySelectorAll('.toggle');
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
    const [input] = screen.getByTestId('header').querySelectorAll('.search-input');
    fireEvent.change(input, { taget: { value: 'wizeline' } });
    fireEvent.keyPress(input, { key: "Enter", code: 13, charCode: 13 });
    expect(mockSearchFn).toHaveBeenCalled();
  });
});
