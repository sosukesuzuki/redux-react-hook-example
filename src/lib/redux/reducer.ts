import { Note } from "../types";
import { ADD_NOTE, DELETE_NOTE, UPDATE_NOTE } from "./actionCreators";
import { AnyAction } from "redux";
import uuid from "uuid/v4";

export interface State {
  notes: Note[];
}

const initialState: State = {
  notes: [
    {
      id: uuid(),
      content: "最初のメモ"
    }
  ]
};

const reducer = (state: State = initialState, action: AnyAction) => {
  const { type, payload } = action;
  const { notes } = state;

  if (type === ADD_NOTE) {
    const newNote: Note = {
      id: uuid(),
      content: "新しいメモ"
    };
    return {
      ...state,
      notes: [...notes, newNote]
    };
  } else if (type === DELETE_NOTE) {
    const newNotes = notes.filter(note => note.id !== payload.noteId);
    return {
      ...state,
      notes: newNotes
    };
  } else if (type === UPDATE_NOTE) {
    const { noteId, content } = payload;
    const newNotes = notes.map(note => {
      if (note.id === noteId) {
        note.content = content;
      }
      return note;
    });
    return {
      ...state,
      notes: newNotes
    };
  } else {
    return state;
  }
};

export default reducer;
