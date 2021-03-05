import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Modal from '../Modal';

const modalProps = {
  videoId: 'wdyg367t3',
  title: 'Wizeline',
  description: 'description',
  closeAction: jest.fn(),
};

describe('Modal component', () => {
  it('should render a modal title', () => {
    render(<Modal {...modalProps} />);
    expect(screen.getByTestId('modal-wrapper')).toHaveClass('modal-wrapper');
  });

  it('should render a video', () => {
    render(<Modal {...modalProps} />);
    const headersList = screen.getByTestId('modal-wrapper').querySelectorAll('.header');
    const [header] = headersList;

    expect(headersList).toHaveLength(1);
    expect(header).toHaveClass('header');
    expect(header).toHaveTextContent(modalProps.title);
  });

  it('should render a description', () => {
    render(<Modal {...modalProps} />);
    const descriptionsList = screen.getByTestId('modal-wrapper').querySelectorAll('.description');
    const [description] = descriptionsList;

    expect(descriptionsList).toHaveLength(1);
    expect(description).toHaveClass('description');
    expect(description).toHaveTextContent(modalProps.description);
  });

  it('should call closeAction function', () => {
    render(<Modal {...modalProps} />);
    const button = screen.getByText('Close');
    fireEvent.click(button);
    expect(modalProps.closeAction).toHaveBeenCalled();
  });
});
