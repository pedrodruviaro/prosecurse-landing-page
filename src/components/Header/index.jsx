import React, { useState } from "react";
import { Container, MenuToggle, Wrapper } from "./styles.jsx";

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Wrapper>
            <Container active={menuOpen}>
                <h1>Prosecurse</h1>
                <nav>
                    <a href="/">Home</a>
                    <a href="/">Product</a>
                    <a href="/">Pricing</a>
                    <a href="/">Contact</a>
                </nav>

                <MenuToggle
                    active={menuOpen}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span></span>
                </MenuToggle>
            </Container>
        </Wrapper>
    );
};
