import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import GlobalContext from '../../utils/globalContext';
import Card from '../Card';
import { INITIAL_STATE } from '../../utils/constants';

const cardProps = {
  videoId: 'wdyg367t3',
  title: 'Wizeline',
  imageURL: 'https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg',
  description: 'description',
  publishedDate: '2019-09-30T23:54:32Z',
  showDetail: jest.fn(),
};

const providerValues = {
  state: INITIAL_STATE,
  dispatch: jest.fn(),
};

const customRender = (ui, context) => {
  return render(<GlobalContext.Provider value={context}>{ui}</GlobalContext.Provider>);
};

describe('Card component', () => {
  it('should render a card', () => {
    customRender(<Card {...cardProps} />, providerValues);
    expect(screen.getByTestId('card-wrapper')).toHaveClass('card');
  });

  it('should render a header', () => {
    customRender(<Card {...cardProps} />, providerValues);
    const headersList = screen.getByTestId('card-wrapper').querySelectorAll('.header');
    const [header] = headersList;

    expect(headersList).toHaveLength(1);
    expect(header).toHaveClass('header');
    expect(header).toHaveTextContent(cardProps.title);
  });

  it('should render a description', () => {
    customRender(<Card {...cardProps} />, providerValues);
    const descriptionsList = screen.getByTestId('card-wrapper').querySelectorAll('.description');
    const [description] = descriptionsList;

    expect(descriptionsList).toHaveLength(1);
    expect(description).toHaveClass('description');
    expect(description).toHaveTextContent(cardProps.description);
  });

  it('should render an image', () => {
    customRender(<Card {...cardProps} />, providerValues);
    const imagesList = screen.getByTestId('card-wrapper').querySelectorAll('.image');
    const [image] = imagesList;

    expect(imagesList).toHaveLength(1);
    expect(image).toHaveClass('image');
    expect(image.firstChild).toHaveStyle(`background-image: url(${cardProps.imageURL})`);
  });

  it('should render a date', () => {
    customRender(<Card {...cardProps} />, providerValues);
    const publishedDatesList = screen.getByTestId('card-wrapper').querySelectorAll('.published-date');
    const [publishedDate] = publishedDatesList;

    expect(publishedDatesList).toHaveLength(1);
    expect(publishedDate).toHaveClass('published-date');
    expect(publishedDate).toHaveTextContent(cardProps.publishedDate);
  });

  it('should call showDetail function when click on it', () => {
    customRender(<Card {...cardProps} />, providerValues);
    const card = screen.getByTestId('card-wrapper');
    fireEvent.click(card);
    expect(cardProps.showDetail).toHaveBeenCalled();
  });
});
