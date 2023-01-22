import Charts from "./Charts";
import styled from "styled-components";
import Stars from "./Stars";
import Bar from "./Bar";
import { useContext } from "react";
import { githubContext } from "../../context";
import Column from "./Column";

const Repos = () => {
  const { githubRepos } = useContext(githubContext);
  // STEP 2 - Chart Data
  const languages = githubRepos.reduce((total, item) => {
    const { language, stargazers_count } = item;
    if (!language) return total;
    if (!total[language]) {
      total[language] = { label: language, value: 1, stars: stargazers_count };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
        stars: total[language].stars + stargazers_count,
      };
    }
    return total;
  }, {});

  const mostUsed = Object.values(languages)
    .sort((a, b) => {
      return b.value - a.value;
    })
    .splice(0, 5);
  const mostStars = Object.values(languages)
    .sort((a, b) => {
      return b.stars - a.stars;
    })
    .map((item) => {
      return { ...item, value: item.stars };
    })
    .slice(0, 5);

  const { stars, forks } = githubRepos.reduce(
    (total, item) => {
      const { stargazers_count, name, forks } = item;
      let randomNum = Math.floor(Math.random() * 100000);
      total.stars[randomNum] = { label: name, value: stargazers_count };
      total.forks[forks] = { label: name, value: forks };

      return total;
    },
    {
      stars: {},
      forks: {},
    }
  );
  // console.log(stars);
  const starsData = Object.values(stars)
    .sort((a, b) => b.value - a.value)
    .splice(0, 5);
  const forksData = Object.values(forks).reverse().splice(0, 5);
  return (
    <ReposContainer>
      <div className="charts-center">
        <Charts data={mostUsed} />
        <Column data={starsData} />
        <Stars data={mostStars} />
        <Bar data={forksData} />
      </div>
    </ReposContainer>
  );
};
export default Repos;

const ReposContainer = styled.section`
  padding: 16px 0;
  .charts-center {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 16px;
    margin: 0px auto;
    width: 95vw;
    max-width: 600px;
  }
  .charts-center > div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
  }

  @media screen and (min-width: 900px) {
    .charts-center {
      max-width: 1200px;
      grid-template-columns: 2fr 3fr;
    }
  }
`;
