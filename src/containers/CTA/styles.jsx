import styled from "styled-components";
import { DefaultContainer } from "../../components/DefaultContainer";

export const Wrapper = styled.div`
    background-color: ${(props) => props.theme.darkBlue};
`;

export const Container = styled(DefaultContainer)`
    padding-top: 2rem;
    padding-bottom: 2rem;

    > div {
        display: grid;
        gap: 1.875rem;
        position: relative;
        margin-top: -6rem;

        background-color: ${(props) => props.theme.blue};
        padding: 1.875rem 3.125rem;

        h2 {
            color: #fff;
            font-size: clamp(1.35rem, 2vw, 1.5rem);
        }

        > div {
            display: grid;
            border: 1px solid #ccc;
            border-radius: 2px;
            overflow: hidden;

            input {
                font-size: 1rem;
                padding: 0.75rem;
                border: none;
                outline: none;
                background-color: #fff;
                width: 100%;
            }

            button {
                background-color: ${(props) => props.theme.gold};
                color: #fff;
                border: none;
                outline: none;
                padding: 0.75rem 1rem;
                font-weight: 500;
            }
        }

        @media (min-width: 45rem) {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 2rem;

            h2 {
                flex: 1;
                max-width: 20rem;
            }

            > div {
                flex: 2;
                display: flex;
                max-width: 50%;
                input {
                    flex: 1;
                }
            }
        }
    }
`;
