import React from "react";
import { Container } from "./styles.jsx";
import { imagesURL } from "./brands";

export const Brands = () => {
    return (
        <Container>
            {imagesURL.map((img, i) => (
                <div key={i}>
                    <img src={img} alt="" />
                </div>
            ))}
        </Container>
    );
};
