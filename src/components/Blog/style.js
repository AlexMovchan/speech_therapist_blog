import styled from 'styled-components';

export const Container = styled.div`
    width: 70%;
    margin: 20px auto;
    border: 1px solid #e2e2e2;
    padding: 10px;
    border-radius: 10px;
    position: relative;
    cursor: pointer;
    background: #f9f9f9;
    transition: .4s;
    &:hover {
        box-shadow: 0 0 25px 1px #b9b9b9;
    }
    &:hover .remove-btn {
        opacity: 1; 
    }
    .remove-btn {
        color: red;
        position: absolute;
        left: 4px;
        top: 4px;
        opacity: 0;
        -webkit-transition: .4s;
        transition: .3s;
        border: 1px solid #ff0000;
        border-radius: 14px;
        width: 16px;
        height: 16px;
        padding: 2px;
        text-align: center;
        font-size: 14px;
        &:hover {
            opacity: 1;
            background: #ff9393;
            border: 1px solid #fb9292;
            color: white;
        }
    }
`;

export const DataContainer = styled.div`
    position: absolute;
    right: 0;
    top: 0;    
`;

export const Link = styled.a`
    font-size: 12px;
    color: #ff6161;
    margin: 0 5px;
    text-decoration: none;
`;
export const Header = styled.h2`
    text-align: center;
    margin: 5px 0;
    padding: 10px 0;
    border-bottom: 1px solid #e2e2e2;
`;

export const BlogText = styled.div`
    color: grey;
    font-family: Roboto;
    padding: 5px 0;
    pre {
        font-family: Roboto;
        white-space: normal;
    }
`;

export const Post = styled.div`
    width: 70%;
    max-height: 700px;
    padding: 10px;
    margin: auto;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-around;
    form {
        width: 100%;
        text-align: center;
    }
    .header {
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
    .post {
        margin: 10px;
        width: 90%;
        min-height: 200px;
        border-radius: 5px;
        border: 1px solid #e2e2e2;
        transition: .3s border;
        padding: 5px;
        resize: vertical;
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
        background-color: #218838;
        border-color: #1e7e34;
        text-decoration: none;
        border: 1px solid transparent;
        border-radius: .25rem;
        transition: .15s;
        line-height: 1.5;
        padding: .375rem .75rem;
        cursor: pointer;
        &:hover {
            background-color: #3dd45e;
            border: 1px solid grey;
        }
    }
`;
