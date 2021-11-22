import styled from "styled-components";
import { DefaultContainer } from "../../components/DefaultContainer";

export const Container = styled(DefaultContainer)`
    > div {
        display: grid;
        gap: 1.5rem;
        justify-content: center;
        align-items: start;

        @media (min-width: 37.5rem) {
            grid-template-columns: 1fr 1fr;
            justify-items: center;
        }

        @media (min-width: 62rem) {
            display: flex;
            align-items: flex-start;
        }

        > article {
            width: 100%;
            max-width: 15rem;
        }
    }
`;
