import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    border: 1px solid steelblue;
    padding: 10px;
    border-radius: 5px;
    width: 50%;
    font-size: 20px;
    text-align: center;
    text-decoration: none;
    color: steelblue;
    margin-top: 50px;
    transition: width 0.2s ease-in-out !important;
  }

  a:hover {
    background-color: steelblue;
    color: white;
    width: 20%;
  }

  a:active {
    transform: rotate(360deg);
    transition: transform 0.2s ease-in-out !important;
  }
`;
