import styled from "styled-components";

export const Cord = (props) => {
  const { children } = props;
  return <SCord>{children}</SCord>;
};

const SCord = styled.div`
  background-color: #fff;
  box-shadow: #ddd 0px 0px 4px 2px;
  border-radius: 8px;
  padding: 16px;
`;
