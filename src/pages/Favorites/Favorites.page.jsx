import React, { useEffect, useState } from 'react';
import { useGlobal } from '../../providers/Global/Global.provider';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import Card from '../../components/Card';
import Modal from '../../components/Modal';
import { Favoritespage, Main, ContentWrapper } from './styled';
import { storage } from '../../utils/storage';
import { FAVORITES_STORAGE_KEY } from '../../utils/constants';

function FavoritesPage() {
  const [videos] = useState(storage.get(FAVORITES_STORAGE_KEY) || []);
  const { getStorageState, dispatch } = useGlobal();
  const [showModal, setShowModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState({
    title: '',
    description: '',
    videoId: '',
  });

  useEffect(() => {
    getStorageState();
    dispatch({ type: 'SET_SIDEBAR', payload: false });
  }, []);

  const closeDetail = () => {
    setShowModal(false);
  };

  const showDetail = (data) => {
    setSelectedVideo(data);
    setShowModal(true);
  };

  return (
    <Favoritespage className="favoritespage" data-testid="favorites-page">
      <Sidebar />
      <Main>
        <Header />
        {showModal && <Modal {...selectedVideo} closeAction={closeDetail} />}
        <ContentWrapper>
          {videos.map((video, i) => {
            const { videoId, title, description, imageURL = '', publishedAt = '' } = video;
            return (
              <Card
                key={videoId + i}
                videoId={videoId}
                title={title}
                imageURL={imageURL}
                description={description}
                publishedDate={publishedAt ? new Date(publishedAt).toDateString() : ''}
                showDetail={showDetail}
              />
            );
          })}
        </ContentWrapper>
      </Main>
    </Favoritespage>
  );
}

export default FavoritesPage;
