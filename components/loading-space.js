import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 20em;
`;

const LoadingSpace = props => {
  return (
    <React.Fragment>
      <Wrapper />
    </React.Fragment>
  );
};

export default LoadingSpace;
