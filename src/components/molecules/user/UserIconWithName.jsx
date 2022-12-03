import React, { memo } from "react";
import styled from "styled-components";
//useRecoilValueは値を参照することしかしないことを明示してる
import { useRecoilValue } from "recoil";
import { userState } from "../../../store/userState";

export const UserIconWithName = memo((props) => {
  console.log("usericon");
  const { image, name } = props;

  const userInfo = useRecoilValue(userState);
  //userInfoが存在してたら、userInfoのisAdminを返す
  const isAdmin = userInfo ? userInfo.isAdmin : false;
  return (
    <SContainer>
      <SImg height={160} weight={160} src={image} alt={name} />
      <SName>{name}</SName>
      {isAdmin && <SEdit>編集</SEdit>}
    </SContainer>
  );
});

const SContainer = styled.div`
  text-align: center;
`;

const SImg = styled.img`
  border-radius: 50%;
`;
const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;

const SEdit = styled.span`
  color: #aaa;
  cursor: pointer;
`;
