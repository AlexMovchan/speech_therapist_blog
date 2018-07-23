import styled from 'styled-components';

export const Container = styled.div`
    width: 70%;
    margin: auto;
    a {
        text-decoration: none;
        padding: 10px;
        margin: 20px 0;
        width: 50px;
        display: block;
        border: 1px solid grey;
        border-radius: 10px;
        color: black;
        transition: .4s;
        &:hover {
            background: #ececec;
            box-shadow: 0 0 10px 1px #969696;
            border: 1px solid #e8e8e8;
        }
    }
`;
