import styled from "styled-components";

export const Container = styled.div`
    cursor: pointer;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 20vh;
    margin-right: 5px;

    div {
        height: 25px;
        width: 25px;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.secondary};
    }

    span {
        background-color: ${({ theme }) => theme.secondary};
        color: ${({ theme }) => theme.primary};
    }
`;
