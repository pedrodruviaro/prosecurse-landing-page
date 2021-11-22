import styled from "styled-components";
import { DefaultContainer } from "../../components/DefaultContainer";

export const Container = styled(DefaultContainer)`
    display: grid;
    grid-template-columns: 1.5fr 1fr;

    background-image: url("/assets/images/cover.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: right;

    @media (max-width: 42rem) {
        grid-template-columns: 1fr;
        background: none;
    }

    > div {
        display: grid;
        gap: 1.5rem;

        padding: 2rem;

        text-align: center;

        h1 {
            font-size: clamp(2.5rem, 3vw, 3rem);
            font-weight: 900;

            strong {
                display: block;
                font: inherit;
            }
        }

        p {
            max-width: 18rem;
            margin-inline: auto;
        }

        > div {
            display: grid;
            gap: 1rem;

            button {
                justify-self: center;
            }
        }

        @media (min-width: 42rem) {
            text-align: left;

            p {
                margin-right: auto;
                margin-left: 0;
            }

            > div {
                display: flex;
                align-items: center;
                gap: 1rem;
            }
        }
    }
`;
