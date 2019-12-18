import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  label {
    font-weight: 600;
    margin: 0 10px;
  }

  select {
    background: steelblue;
    margin-right: 100px;
    color: white;
    border: none;
    padding: 5px;
    border-radius: 5px;
    width: ${props => props.props.width};
  }

  option {
    border-radius: 5px;
    border: none;
  }
`;
