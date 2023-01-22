import { useContext } from "react";
import { githubContext } from "../context";

const UserFollowers = () => {
  const { githubFollowers } = useContext(githubContext);
  return (
    <article>
      <div className="followers__container">
        {githubFollowers.map((follower) => (
          <article className="followers" key={follower.id}>
            <img src={follower.avatar_url} alt={follower.login} />
            <div className="followers__info">
              <h3>{follower.login}</h3>
              <a href="/">{follower.url}</a>
            </div>
          </article>
        ))}
      </div>
    </article>
  );
};
export default UserFollowers;
