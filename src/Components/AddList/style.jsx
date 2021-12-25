import styled from "styled-components";
import { transparentize } from "polished";

export const Container = styled.form`
    height: 10vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    input {
        font-size: 1rem;
        font-weight: 600;
        line-height: 1.2rem;
        padding: 6px 16px;
        text-align: center;
        text-decoration: none;
        color: background-color: ${({ theme }) => theme.button};
        border: 1px solid rgba(27, 31, 35, 0.15);
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
`;