import React from "react";
import { Container } from "./styles.jsx";
import { Button } from "../Button";

export const ContactCard = ({ img, content, title, button, ...props }) => {
    return (
        <Container {...props}>
            <header>
                <img src={img} alt={title} />
            </header>
            <main>
                <div>
                    {content.map((text, i) => (
                        <p key={i}>{text}</p>
                    ))}
                </div>

                <h3>{title}</h3>
            </main>
            <footer>
                <Button gold>{button}</Button>
            </footer>
        </Container>
    );
};
