// notes
export const ADD_NOTE = "ADD_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";
export const UPDATE_NOTE = "UPDATE_NOTE";

export const addNote = () => ({
  type: ADD_NOTE,
  payload: {}
});

export const deleteNote = (noteId: string) => ({
  type: DELETE_NOTE,
  payload: {
    noteId
  }
});

export const updateNote = (noteId: string, content: string) => ({
  type: UPDATE_NOTE,
  payload: {
    noteId,
    content
  }
});

// currentNote
export const SET_CURRENT_NOTE = "SET_CURRENT_NOTE";

export const setCurrentNote = (noteId: string) => ({
  type: SET_CURRENT_NOTE,
  payload: {
    noteId
  }
});
