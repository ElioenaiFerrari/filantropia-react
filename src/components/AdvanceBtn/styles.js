import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    border: 1px solid steelblue;
    padding: 10px;
    border-radius: 5px;
    width: 22%;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    text-decoration: none;
    color: steelblue;
    margin-top: 50px;
    transition: width 0.2s ease-in-out, color 0.5s ease-in-out,
      transform 0.2s ease-in-out;
  }

  a:hover {
    background: linear-gradient(40deg, #7159c1, steelblue);
    color: white;
    width: 20%;
  }

  a:active {
    transform: rotate(360deg);
  }
`;
