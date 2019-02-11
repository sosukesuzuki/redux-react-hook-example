import React, { useCallback } from "react";
import styled from "styled-components";
import { useMappedState, useDispatch } from "redux-react-hook";
import { State } from "../lib/redux/reducers";
import {
  addNote as createAddNote,
  deleteNote as createDeleteNote,
  setCurrentNote as createSetCurrentNote
} from "../lib/redux/actionCreators";
import { bindActionCreators } from "redux";

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

const NoteListItem = styled.div`
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
  const { addNote, deleteNote, setCurrentNote } = bindActionCreators(
    {
      addNote: createAddNote,
      deleteNote: createDeleteNote,
      setCurrentNote: createSetCurrentNote
    },
    dispatch
  );

  return (
    <Container>
      <Toolbar>
        <button onClick={addNote}>メモを追加</button>
      </Toolbar>
      {notes.map(note => (
        <NoteListItem key={note.id} onClick={() => setCurrentNote(note.id)}>
          <span>
            {note.id}:{note.content}
          </span>
          <button onClick={() => deleteNote(note.id)}>ノートを削除</button>
        </NoteListItem>
      ))}
    </Container>
  );
}
