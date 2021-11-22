import React from "react";
import { Container } from "./styles.jsx";
import { SectionBox } from "../../components/SectionBox";
import { cards } from "./data";

export const ClientsRecords = () => {
    return (
        <Container>
            <SectionBox
                title="Every Client Matters"
                description="Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics "
            />

            <div>
                {cards.map((card) => (
                    <article key={card.title}>
                        <img src={card.image} alt={card.title} />
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                    </article>
                ))}
            </div>
        </Container>
    );
};
