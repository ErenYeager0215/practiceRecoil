import React, { memo } from "react";
import styled from "styled-components";
import { Cord } from "../../atoms/cord/Cord";
import { UserIconWithName } from "../../molecules/user/UserIconWithName";

export const UserCard = memo((props) => {
  console.log("usercard");
  const { user } = props;
  return (
    <Cord>
      <UserIconWithName name={user.name} image={user.image} />
      <SDl>
        <dt>メール</dt>
        <dd>{user.email}</dd>
        <dt>TEL</dt>
        <dd>{user.phone}</dd>
        <dt>会社名</dt>
        <dd>{user.company.name}</dd>
        <dt>Web</dt>
        <dd>{user.website}</dd>
      </SDl>
    </Cord>
  );
});

const SDl = styled.dl`
  text-align: left;
  margin-bottom: 0px;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
    overflow-wrap: break-word;
  }
`;
