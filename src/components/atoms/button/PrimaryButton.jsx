import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const PrimaryButton = (props) => {
  const { children } = props;
  return <SButton>{children}</SButton>;
};

//BaseButtonを継承し、さらにそこに追加のCSSを充てる
const SButton = styled(BaseButton)`
  background-color: #40514e;
`;
