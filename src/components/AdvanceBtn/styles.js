import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    border: 1px solid steelblue;
    padding: 10px;
    border-radius: 5px;
    width: 20%;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    text-decoration: none;
    color: steelblue;
    margin-top: 50px;
    transition: background 0.2s ease-in-out !important;
  }

  a:hover {
    background: linear-gradient(40deg, #7159c1, steelblue);
    color: white;
  }

  a:active {
    transform: rotate(360deg);
    transition: transform 0.2s ease-in-out !important;
  }
`;
