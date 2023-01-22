import styled from "styled-components";

import UserFollowers from "./UserFollowers";
import UserInfo from "./UserInfo";
const User = () => {
  return (
    <UserContainer>
      <UserInfo />
      <UserFollowers />
    </UserContainer>
  );
};
export default User;

const UserContainer = styled.section`
  width: 95vw;
  max-width: 600px;
  margin: 0 auto;
  .article__user {
    background: #fff;
    border-radius: 4px;
    margin-bottom: 15px;
  }
  .article__header {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    grid-column-gap: 10px;
    padding: 10px;
  }
  .article__header-info > h4 {
    font-size: 18px;
  }
  .article__links {
    padding: 10px;
  }
  .article__links > p {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 15px;
  }
  img {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 50%;
  }
  .article__header > a {
    color: var(--primary);
    border: 1px solid var(--primary);
    text-decoration: none;
    padding: 7px 10px;
    border-radius: 7px;
  }
  p {
    padding: 10px;
    color: var(--black-variant);
  }
  .followers__container {
    overflow: scroll;
    height: 400px;
  }
  .followers {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-column-gap: 25px;
    align-items: center;
    background: #fff;
    border-radius: 4px;
    padding: 10px;
  }
  .followers__info > h3 {
    margin-bottom: 10px;
  }
  .followers__info > a {
    text-decoration: none;
    color: var(--black-variant);
  }

  @media screen and (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 10px;
  }
  @media screen and (min-width: 900px) {
    max-width: 1200px;
    grid-template-columns: repeat(2, 1fr);

    grid-column-gap: 25px;
    .article__user {
      padding: 10px;
    }
    .article__header-info > h4 {
      font-size: 25px;
    }
  }
`;
