import { Header } from "./components/Header";
import { HeroCards } from "./components/HeroCards";
import { Brands } from "./containers/Brands";
import { ClientsRecords } from "./containers/ClientsRecords";
import { Hero } from "./containers/Hero";
import { PracticeAdvice } from "./containers/PracticeAdvise";
import { WhoWeAre } from "./containers/WhoWeAre";
import { CTA } from "./containers/CTA";
import { GetInTouch } from "./containers/GetInTouch";
import { ConsultationCTA } from "./containers/ConsultatioCTA";

export const App = () => {
    return (
        <>
            <Header />
            <Hero />
            <HeroCards />
            <ClientsRecords />
            <PracticeAdvice />
            <WhoWeAre />
            <Brands />
            <CTA />
            <GetInTouch />
            <ConsultationCTA />
        </>
    );
};
