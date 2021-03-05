import React from 'react';

const Detail = ({ title, description, videoId, closeAction }) => {

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
          <div className="ui cancel button" onClick={closeAction}>Close</div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
