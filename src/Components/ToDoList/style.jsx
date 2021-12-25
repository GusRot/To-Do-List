import styled from "styled-components";

export const Container = styled.main`
    height: 85vh;
    width: 100%;
    overflow: scroll;
    display: flex;
    justify-content: center;
    align-items: center;

    section {
        min-height: 40vh;
        width: 50%;
        padding: 2%;

        background-color: ${({ theme }) => theme.secondary};
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 1rem;

        div {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            width: 100%;
            gap: 0.5rem;

            div {
                &:first-child {
                    width: 25%;

                    div {
                        height: 0.8rem;
                        width: 0.8rem;
                        border: 1px solid ${({ theme }) => theme.primary};
                        background-color: ${({ theme }) => theme.button};
                    }
                }
                width: 75%;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                text-align: justify;
                text-justify: inter-word;
                word-break: break-all;
                line-height: 1rem;
            }
        }
    }
`;
