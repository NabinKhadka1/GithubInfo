import ImgLogin from "./images/img-login.svg";
import styled from "styled-components";
import {useAuth0} from '@auth0/auth0-react';
const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Container>
      <img src={ImgLogin} alt="github-user" />
      <button className="btn" onClick={loginWithRedirect}>
        Login | Signup
      </button>
    </Container>
  );
};
export default Login;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  img {
    max-width: 250px;
    object-fit: cover;
  }
  button {
    margin-top: 60px;
    background: var(--primary);
    border: 1px solid var(--primary);
    &:hover {
      background: var(--background);
      border: 1px solid var(--primary);
      color: var(--primary);
    }
  }

  @media screen and (min-width: 500px) {
    img {
      max-width: 500px;
    }
  }
`;
