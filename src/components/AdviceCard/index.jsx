import React from "react";
import { Container } from "./styles.jsx";

export const AdviceCard = ({ image, title, content }) => {
    return (
        <Container image={image}>
            <main>
                <h3>{title}</h3>
                <p>{content}</p>
            </main>
            <footer></footer>
        </Container>
    );
};
