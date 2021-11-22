import styled from "styled-components";
import { DefaultContainer } from "../DefaultContainer";

export const Container = styled(DefaultContainer)`
    padding-top: 0;
    /* padding-bottom: 0; */

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 1.5rem;

    margin-top: -10rem;

    > * {
        flex: 1;

        max-width: 20.5rem;
    }

    @media (min-width: 40rem) {
        flex-direction: row;
        justify-content: center;
    }
`;
