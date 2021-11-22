import React from "react";
import { Container } from "./styles.jsx";

export const ServiceCardHero = ({ image, title, content }) => {
    return (
        <Container>
            <header>
                <img src={image} alt={title} />
            </header>
            <main>
                <h3>{title}</h3>
                <p>{content}</p>
            </main>
        </Container>
    );
};
