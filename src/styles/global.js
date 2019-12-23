import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

    *{
        margin: 0;
        outline: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', Arial, Helvetica, sans-serif;
        font-size: 15px;
        --webkit-font-smoothing: antialiased !important;
    }

    input{
        text-transform: lowercase;
        text-align: center;
    }

`;
