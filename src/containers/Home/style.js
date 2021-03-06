import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Posts = styled.div`
    display: flex;
    flex-flow: column wrap;
    padding: 20px;
`;

export const Ava = styled.div`
    display: flex;
    flex-flow: column wrap;
    padding: 20px;
    height: calc(100vh - 50px);
    align-items: center;
    .ava {
        width: 200px;
        height: 200px;
        border: 1px solid gray;
        border-radius: 10px;
        background-image: URL('./image.jpg');
        background-size: cover;
        background-position: center;
        margin: 10px;
    }
`;

export const UserStatus = styled.input`
    margin: 10px;
    padding: 10px;
    margin: 10px;
    height: 20px;
    border-radius: 5px;
    border: 1px solid #e2e2e2;
    transition: .3s;
    padding: 5px;
    color: ${({ isAdmin }) => (isAdmin ? 'black' : '#828282')};
    background: ${({ isAdmin }) => (isAdmin ? 'white' : '#ececec')};
    &:focus {
        box-shadow: ${({ isAdmin }) => (isAdmin ? '0 0 3px 1px #9ac6ff' : 'none')};
        border-color: ${({ isAdmin }) => (isAdmin ? '#9ac6ff' : 'none')};
        outline: none;
    }
`;
