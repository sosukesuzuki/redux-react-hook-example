import React, { useCallback } from "react";
import styled from "styled-components";
import { useMappedState, useDispatch } from "redux-react-hook";
import { State } from "../lib/redux/reducers";
import { ADD_NOTE } from "../lib/redux/actionCreators";

const Container = styled.div`
  grid-column: 1;
  grid-row: 2;
  border-right: 1px solid black;
  height: calc(100vh - 40px);
`;
const Toolbar = styled.div`
  padding: 10px;
  border-bottom: 1px solid black;
`;

export default function SideNavigation() {
  const { notes } = useMappedState(
    useCallback(
      (state: State) => ({
        notes: state.notes.notes
      }),
      []
    )
  );
  const dispatch = useDispatch();
  const addNote = useCallback(
    () =>
      dispatch({
        type: ADD_NOTE
      }),
    []
  );
  return (
    <Container>
      <Toolbar>
        <button onClick={addNote}>メモを追加</button>
      </Toolbar>
      {notes.map(note => (
        <p key={note.id}>
          {note.id}:{note.content}
        </p>
      ))}
    </Container>
  );
}
