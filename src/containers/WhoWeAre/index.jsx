import React from "react";
import {
    Container,
    ContentWhoWheAre,
    VideoContainer,
    Wrapper,
} from "./styles.jsx";
import { SectionBox } from "../../components/SectionBox";

export const WhoWeAre = () => {
    return (
        <Wrapper>
            <Container>
                <SectionBox
                    title="Who We Are"
                    description="Problems trying to resolve conflict between the two major realms of Classical physics: Newtonian mechanics"
                />
                <main>
                    <VideoContainer>
                        <img
                            src="/assets/images/who-we-are-cover.png"
                            alt="Who we are video"
                        />

                        <span>
                            <img src="/assets/icons/play-button.svg" alt="" />
                        </span>
                    </VideoContainer>

                    <ContentWhoWheAre>
                        <SectionBox
                            title="Most trusted in our field"
                            description="Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule."
                        />

                        <div>
                            <article>
                                <img
                                    src="/assets/icons/people-icon.svg"
                                    alt=""
                                />
                                <h4>the quick fox jumps over the lazy dog</h4>
                                <p>Things on a very small scale ...</p>
                            </article>

                            <article>
                                <img
                                    src="/assets/icons/speed-icon.svg"
                                    alt=""
                                />
                                <h4>the quick fox jumps over the lazy dog</h4>
                                <p>Things on a very small scale ...</p>
                            </article>
                        </div>
                    </ContentWhoWheAre>
                </main>
            </Container>
        </Wrapper>
    );
};
