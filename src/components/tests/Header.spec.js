import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Header from '../Header';
import useYoutube from '../../utils/hooks/useYoutube';

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

describe('Header component', () => {
  it('should render a header', () => {
    render(<Header />);
    expect(screen.getByTestId('header')).not.toBeEmptyDOMElement();
  });

  it('should render a search input', () => {
    render(<Header />);
    const [input] = screen.getByTestId('header').querySelectorAll('.search-input');
    expect(input).toHaveClass('search-input');
  });

  it('should render a toggle checkbox', () => {
    render(<Header />);
    const [toggle] = screen.getByTestId('header').querySelectorAll('.toggle');
    expect(toggle).toHaveClass('checkbox');
  });

  it('should render a toggle checkbox', () => {
    render(<Header />);
    const [toggle] = screen.getByTestId('header').querySelectorAll('.toggle');
    expect(toggle).toHaveClass('checkbox');
    expect(toggle).toHaveTextContent('Dark mode');
  });

  it('should render a sign in button', () => {
    render(<Header />);
    const button = screen.getByText('Sign In');
    expect(button).toBeDefined();
    expect(button).toHaveClass('button');
  });

  it('should call search function when the user hits the enter key', () => {
    render(<Header />);
    const [input] = screen.getByTestId('header').querySelectorAll('.search-input');
    fireEvent.change(input, { taget: { value: 'wizeline' } });
    fireEvent.keyPress(input, { key: "Enter", code: 13, charCode: 13 });
    expect(mockSearchFn).toHaveBeenCalled();
  });
});
