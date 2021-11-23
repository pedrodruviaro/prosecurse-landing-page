import styled from "styled-components";
import { DefaultContainer } from "../../components/DefaultContainer";

export const Container = styled(DefaultContainer)`
    > div {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 2rem;

        article {
            width: 100%;
            max-width: 35rem;

            &:nth-child(2) {
                padding: 5rem 2rem;

                background-color: ${(props) => props.theme.darkBlue};

                p,
                h3 {
                    color: #fff;
                }
            }
        }

        @media (min-width: 60rem) {
            flex-direction: row;
            gap: 0;
        }
    }
`;
