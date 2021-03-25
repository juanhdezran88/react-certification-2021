import React, { useState } from 'react';
import { useGlobal } from '../../providers/Global/Global.provider';

const Detail = ({
  title,
  description,
  videoId,
  closeAction,
  imageURL,
  publishedDate,
}) => {
const { isInFavorites, addFavorite, removeFavorite } = useGlobal();
const [favorite, setFavorite] = useState(isInFavorites(videoId));
const addToFavorites = () => {
    addFavorite({ title, description, videoId, imageURL, publishedDate });
    setFavorite(true);
};
const removeFromFavorites = () => {
    removeFavorite(videoId);
    setFavorite(false);
};
return (
    <div
      className="ui dimmer modals page top aligned transition visible active modal-wrapper"
      data-testid="modal-wrapper"
    >
      <div className="ui special modal transition visible active">
        <div className="header">{title}</div>
        <div className="content">
          <iframe
            width="100%"
            height="500px"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
          />
          <p className="description">{description}</p>
        </div>
        <div className="actions">
          { !favorite && <div className="ui blue button" onClick={addToFavorites}>Add to Favorites</div> }
          { favorite && <div className="ui red button" onClick={removeFromFavorites}>Remove from Favorites</div> }
          <div className="ui cancel button" onClick={closeAction}>Close</div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
