import React from "react";
import { Container, Wrapper } from "./styles.jsx";
import { Button } from "../../components/Button";

export const ConsultationCTA = () => {
    return (
        <Wrapper>
            <Container>
                <div>
                    <h2>Request A Free Consultation</h2>
                    <p>the quick fox jumps over the lazy dog</p>
                </div>

                <Button squared primary>
                    Contact Us
                </Button>
            </Container>
        </Wrapper>
    );
};
