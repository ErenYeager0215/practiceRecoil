import React from "react";
import styled from "styled-components";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useHistory } from "react-router-dom";
//usestateのset関数だけを利用するときはuseSetRecoilStateにする
import { useSetRecoilState } from "recoil";
import { userState } from "../../store/userState";

export const Top = () => {
  const history = useHistory();

  const setUserInfo = useSetRecoilState(userState);
  //クリックしたら、setUserInfoで入ってきた情報をグローバルステートに保存される
  //今回はuserInfoの情報がクリック先でisAdmin:trueかfalseかに変わる
  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    //指定のパスへ遷移
    history.push("/users");
  };

  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    history.push("/users");
  };

  return (
    <SContainer>
      <h2>TOPトップページです</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>一般</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
