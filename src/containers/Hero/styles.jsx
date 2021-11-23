import styled from "styled-components";
import { DefaultContainer } from "../../components/DefaultContainer";

export const Container = styled(DefaultContainer)`
    display: grid;
    grid-template-columns: 1.5fr 1fr;

    padding-bottom: 12rem;

    background-image: url("/assets/images/cover.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: right;
    background-position-x: 70%;

    @media (max-width: 40rem) {
        grid-template-columns: 1fr;
        background: none;
    }

    @media (min-width: 70rem) {
        background-position-x: 100%;
    }

    > div {
        display: grid;
        gap: 1.5rem;

        padding: 2rem;

        text-align: center;

        h1 {
            font-size: clamp(3rem, 3vw, 3.6rem);
            text-transform: uppercase;
            font-weight: 900;

            strong {
                display: block;
                font: inherit;
            }
        }

        p {
            max-width: 23.5rem;
            margin-inline: auto;
            font-weight: 500;
            font-size: 1.25rem;
        }

        > div {
            display: grid;
            gap: 1rem;

            button {
                justify-self: center;
            }
        }

        @media (min-width: 40rem) {
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
