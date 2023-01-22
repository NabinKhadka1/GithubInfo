import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import avatar from "./images/avatar.svg";

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth0();
  const authenticatedUser = isAuthenticated && user;

  const handleProfileError = (e) => {
    e.target.src = avatar;
  };
  return (
    <NavContainer>
      <nav>
        {authenticatedUser && user.picture && (
          <img
            src={authenticatedUser.picture}
            alt={user.name}
            onError={handleProfileError}
          />
        )}
        {authenticatedUser && user.name && (
          <h3>
            Welcome,<span>{user.name}</span>
          </h3>
        )}
        {authenticatedUser && (
          <button onClick={() => logout({ returnTo: window.location.origin })}>
            Logout
          </button>
        )}
      </nav>
    </NavContainer>
  );
};
export default Navbar;

const NavContainer = styled.section`
  background: #fff;
  margin-bottom: 50px;
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 600px;
    padding: 20px;
    margin: 0 auto;
  }

  img {
    width: 32px;
    object-fit: cover;
    height: 32px;
    border-radius: 50%;
  }
  h3 {
    display: none;
    color: var(--black-variant);
    font-size: 16px;
    span {
      color: var(--heading);
      text-transform: uppercase;
    }
  }
  button {
    background: transparent;
    border: none;
    cursor: pointer;
    color: var(--black-variant);
    font-size: 25px;
  }
  @media screen and (min-width: 460px) {
    h3 {
      display: block;
      font-size: 20px;
    }
  }
  @media screen and (min-width: 600px) {
    h3 {
      font-size: 25px;
    }
  }
`;
