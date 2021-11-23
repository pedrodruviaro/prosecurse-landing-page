import React from "react";
import { Container } from "./styles.jsx";
import { cards } from "./data";
import { ContactCard } from "../../components/ContactCard/index.jsx";
import { SectionBox } from "../../components/SectionBox";

export const GetInTouch = () => {
    return (
        <Container>
            <SectionBox
                title="Get In Touch"
                description="Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics "
            />

            <div>
                {cards.map((card) => (
                    <ContactCard key={card.img} {...card} />
                ))}
            </div>
        </Container>
    );
};
