import { useContext } from "react";
import { githubContext } from "../context";
import { BsBuilding } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { BsLink } from "react-icons/bs";
const UserInfo = () => {
  const { githubUser } = useContext(githubContext);
  const {
    bio,
    avatar_url,
    html_url,
    name,
    blog,
    location,
    company,
    twitter_username,
  } = githubUser;
  return (
    <article className="article__user">
      <div className="article__header">
        <img src={avatar_url} alt="profile" />
        <div className="article__header-info">
          <h4>{name}</h4>
          <p>{twitter_username || "@john doe"}</p>
        </div>
        <a href={html_url}>Follow</a>
      </div>
      <p>{bio}</p>
      <div className="article__links">
        <p>
          <BsBuilding />
          {company || ""}
        </p>
        <p>
          <GoLocation />
          {location || "earth"}
        </p>
        <p>
          <BsLink />
          {blog || ""}
        </p>
      </div>
    </article>
  );
};
export default UserInfo;
