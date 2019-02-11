import { combineReducers } from "redux";
import notes, { State as NotesState } from "./notes";
import currentNote, { State as CurrentNoteState } from "./currentNote";

export interface State {
  notes: NotesState;
  currentNote: CurrentNoteState;
}

export default combineReducers({
  notes,
  currentNote
});
