import styled from 'styled-components';

export const Container = styled.div`
    width: 70%;
    margin: auto;
    height: 100px;
    border: 1px solid #e2e2e2;
    padding: 10px;
    border-radius: 10px;
    position: relative;
    cursor: pointer;
    &:Hover {
        background: #f9f9f9;
    }
`;

export const DataContainer = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    overflow: hidden;
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
    border-bottom: 1px solid #e2e2e2;
`;

export const BlogText = styled.div`
    color: grey;
    font-family: Roboto;
    padding: 5px 0;
`;
