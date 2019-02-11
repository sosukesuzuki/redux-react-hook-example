import React from "react";
import styled from "styled-components";
import SideNavigation from "./SideNavigation";
import Editor from "./Editor";
import { StoreContext } from "redux-react-hook";
import store from "../lib/redux/store";

const Container = styled.div`
  display: grid;
  grid-template-rows: 40px 1fr;
  grid-template-columns: 300px 1fr;
`;

const Header = styled.header`
  grid-row: 1;
  grid-column: 1 / span 2;
  border-bottom: 1px solid black;
  height: 40px;
  h1 {
    margin: 0;
    line-height: 40px;
  }
`;

export default function App() {
  return (
    <StoreContext.Provider value={store}>
      <Container>
        <Header>
          <h1>メモ帳</h1>
        </Header>
        <SideNavigation />
        <Editor />
      </Container>
    </StoreContext.Provider>
  );
}
