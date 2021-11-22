import React from "react";
import { Container } from "./styles.jsx";
import { cards } from "./data";
import { ServiceCardHero } from "../ServiceCardHero/index.jsx";

export const HeroCards = () => {
    return (
        <Container>
            {cards.map((card) => (
                <ServiceCardHero key={card.title} {...card} />
            ))}
        </Container>
    );
};
