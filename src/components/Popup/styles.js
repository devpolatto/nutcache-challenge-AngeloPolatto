import styled from "styled-components";

export const Modal = styled.div`
    position: fixed;
    background: #00000050;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
`;

export const Box = styled.div`
    position: relative;
    width: 70%;
    margin: 0 auto;
    height: auto;
    max-height: 70vh;
    margin-top: calc(100vh - 85vh - 20px);
    background: #fff;
    border-radius: 10px;
    padding: 20px;
    border: 1px solid #999;
    overflow: auto;

    .close-icon {
        content: 'x';
        cursor: pointer;
        position: fixed;
        right: calc(15% + 250px);
        top: calc(100vh - 85vh - 33px);
        background: #ededed;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        line-height: 28px;
        text-align: center;
        border: 1px solid #999;
        font-size: 25px;
    }

    @media(max-width: 700px) {
        padding: 1px0 5px;
    }
    @media(min-width: 1000px){
        width: 500px;
    }
`