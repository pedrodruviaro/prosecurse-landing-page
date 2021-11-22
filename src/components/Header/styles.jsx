import styled, { css } from "styled-components";

export const Container = styled.header`
    max-width: 80rem;
    height: 4rem;
    padding-inline: 1.5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    position: relative;

    h1 {
        margin-right: 1.5rem;
    }

    nav {
        display: flex;
        gap: 1.315rem;

        position: fixed;
        flex-direction: column;
        top: 4rem;
        left: 0;
        right: 0;
        align-items: flex-start;

        background: ${(props) => props.theme.bgColor};
        z-index: 999;
        transition: all 200ms;

        height: 0;
        overflow: hidden;

        a {
            position: relative;
            left: 2rem;
        }
    }

    ${(props) =>
        props.active &&
        css`
            nav {
                height: 200px;
                padding-top: 2rem;
            }
        `}

    @media screen and (min-width: 45rem) {
        padding-inline: 2.5rem;
        justify-content: flex-start;

        h1 {
            margin-right: 2.5rem;
        }

        nav {
            background-color: transparent;
            padding: 0;
            flex-direction: row;
            align-items: center;
            position: static;
            height: auto;

            a {
                left: 0;
            }
        }
    }
`;

export const MenuToggle = styled.div`
    display: grid;
    gap: 5px;
    justify-items: end;
    cursor: pointer;
    position: relative;
    width: 25px;

    @media screen and (min-width: 45rem) {
        display: none;
    }

    &:hover,
    &:focus {
        outline: 1px solid #ccc;
        outline-offset: 5px;
    }

    &::before {
        content: "";
        background: ${(props) => props.theme.darkBlue};
        width: 25px;
        height: 2px;
        display: block;
        transition: all 250ms ease-in-out;
    }

    &::after {
        content: "";
        background: ${(props) => props.theme.darkBlue};
        width: 15px;
        height: 2px;
        display: block;
        transition: all 250ms ease-in-out;
    }

    span {
        background: ${(props) => props.theme.darkBlue};
        width: 20px;
        height: 2px;
        display: block;
        transition: all 250ms ease-in-out;
    }

    ${(props) =>
        props.active &&
        css`
            &::before {
                width: 15px;
            }

            &::after {
                width: 25px;
            }

            span {
                width: 20px;
            }
        `}
`;
