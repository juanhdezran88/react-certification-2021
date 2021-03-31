import styled from 'styled-components';

const ImageLink = styled.a`
  @media (max-width: 600px) {
    width: 28%;
  }
`;

const Image = styled.div`
  display: block;
  width: 100%;
  height: 10rem;
  border-radius: inherit;
  background-image: url('${(props) => props.backgroundImage}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 600px) {
    height: 100%;
  }
`;

const CardWrapper = styled.div`
  background-color: ${(props) => props.theme.lightBg} !important;
  min-height: 28rem !important;
  cursor: pointer;

  @media (max-width: 600px) {
    width: 100% !important;
    flex-direction: row !important;
    min-height: 11rem !important;
    margin: 2px 10px 5px 10px !important;
  }
`;

export { Image, CardWrapper, ImageLink };
