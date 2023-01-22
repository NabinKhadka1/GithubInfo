import styled from "styled-components";
import { GoRepo } from "react-icons/go";
import { FiUserPlus, FiUsers } from "react-icons/fi";
import { VscGist } from "react-icons/vsc";
import { useContext } from "react";
import { githubContext } from "../context";

const Info = () => {
  const { githubUser } = useContext(githubContext);
  const { followers, following, public_repos, public_gists } = githubUser;
  const items = [
    {
      id: 1,
      icon: <GoRepo />,
      title: "repos",
      value: public_repos,
      color: "red"
    },
    {
      id: 2,
      icon: <FiUsers />,
      title: "followers",
      value: followers,
      color: "green"
    },
    {
      id: 3,
      icon: <FiUserPlus />,
      title: "following",
      value: following,
      color: "purple"
    },
    {
      id: 4,
      icon: <VscGist />,
      title: "gists",
      value: public_gists,
      color: "yellow"
    }
  ];
  return (
    <InfoContainer>
      <div className="article-container">
        {items.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </InfoContainer>
  );
};
export default Info;

const Item = ({ icon, title, value, color }) => {
  return (
    <article>
      <div className={`image-container ${color}`}>{icon}</div>
      <div className={"article__info"}>
        <h3>{value}</h3>
        <p>{title}</p>
      </div>
    </article>
  );
};

const InfoContainer = styled.section`
  margin: 40px 0;
  .article-container {
    width: 95vw;
    margin: 0 auto;
    max-width: 400px;
  }
  article {
    background: #fff;
    padding: 10px 8px;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-column-gap: 80px;
    align-items: center;
    max-width: 400px;
    margin-bottom: 15px;
    border-radius: 4px;
  }
  .image-container {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: relative;
  }
  .image-container > svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .article__info {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 10px;
  }
  .article__info > h3 {
    font-size: 25px;
  }
  .article__info > p {
    font-size: 18px;
    text-transform: capitalize;
    color: var(--black-variant);
  }
  .red {
    background: var(--light-red);
  }
  .green {
    background: var(--light-green);
  }
  .purple {
    background: var(--light-purple);
  }
  .yellow {
    background: var(--light-yellow);
  }
  @media screen and (min-width: 460px) {
    .article-container {
      max-width: 600px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 10px;
    }
  }
  @media screen and (min-width: 900px) {
    .article-container {
      grid-template-columns: repeat(4, 1fr);
      max-width: 1200px;
      grid-column-gap: 20px;
    }
  }
`;
