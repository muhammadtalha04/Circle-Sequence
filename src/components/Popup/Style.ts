import styled from 'styled-components';

export const ModalDiv = styled.div`
    position: fixed;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    align-items: start;
    justify-content: center;
`;

export const ModalContent = styled.div`
    background: #fff;
    position: relative;
    border-radius: 5px;
    min-width: 30%;
    top: 20%;
    padding: 60px 40px;
    text-align: center;
`;

export const TextWrapper = styled.div`
    margin-bottom: 50px;
`;