import styled, { css } from "styled-components";

export const Container = styled.button`
    border: none;
    outline: none;
    background: transparent;

    transition: filter 200ms ease;

    border: 1px solid ${(props) => props.theme.brown};
    padding: 0.5rem 2rem;

    font-weight: 500;

    border-radius: 24px;

    &:hover,
    &:focus {
        filter: brightness(0.8);
    }

    ${(props) =>
        props.primary &&
        css`
            background-color: ${(props) => props.theme.brown};
            color: #fff;
        `}

    ${(props) =>
        props.secondary &&
        css`
            background-color: ${(props) => props.theme.bgColor};
            color: ${(props) => props.theme.brown};
        `}

    ${(props) =>
        props.squared &&
        css`
            border-radius: 4px;
        `}

    ${(props) =>
        props.gold &&
        css`
            border-radius: 4px;
            background: transparent;
            border-color: ${(props) => props.theme.gold};
            color: ${(props) => props.theme.gold};
        `}
`;
