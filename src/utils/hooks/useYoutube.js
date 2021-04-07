import { useState, useEffect } from 'react';

const path = 'https://www.googleapis.com/youtube/v3', maxResults = 20;


const useYoutube = () => {
  const [isYoutubeReady, setIsYoutubeReady] = useState(false);

  useEffect(() => {
    window.gapi.load('client', youtubeInit);

  }, []);

  const youtubeInit = () => {
    window.gapi.client.init({
      'apiKey': process.env.REACT_APP_YOUTUBE_KEY,
    }).then(() => {
      setIsYoutubeReady(true);
    }).catch((e) => {
      console.error('ERROR conecting to youtube', e);
    });
  };

  const search = (query) => {
    return window.gapi.client.request({
        path: `${path}/search?q=${query}&part=id&part=snippet&maxResults=${maxResults}`,
    });
  };

  return { search, isYoutubeReady };
};

export default useYoutube;
