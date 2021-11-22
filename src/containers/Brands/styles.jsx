import styled from "styled-components";
import { DefaultContainer } from "../../components/DefaultContainer";

export const Container = styled(DefaultContainer)`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;

    gap: 2rem;

    padding-bottom: 10rem;

    > div {
        max-width: 9.5rem;
    }
`;
