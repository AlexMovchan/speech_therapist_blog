import styled from 'styled-components';

export const HeadContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
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

export const NewPost = styled.div`
    width: 70%;
    max-height: 450px;
    padding: 10px;
    margin: auto;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-around;
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
