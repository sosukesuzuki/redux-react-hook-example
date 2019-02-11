import React, { useCallback } from "react";
import styled from "styled-components";
import { useMappedState } from "redux-react-hook";
import { State } from "../lib/redux/reducers";

const Container = styled.div`
  grid-row: 2;
  grid-column: 2;
`;

export default function Editor() {
  const { currentNoteId } = useMappedState(
    useCallback(
      (state: State) => ({
        currentNoteId: state.currentNote.currentNoteId
      }),
      []
    )
  );
  return (
    <Container>
      <h1>{currentNoteId}</h1>
    </Container>
  );
}
