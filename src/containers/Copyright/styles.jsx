import styled from "styled-components";

export const Wrapper = styled.div`
    background: #fafafa;
`;

export const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    flex-wrap: wrap;

    padding: 2rem;

    h6 {
        color: ${(props) => props.theme.text};
        font-size: 0.9rem;
        font-weight: 700;
    }

    nav {
        display: flex;
        align-items: center;
        gap: 1.125rem;
    }
`;
