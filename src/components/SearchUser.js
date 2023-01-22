import { FaSearch } from "react-icons/fa";
import styled from "styled-components";
import { useState, useContext } from "react";
import { githubContext } from "../context";
const SearchUser = () => {
  const [username, setUsername] = useState("");
  const { remainingRequest, error, handleSearch } = useContext(githubContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username) {
      handleSearch(username);
    }
  };

  return (
    <SearchContainer>
      {error.show && <p>{error.msg}</p>}
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <FaSearch />
          <input
            placeholder="Enter Github User"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {remainingRequest > 0 && <button>Search</button>}
        </form>
        <h3>Request: {remainingRequest} / 60</h3>
      </div>
    </SearchContainer>
  );
};
export default SearchUser;

const SearchContainer = styled.section`
  & > p {
    text-align: center;
    font-size: 20px;
    color: red;
    text-transform: capitalize;
    margin: 10px 0;
  }
  .form-container {
    width: 95vw;
    max-width: 600px;
    margin: 0 auto;
  }
  .form-container > h3 {
    font-size: 25px;
    margin-top: 20px;
    color: var(--black-variant);
  }
  form {
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-column-gap: 4px;
    align-items: center;
    background: #fff;
    padding: 10px 2px;
    border-radius: 4px;
  }
  input {
    padding: 5px 3px;
    border: 1px solid transparent;
    outline: none;
    border-radius: 4px;
    color: var(--heading);
  }
  input:focus {
    border: 1px solid #ccc;
  }
  button {
    cursor: pointer;
    background: var(--btn-background);
    border: 1px solid transparent;
    color: #fff;
    padding: 5px 3px;
    border-radius: 2px;
  }

  @media screen and (min-width: 460px) {
    form {
      padding: 10px;
      grid-column-gap: 10px;
      border-radius: 7px;
    }
    input {
      padding: 7px 10px;
      font-size: 20px;
    }
    button {
      padding: 7px 10px;
      font-size: 20px;
      border-radius: 7px;
    }
  }
  @media screen and (min-width: 900px) {
    .form-container {
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
      grid-column-gap: 20px;
      max-width: 1200px;
    }
    .form-container > h3 {
      margin: 0;
    }
  }
`;
