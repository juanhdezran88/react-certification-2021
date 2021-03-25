import React, { useEffect, useState } from 'react';
import { useGlobal } from '../../providers/Global/Global.provider';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import Card from '../../components/Card';
import Modal from '../../components/Modal';
import { Homepage, Main, ContentWrapper } from './styled';

function HomePage() {
  const { state, getStorageState, dispatch } = useGlobal();
  const [showModal, setShowModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState({
    title: '',
    description: '',
    videoId: '',
    imageUrl: '',
    publishedDate: '',
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
    <Homepage className="homepage" data-testid="home-page">
      <Sidebar />
      <Main>
        <Header />
        {showModal && <Modal {...selectedVideo} closeAction={closeDetail} />}
        <ContentWrapper>
          {state.videos.map((video, i) => {
            const {
              id: { videoId = '' } = {},
              snippet: {
                title = '',
                thumbnails: { medium: { url = '' } = {} } = {},
                description = '',
                publishedAt = '',
              } = {},
            } = video;
            return (
              <Card
                key={videoId + i}
                videoId={videoId}
                title={title}
                imageURL={url}
                description={description}
                publishedDate={new Date(publishedAt).toDateString()}
                showDetail={showDetail}
              />
            );
          })}
        </ContentWrapper>
      </Main>
    </Homepage>
  );
}

export default HomePage;
