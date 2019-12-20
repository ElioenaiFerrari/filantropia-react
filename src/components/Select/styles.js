import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  label {
    font-weight: 800;
    margin: 0 10px;
  }

  select {
    background: steelblue;
    margin-right: 100px;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 5px;
    width: ${props => props.props.width};
  }

  option {
    border-radius: 5px;
    border: none;
  }
`;
