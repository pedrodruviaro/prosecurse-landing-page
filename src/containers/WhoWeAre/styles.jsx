import styled from "styled-components";
import { DefaultContainer } from "../../components/DefaultContainer";

export const Wrapper = styled.div`
    background-color: #fff;
`;

export const Container = styled(DefaultContainer)`
    main {
        display: grid;
        grid-template-columns: 1fr;
        justify-items: center;
        gap: 4rem;

        @media screen and (min-width: 60rem) {
            grid-template-columns: 1fr 1fr;
        }
    }
`;

export const VideoContainer = styled.div`
    position: relative;

    span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        cursor: pointer;

        max-width: 5rem;
    }
`;

export const ContentWhoWheAre = styled.div`
    > div {
        display: grid;
        gap: 2rem;
    }

    article {
        display: grid;
        column-gap: 1rem;
        grid-template-columns: max-content max-content;
        grid-template-rows: min-content min-content;
        grid-template-areas:
            "img title"
            "img text";
        justify-content: center;

        img {
            grid-area: img;
        }

        h4 {
            grid-area: title;
            font-size: 1.25rem;
        }

        p {
            grid-area: text;
        }
    }
`;
