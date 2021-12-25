import styled from "styled-components";
import { transparentize } from "polished";

export const Container = styled.form`
    height: 20vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;

    input {
        font-size: 1rem;
        font-weight: 600;
        line-height: 1.2rem;
        padding: 6px 16px;
        text-align: center;
        text-decoration: none;
        margin-right: 0.3rem;
        border: 1px solid ${({ theme }) => theme.button};
    }

    select {
        font-weight: 500;
        height: 2.1rem;
        text-align: center;
        text-decoration: none;
        border: 1px solid ${({ theme }) => theme.button};
    }

    button {
        appearance: none;
        background-color: ${({ theme }) => transparentize(0.2, theme.button)};
        border: 1px solid rgba(27, 31, 35, 0.15);
        border-radius: 6px;
        box-shadow: rgba(27, 31, 35, 0.1) 0 1px 0;
        box-sizing: border-box;
        color: #fff;
        cursor: pointer;
        display: inline-block;
        font-size: 1rem;
        font-weight: 600;
        line-height: 1.2rem;
        padding: 6px 16px;
        text-align: center;
        text-decoration: none;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        vertical-align: middle;
        white-space: nowrap;

        &:hover {
            background-color: ${({ theme }) => theme.button};
        }
    }

    @media (max-width: 600px) {
        flex-direction: column;
    }
`;
