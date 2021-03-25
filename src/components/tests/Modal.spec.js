import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Modal from '../Modal';
import GlobalProvider, { useGlobal } from '../../providers/Global/Global.provider';

const modalProps = {
  videoId: 'wdyg367t3',
  title: 'Wizeline',
  description: 'description',
  closeAction: jest.fn(),
  imageURL: '',
  publishedDate: '',
};

const MockComponent = () => {
  //const {} = useGlobal();
};

const customRender = (ui) => {
  return render(<GlobalProvider>{ui}</GlobalProvider>);
};

describe('Modal component', () => {
  it('should render a modal title', () => {
    customRender(<Modal {...modalProps} />);
    expect(screen.getByTestId('modal-wrapper')).toHaveClass('modal-wrapper');
  });

  it('should render a video', () => {
    customRender(<Modal {...modalProps} />);
    const headersList = screen.getByTestId('modal-wrapper').querySelectorAll('.header');
    const [header] = headersList;

    expect(headersList).toHaveLength(1);
    expect(header).toHaveClass('header');
    expect(header).toHaveTextContent(modalProps.title);
  });

  it('should render a description', () => {
    customRender(<Modal {...modalProps} />);
    const descriptionsList = screen.getByTestId('modal-wrapper').querySelectorAll('.description');
    const [description] = descriptionsList;

    expect(descriptionsList).toHaveLength(1);
    expect(description).toHaveClass('description');
    expect(description).toHaveTextContent(modalProps.description);
  });

  it('should call closeAction function', () => {
    customRender(<Modal {...modalProps} />);
    const button = screen.getByText('Close');
    fireEvent.click(button);
    expect(modalProps.closeAction).toHaveBeenCalled();
  });

  it('should render an add to favorites button', () => {
    customRender(<Modal {...modalProps} />);
    const button = screen.getByText('Add to Favorites');
    expect(button).toBeDefined();
  });

  it('should render a remove from favorites button', () => {
    customRender(<Modal {...modalProps} />);
    const addButton = screen.getByText('Add to Favorites');
    fireEvent.click(addButton);
    const removeButton = screen.getByText('Remove from Favorites');
    expect(removeButton).toBeDefined();
  });
});
