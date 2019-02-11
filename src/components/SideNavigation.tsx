import React, { useCallback } from "react";
import styled from "styled-components";
import { useMappedState } from "redux-react-hook";
import { State } from "../lib/redux/reducer";
import Toolbar from "./Toolbar";

const Container = styled.div`
  grid-column: 1;
  grid-row: 2;
  border-right: 1px solid black;
  height: calc(100vh - 40px);
`;

export default function SideNavigation() {
  const { notes } = useMappedState(
    useCallback(
      (state: State) => ({
        notes: state.notes
      }),
      []
    )
  );
  return (
    <Container>
      <Toolbar />
      {notes.map(note => (
        <p key={note.id}>
          {note.id}:{note.content}
        </p>
      ))}
    </Container>
  );
}
