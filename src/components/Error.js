import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
const Error = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <ErrorPage>
      <h2>Error</h2>
      <p>Sorry, the page cannot be found</p>
      {isAuthenticated && (
        <NavLink to="/" className="btn">
          Back Home
        </NavLink>
      )}
      {!isAuthenticated && (
        <NavLink to="/login" className="btn">
          Back Home
        </NavLink>
      )}
    </ErrorPage>
  );
};
export default Error;

const ErrorPage = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: var(--error-background);

  h2 {
    font-size: 80px;
  }
  p {
    margin: 15px 0;
    font-size: 16px;
    text-transform: capitalize;
  }
  a {
    text-decoration: none;
  }
  a:hover {
    background: var(--btn-color);
    border: 1px solid var(--btn-background);
    color: var(--btn-background);
  }
  @media screen and (min-width: 440px) {
    p {
      font-size: 30px;
    }
  }
`;
