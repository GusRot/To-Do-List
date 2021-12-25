import styled from "styled-components";

export const Container = styled.main`
    height: 80vh;
    width: 100%;
    overflow: scroll;
    display: flex;
    justify-content: center;
    align-items: center;

    section {
        min-height: 40vh;
        width: 80%;
        max-width: 840px;
        padding: 30px;

        background-color: ${({ theme }) => theme.secondary};
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 1rem;

        @media (max-width: 500px) {
            width: 100%;
        }
    }
`;

export const Div = styled.div`

            display: flex;
            justify-content: flex-start;
            align-items: center;
            width: 100%;
            gap: 0.5rem;

            div {
                &:first-child {
                    cursor: pointer;
                    width: 25%;
                }

                div {
                    cursor: pointer;
                    &:first-child {
                        margin-right:5px;
                        min-width: 15px;
                        height: 0.8rem;
                        max-width: 20px;
                        border: 1px solid ${({ theme }) => theme.primary};
                        background-color: ${(props) =>
                            props.color ? props.color : "white"};
                        }
                }
                max-width: 75%;
                min-width: 150px;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                text-align: justify;
                text-justify: inter-word;
                word-break: break-all;
                text-decoration:  ${(props) =>
                    props.color ? "line-through" : ""};
                        };
                line-height: 1rem;
            }
        }
`;
