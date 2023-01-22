import { Navbar, SearchUser, Info, User } from "./index";
import Repos from "./Charts/Repos";
import { useContext } from "react";
import { githubContext } from "../context";
import Loading from "./Loading";

const Dashboard = () => {
  const { loading } = useContext(githubContext);
  if (loading) {
    return (
      <main>
        <Navbar />
        <SearchUser />
        {loading && <Loading />}
      </main>
    );
  }
  return (
    <main>
      <Navbar />
      <SearchUser />
      <Info />
      <User />
      <Repos />
    </main>
  );
};
export default Dashboard;
