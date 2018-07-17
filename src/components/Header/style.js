import styled from 'styled-components';

export const Head = styled.header`
    width: 100%;
    background: black;
    margin: 0;
    ul {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;
        padding: 0;
        li {
            cursor: pointer;
            list-style: none;
            transition: .5s;
            &:hover {
                background: orange;
            }
            a {
                margin: 0 10px; 
                padding: 0 10px;
                display: flex;
                height: 50px;
                align-items: center;
                text-decoration: none;
                color: white;
            }
        }
    }
`;

export const Image = styled.li`
    width: 30px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    position: absolute;
    right: 0;
    &:hover {
        background: #6ec8ff !important;
    }
    img {
        width: 100%;
    }
`;
