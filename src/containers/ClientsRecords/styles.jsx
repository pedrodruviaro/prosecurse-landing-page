import styled from "styled-components";
import { DefaultContainer } from "../../components/DefaultContainer";

export const Container = styled(DefaultContainer)`
    > div {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-wrap: wrap;
        gap: 1.5rem;

        article {
            background-color: #fff;
            padding: 1rem;
            display: grid;
            gap: 0.75rem;

            text-align: center;

            width: 100%;
            max-width: 15rem;

            box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;

            img {
                margin-inline: auto;
            }

            h3 {
                font-weight: 900;
                font-size: 1.5rem;
            }
        }
    }
`;
