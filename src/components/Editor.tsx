import React from "react";
import styled from "styled-components";

const Container = styled.div`
  grid-row: 2;
  grid-column: 2;
`;

export default function Editor() {
  return (
    <Container>
      <h1>Editor</h1>
    </Container>
  );
}
