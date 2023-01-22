import styled from "styled-components";
const Loading = () => {
  return <Loader></Loader>;
};
export default Loading;

const Loader = styled.div`
  width: 100px;
  height: 100px;
  border: 5px solid #ccc;
  border-radius: 50%;
  margin: 50px auto;
  border-top-color: var(--blue-variant);
  animation: load 0.6s linear infinite;
  @keyframes load {
    to {
      transform: rotate(360deg);
    }
  }
`;
