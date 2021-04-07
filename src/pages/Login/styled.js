import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0, .7);
  z-index: 1000;
`;
const Login = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #FFF;
  padding: 50px;
  z-index: 1000;
  width: 30rem;

  h1 {
    text-align: center;
    letter-spacing: -1px;
  }

  .login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .form-group {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }

  .form-group strong {
    display: block;
    font-weight: 700;
    text-transform: capitalize;
    margin-bottom: 0.4rem;
  }

  .form-group input {
    color: #333;
    font-size: 1.2rem;
    width: 100%;
    padding: 0.4rem 0.6rem;
    border-radius: 3px;
    border: 1px solid white;
    background-color: rgba(0, 0, 0, 0.1);
  }

  .error-message {
    color: red;
  }

  .actions {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: baseline;
    margin: 2rem 0;
  }
`;

export { Overlay, Login };
