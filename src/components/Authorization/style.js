import styled from 'styled-components';

export const Container = styled.div`
    background-image: URL('./img/bgLogin.jpg');
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    /* width: 100%; */
    -webkit-flex-flow: column wrap;
    -ms-flex-flow: column wrap;
    flex-flow: column wrap;
    background-size: cover;
    padding: 20px;
    background-position: center;
    .close-modal {
        position: absolute;
        right: 5px;
        top: 5px;
        border-radius: 10px;
        border: 1px solid #c5c3c3;
        cursor: pointer;
        font-weight: bold;
        width: 25px;
        color: white;
        height: 20px;
        -webkit-transition: .5s;
        transition: .5s;
        background: black;
        outline: none;
        &:hover {
            background: white;
            color: black; 
        }
    }
    h2 {
        border-bottom: 1px solid #d8d8d8;
        margin: 0;
        padding: 20px 0;
        text-align: center;
    }
`;

export const AuthorizationForm = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-flow: column wrap;
    .styledInput {
        margin: 10px;
        width: 90%;
        height: 20px;
        border-radius: 5px;
        border: 1px solid #e2e2e2;
        transition: .3s;
        padding: 5px;
        &:focus {
            box-shadow: 0 0 3px 1px #9ac6ff;
            border-color: #9ac6ff;
            outline: none;
        }
    }
    button {
        margin: 10px;
        width: 91%;
        color: #fff;
        background-color: #3da1ce;
        text-decoration: none;
        border: 1px solid transparent;
        border-radius: .25rem;
        transition: .15s;
        line-height: 1.5;
        padding: .375rem .75rem;
        cursor: pointer;
        &:hover {
            background-color: #70d8f5;
            border: 1px solid #c1c1c1;
        }
    }
`;
