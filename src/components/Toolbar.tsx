import React, { useCallback } from "react";
import styled from "styled-components";
import { useDispatch } from "redux-react-hook";
import { ADD_NOTE } from "../lib/redux/actionCreators";

const Container = styled.div``;

export default function Toolbar() {
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
      <button onClick={addNote}>メモを追加</button>
    </Container>
  );
}
