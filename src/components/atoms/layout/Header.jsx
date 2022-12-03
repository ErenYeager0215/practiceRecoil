import { Link } from "react-router-dom";
import styled from "styled-components";
export const Header = () => {
  return (
    <SHeader>
      <SLink to="/">HOME</SLink>
      <SLink to="/users">USERS</SLink>
    </SHeader>
  );
};

const SHeader = styled.header`
  background-color: #11999e;
  color: #fff;
  text-align: center;
  padding: 8px 0;
`;

//既存のコンポーネントをスタイルするときはstyledの引数に指定する
const SLink = styled(Link)`
  margin: 0 8px;
`;
