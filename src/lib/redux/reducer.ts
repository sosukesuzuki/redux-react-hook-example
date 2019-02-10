import { Note } from "../types";
import { Action, ADD_NOTE, DELETE_NOTE, UPDATE_NOTE } from "./actionCreators";

export interface State {
  notes: Note[];
}

const initialState: State = {
  notes: []
};

const reducer = (state: State = initialState, action: Action) => {
  const { type, payload } = action;
  const { notes } = state;

  if (type === ADD_NOTE) {
    const newNote: Note = {
      id: (notes.length + 1).toString(),
      content: ""
    };
    return {
      notes: [...notes, newNote],
      ...state
    };
  } else if (type === DELETE_NOTE) {
    const newNotes = notes.filter(note => note.id !== payload.noteId);
    return {
      notes: newNotes,
      ...state
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
      notes: newNotes,
      ...state
    };
  } else {
    return state;
  }
};

export default reducer;
