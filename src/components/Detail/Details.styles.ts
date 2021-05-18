import styled from 'styled-components';

export const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`;

export const Background =  styled.div `
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export const ImageTitle = styled.div`
    height: 30vh;
    width: 35vw;
    min-height: 170px;
    min-width: 200px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

export const Controls = styled.div`
    display: flex;
    align-items: center;
`;

export const PlayBtn = styled.button`
    border-radius: 4px;
    font-size: 15px;
    display: flex;
    align-items: center;
    height: 50px;
    background-color: rgb(249, 249, 249);
    border: none;
    padding: 0px 24px;
    margin-right: 22px;
    color: black;
    letter-spacing: 1.8px;
    font-weight: 500;
    cursor: pointer;

    &:hover {
        background: rgb(198, 198, 198);
    }
`;

export const TrailerBtn = styled(PlayBtn)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249,249);
    color: rgb(249, 249,249);
    text-transform: uppercase;
`;

export const AddBtn = styled.button`
    margin-right: 16px;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgba(0, 0, 0, 0.4);
    cursor: pointer;

    span {
        font-size: 30px;
        color: white;
    }
`;

export const GroupWatchBtn = styled(AddBtn)`
    background: rgb(0, 0, 0);
`;

export const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    margin-top: 26px;
    min-height: 20px;
`;

export const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249);
`;
