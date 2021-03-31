import React from 'react';
import { Image, CardWrapper, ImageLink } from './styled';

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
          imageURL,
          publishedDate,
        });
      }}
    >
      { imageURL &&
        <ImageLink className="image">
          <Image backgroundImage={imageURL} />
        </ImageLink>
      }
      <div className="content">
        <a className="header" href="/">{title}</a>
        { publishedDate &&
          <div className="meta">
            <a className="published-date">{publishedDate}</a>
          </div>
        }
        <div className="description">{description}</div>
      </div>
    </CardWrapper>
  );
}

export default Card;
