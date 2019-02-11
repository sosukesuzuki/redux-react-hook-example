import { AnyAction } from "redux";
import { SET_CURRENT_NOTE } from "../actionCreators";

export interface State {
  currentNoteId?: string;
}

const initialState: State = { currentNoteId: undefined };

const currentNoteReducer = (state: State = initialState, action: AnyAction) => {
  const { type, payload } = action;

  if (type == SET_CURRENT_NOTE) {
    return {
      ...state,
      currentNoteId: payload.noteId
    };
  } else {
    return state;
  }
};

export default currentNoteReducer;
