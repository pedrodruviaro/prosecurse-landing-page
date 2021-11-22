import React from "react";
import { Container } from "./styles.jsx";

export const SectionTitle = ({ children, ...props }) => {
    return <Container {...props}>{children}</Container>;
};
