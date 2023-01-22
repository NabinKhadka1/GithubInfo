import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import {
  mockUser,
  mockFollowers,
  mockRepos,
} from "./components/MockData/index";

const githubContext = createContext();
const baseUrl = "https://api.github.com";

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [githubFollowers, setGithubFollowers] = useState(mockFollowers);
  const [githubRepos, setGithubRepos] = useState(mockRepos);
  const [error, setError] = useState({ show: false, msg: "" });
  const [loading, setLoading] = useState(false);

  const [remainingRequest, setRemainingRequest] = useState(0);
  const checkRequest = async () => {
    const response = await axios(`${baseUrl}/rate_limit`);
    if (response) {
      const { data } = response;
      if (data.rate.remaining <= 0) {
        setError({ show: true, msg: "Limit exceeded-Try after 1 hour" });
      }
      setError({ show: false, msg: "" });
      setRemainingRequest(data.rate.remaining);
    } else {
      setError({ show: true, msg: "Cannot fetch data" });
    }
  };

  const handleSearch = async (username) => {
    setLoading(true);
    setError({ show: false, msg: "" });
    const response = await axios(`${baseUrl}/users/${username}`).catch(
      (err) => {
        console.log(err);
      }
    );
    if (response) {
      setGithubUser(response.data);
      const { repos_url, followers_url } = response.data;
      //Repos
      axios(`${repos_url}?per_page=100`)
        .then((response) => setGithubRepos(response.data))
        .catch((err) => {
          console.log(err);
        });
      //Followers
      axios(`${followers_url}?per_page=100`)
        .then((response) => setGithubFollowers(response.data))
        .catch((err) => {
          console.log(err);
        });
    } else {
      setError({ show: true, msg: "Username not found" });
    }
    setLoading(false);
    checkRequest();
  };

  useEffect(() => {
    checkRequest();
  }, []);
  return (
    <githubContext.Provider
      value={{
        githubUser,
        githubFollowers,
        setGithubUser,
        setGithubFollowers,
        githubRepos,
        setGithubRepos,
        remainingRequest,
        error,
        handleSearch,
        loading,
        setError,
      }}
    >
      {children}
    </githubContext.Provider>
  );
};
export { githubContext, GithubProvider };
