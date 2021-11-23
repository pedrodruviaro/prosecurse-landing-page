import styled from "styled-components";
import { DefaultContainer } from "../../components/DefaultContainer";

export const Wrapper = styled.div`
    background: #fafafa;
`;

export const Container = styled(DefaultContainer)`
    padding: 2rem 2rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    flex-direction: column;
    gap: 2rem;

    @media (min-width: 35rem) {
        flex-direction: row;
    }
`;
