import React, { useCallback } from "react";
import styled from "styled-components";
import { useMappedState } from "redux-react-hook";
import { State } from "../lib/redux/reducer";

const Container = styled.div``;

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
      {notes.map(note => (
        <p key={note.id}>
          {note.id}:{note.content}
        </p>
      ))}
    </Container>
  );
}
