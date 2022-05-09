import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
/* Reset Css */
    /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
    */
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    /*Global Styles  */
    
    :root {
        --dark-purple: #8C11BE;
        --ligth-purple: #A328D6;
        --expense: #C70000;
        --income: #03AC00;
        --ligth-grey: #C6C6C6;
        --grey: #868686;
    }
    *{
        box-sizing: border-box;
        font-family: 'Raleway', sans-serif;
    }
    body{
        background-color: var(--dark-purple);
    }
    main{
        padding: 0px 25px 16px;
    }
    input{
        width: 100%;
        max-width: 470px;
        height: 58px;
        padding: 18px 15px;
        border-radius: 5px;
        border: none;
        color: #000000;
        font-size: 20px;
        margin-bottom: 13px;
    }
    a {
        color: #FFFFFF;
        text-decoration: none;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
    }
    button {
        background-color: var(--ligth-purple);
        border: none;
        border-radius: 5px;
        width: 100%;
        max-width: 470px;
        height: 46px;
        color: #ffffff;
        font-weight: 700;
        font-size: 20px;
        margin-bottom: 36px;
    }
    h1{
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;
    }
`

export default GlobalStyle;