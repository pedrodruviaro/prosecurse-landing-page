import React from "react";
import { Container, Wrapper } from "./styles.jsx";

export const Footer = () => {
    return (
        <Wrapper>
            <Container>
                <div>
                    <h4>Company Info</h4>
                    <a href="/">About Us</a>
                    <a href="/">Carrier</a>
                    <a href="/">We are hiring</a>
                    <a href="/">Blog</a>
                </div>
                <div>
                    <h4>Features</h4>
                    <a href="/">Business Marketing</a>
                    <a href="/">User Analytic</a>
                    <a href="/">Live Chat</a>
                    <a href="/">Unlimited Support</a>
                </div>
                <div>
                    <h4>Resources</h4>
                    <a href="/">IOS &#38; Android</a>
                    <a href="/">Watch a Demo</a>
                    <a href="/">Customers</a>
                    <a href="/">API</a>
                </div>

                <div>
                    <h4>Get In Touch</h4>
                    <p>
                        <img
                            src="/assets/icons/phone-icon-blue.svg"
                            alt="phone contact"
                        />
                        <a href="/">(480) 555-0103</a>
                    </p>
                    <p>
                        <img
                            src="/assets/icons/location-icon-blue.svg"
                            alt="location"
                        />
                        <a href="/">4517 Washington Ave.</a>
                    </p>
                    <p>
                        <img
                            src="/assets/icons/send-icon-blue.svg"
                            alt="email contact"
                        />
                        <a href="/">debra.holt@example.com</a>
                    </p>
                </div>
            </Container>
        </Wrapper>
    );
};
