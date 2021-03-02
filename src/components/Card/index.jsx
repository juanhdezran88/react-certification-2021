import React from 'react';
import { Image, CardWrapper } from './styled';

const Card = ({title, imageURL, description, publishedDate}) => {
  return (
    <CardWrapper className="ui card" data-testid="card-wrapper">
      <a className="image" href="/">
        <Image backgroundImage={imageURL} />
      </a>
      <div className="content">
        <a className="header" href="/">{title}</a>
        <div className="meta">
          <a className="published-date" href="/">{publishedDate}</a>
        </div>
        <div className="description">{description}</div>
      </div>
    </CardWrapper>
  );
}

export default Card;