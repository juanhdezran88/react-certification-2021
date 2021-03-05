import React from 'react';
import { Image, CardWrapper } from './styled';

const Card = ({ videoId, title, imageURL, description, publishedDate, showDetail }) => {
  return (
    <CardWrapper
      className="ui card"
      data-testid="card-wrapper"
      onClick={() => {
        showDetail({
          title,
          description,
          videoId,
        });
      }}
    >
      <a className="image">
        <Image backgroundImage={imageURL} />
      </a>
      <div className="content">
        <a className="header" href="/">{title}</a>
        <div className="meta">
          <a className="published-date">{publishedDate}</a>
        </div>
        <div className="description">{description}</div>
      </div>
    </CardWrapper>
  );
}

export default Card;