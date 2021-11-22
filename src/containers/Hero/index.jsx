import React from "react";
import { Container } from "./styles.jsx";
import { Button } from "../../components/Button";

export const Hero = () => {
    return (
        <Container>
            <div>
                <h1>
                    Legal Pro <strong>Services</strong>
                </h1>
                <p>
                    We know how large objects will act, but things on a small
                    scale just do not act that way.
                </p>
                <div>
                    <Button primary>Get Quote Now</Button>
                    <Button>Learn More</Button>
                </div>
            </div>
        </Container>
    );
};
