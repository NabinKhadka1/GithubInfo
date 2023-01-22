import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./Loading";
import styled from "styled-components";

const AuthContainer = ({ children }) => {
  const { isLoading, error } = useAuth0();
  if (isLoading) {
    return (
      <Container>
        <Loading />
      </Container>
    );
  }
  if (error) {
    return (
      <Container>
        <h1>{error.message}</h1>
      </Container>
    );
  }
  return <>{children}</>;
};
export default AuthContainer;

const Container = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  img {
    width: 150px;
  }
`;
