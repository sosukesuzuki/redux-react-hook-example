import React, { useCallback } from "react";
import styled from "styled-components";
import { useMappedState, useDispatch } from "redux-react-hook";
import { State } from "../lib/redux/reducers";
import { updateNote as createUpdateNote } from "../lib/redux/actionCreators";
import { bindActionCreators } from "redux";
import find from "lodash.find";

const Container = styled.div`
  grid-row: 2;
  grid-column: 2;
`;

export default function Editor() {
  const { currentNoteId, notes } = useMappedState(
    useCallback(
      (state: State) => ({
        currentNoteId: state.currentNote.currentNoteId,
        notes: state.notes.notes
      }),
      []
    )
  );
  const currentNote = find(notes, ["id", currentNoteId]);

  const dispatch = useDispatch();
  const { updateNote } = bindActionCreators(
    {
      updateNote: createUpdateNote
    },
    dispatch
  );

  return (
    <Container>
      {currentNoteId && currentNote ? (
        <>
          <textarea
            value={currentNote.content}
            onChange={e => {
              updateNote(currentNoteId, e.target.value);
            }}
          />
        </>
      ) : (
        <span>メモが選択されていません</span>
      )}
    </Container>
  );
}
