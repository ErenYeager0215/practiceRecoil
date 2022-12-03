import React from "react";
import { UserProvier } from "./providers/UserProvider";
import { Router } from "./router/Router";
import "./styles.css";
import { RecoilRoot } from "recoil";

export default function App() {
  return (
    <RecoilRoot>
      <UserProvier>
        <Router />;
      </UserProvier>
    </RecoilRoot>
  );
}
