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

        header {
            text-align: left;

            h2 {
                max-width: 20rem;
            }
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
        display: flex;
        align-items: center;
        gap: 1rem;

        img {
            max-width: 2.25rem;
        }
    }
`;
