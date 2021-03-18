import styled from 'styled-components';

const Image = styled.div`
  display: block;
  width: 100%;
  height: 10rem;
  border-radius: inherit;
  background-image: url('${(props) => props.backgroundImage}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const CardWrapper = styled.div`
  background-color: ${(props) => props.theme.lightBg} !important;
  min-height: 28rem !important;
  cursor: pointer;
`;

export { Image, CardWrapper };
