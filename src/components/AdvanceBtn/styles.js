import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    border: 1px solid steelblue;
    padding: 10px;
    width: 50%;
    font-size: 20px;
    text-align: center;
    text-decoration: none;
    color: steelblue;
    margin-top: 50px;
    transition: background-color 0.2s ease-in-out;
  }

  a:hover {
    background-color: steelblue;
    color: white;
  }
`;
