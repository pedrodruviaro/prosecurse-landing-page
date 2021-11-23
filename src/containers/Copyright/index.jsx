import React from "react";
import { Container, Wrapper } from "./styles.jsx";

const imagesURL = [
    "facebook.svg",
    "instagram.svg",
    "twitter.svg",
    "youtube.svg",
];

export const Copyright = () => {
    return (
        <Wrapper>
            <Container>
                <h6>Made By Figmaland - All Right Reserved</h6>
                <nav>
                    {imagesURL.map((url) => (
                        <a href="/" key={url}>
                            <img
                                src={`/assets/social/${url}`}
                                alt="Social link"
                            />
                        </a>
                    ))}
                </nav>
            </Container>
        </Wrapper>
    );
};
