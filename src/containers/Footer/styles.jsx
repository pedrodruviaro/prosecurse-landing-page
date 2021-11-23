import styled from "styled-components";
import { DefaultContainer } from "../../components/DefaultContainer";

export const Wrapper = styled.div`
    background: linear-gradient(270deg, #295c7a -1.04%, #0072b5 100%);
`;

export const Container = styled(DefaultContainer)`
    display: grid;
    gap: 4rem;

    @media (min-width: 40rem) {
        grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 70rem) {
        grid-template-columns: repeat(4, 1fr);
    }

    h4,
    a {
        color: #fff;
    }

    h4 {
        font-weight: 800;
        font-size: 1.125rem;
        margin-bottom: 0.65rem;
    }

    a {
        font-weight: 500;
        font-size: 1rem;
    }

    p {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    > div {
        display: grid;
        gap: 0.6rem;
    }
`;
