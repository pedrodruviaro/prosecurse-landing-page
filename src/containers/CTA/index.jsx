import React from "react";
import { Container, Wrapper } from "./styles.jsx";

export const CTA = () => {
    return (
        <Wrapper>
            <Container>
                <div>
                    <h2>Subscribe For Latest Newsletter</h2>
                    <div>
                        <input type="email" placeholder="Your Email" />
                        <button>Subscribe</button>
                    </div>
                </div>
            </Container>
        </Wrapper>
    );
};
