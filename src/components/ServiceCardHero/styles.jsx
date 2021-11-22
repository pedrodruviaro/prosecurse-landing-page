import styled from "styled-components";

export const Container = styled.article`
    display: grid;
    gap: 1.5rem;
    padding: 1.5rem;

    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
        rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

    &:hover,
    &:focus {
        background-color: #87a4b4;

        h3,
        p {
            color: #fff;
        }
    }
`;
