export const ADD_NOTE = "ADD_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";
export const UPDATE_NOTE = "UPDATE_NOTE";

export type Action<Payload = any> = {
  type: string;
  payload: Payload;
};

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
