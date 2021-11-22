import styled from "styled-components";

export const Container = styled.article`
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
        rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

    height: 100%;

    main {
        padding: 1.5rem;
        display: grid;
        gap: 1rem;

        h3 {
            font-weight: 700;
            font-size: clamp(1.125rem, 2vw, 1.6 rem);
        }
    }

    footer {
        background-image: url(${(props) => props.image});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        height: 8.625rem;
    }
`;
