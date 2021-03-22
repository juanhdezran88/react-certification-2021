import React, { useContext, useState } from 'react';
import GlobalContext from '../../utils/globalContext';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import Card from '../../components/Card';
import Modal from '../../components/Modal';
import { Homepage, Main, ContentWrapper } from './styled';

function HomePage() {
  const { state } = useContext(GlobalContext);
  const [showModal, setShowModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState({
    title: '',
    description: '',
    videoId: '',
  });

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
                publishedAt = ''
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
