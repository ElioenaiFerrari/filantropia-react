import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-start;
  justify-content: space-evenly;
  flex-direction: row;

  div.column {
    display: flex;
    flex-direction: column;
  }
`;
