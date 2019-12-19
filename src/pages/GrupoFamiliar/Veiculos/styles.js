import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  table {
    width: ${props => props.width};
  }
  th {
    width: 200px;
    background: steelblue;
    color: white;
  }

  input {
    padding: 5px;
    border: none;
  }

  select {
    width: 100%;
    border: none;
    padding: 5px;
    background: steelblue;
    color: white;
  }
`;
