import React from "react";
import { Container } from "./styles.jsx";
import { SectionTitle } from "../SectionTitle";

export const SectionBox = ({ title, description }) => {
    return (
        <Container>
            <SectionTitle>{title}</SectionTitle>
            <p>{description}</p>
        </Container>
    );
};
