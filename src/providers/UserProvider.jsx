import React, { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserProvier = (props) => {
  const { children } = props;

  //useStateでuseInfoとsetUserInfoを設定することで
  //グローバルで別ファイルでsetUserInfoで情報を書き換え、
  //さらに別ファイルで変わった情報のuseInfoを参照できる
  const [userInfo, setUserInfo] = useState(null);
  // <UserContext.Provider>のvalueの中にある値がグローバルで参照される
  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
