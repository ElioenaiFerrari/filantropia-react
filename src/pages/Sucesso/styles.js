import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;

  div {
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);
    justify-content: center;
    align-items: center;
  }

  h1 {
    font-size: 25px;
    text-align: center;
    margin-bottom: 10px;
    font-weight: 600;
    color: steelblue;
  }

  p {
    color: gray;
    font-size: 18px;
  }

  a {
    text-decoration: none;
    text-align: center;
    background: white;
    padding: 10px;
    width: 22%;
    color: steelblue;
    margin-top: 50px;
    font-size: 20px;
    border-radius: 5px;
    border: 1px solid steelblue;
    transition: width 0.2s ease-in-out, color 0.5s ease-in-out;
  }

  a:hover {
    background: linear-gradient(40deg, #7159c1, steelblue);
    width: 20%;
    color: white;
  }
`;
