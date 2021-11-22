import React from "react";
import { Container } from "./styles";
import { SectionBox } from "../../components/SectionBox";
import { cards } from "./data";
import { AdviceCard } from "../../components/AdviceCard";

export const PracticeAdvice = () => {
    return (
        <Container>
            <SectionBox
                title="Practice Advice"
                description="Problems trying to resolve the conflict between two major realms of Classical physics: Newtonian mechanics "
            />

            <div>
                {cards.map((card) => (
                    <AdviceCard key={card.title} {...card} />
                ))}
            </div>
        </Container>
    );
};
