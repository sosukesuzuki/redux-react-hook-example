import React from "react";
import styled from "styled-components";

const Header = styled.header`
  color: red;
`;

export default function App() {
  return (
    <Header>
      <h1>メモ帳</h1>
    </Header>
  );
}
