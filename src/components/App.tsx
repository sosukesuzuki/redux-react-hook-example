import React from "react";
import styled from "styled-components";
import SideNavigation from "./SideNavigation";
import Toolbar from "./Toolbar";
import { StoreContext } from "redux-react-hook";
import store from "../lib/redux/store";

const Header = styled.header``;

export default function App() {
  return (
    <StoreContext.Provider value={store}>
      <Header>
        <h1>メモ帳</h1>
      </Header>
      <Toolbar />
      <SideNavigation />
    </StoreContext.Provider>
  );
}
