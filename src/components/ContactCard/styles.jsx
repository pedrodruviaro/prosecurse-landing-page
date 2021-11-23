import styled from "styled-components";

export const Container = styled.article`
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
        rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

    display: grid;
    gap: 2rem;

    padding: 4rem 2rem;
    text-align: center;

    header {
        display: flex;
        align-items: center;

        img {
            margin-inline: auto;
        }
    }

    main {
        display: grid;
        gap: 2rem;

        > div {
            display: grid;
            gap: 0.5rem;

            p {
                font-weight: 600;
            }
        }

        h3 {
            font-size: clamp(1.155rem, 3vw, 1.25rem);
            font-weight: 700;
        }
    }
`;
