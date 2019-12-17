import styled from "styled-components";

export const Container = styled.div`
  label {
    font-weight: 600;
    margin-left: 10px;
    display: flex;
  }

  label input {
    margin-bottom: 20px;
    margin-left: 5px;
    margin-right: 100px;
    border: none;
    border-bottom: 1px solid lightgray;
    padding: 2px;
    display: flex;
    text-align: center;
    width: ${props => props.props.width};
  }
`;
