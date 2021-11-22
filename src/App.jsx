import { Header } from "./components/Header";
import { HeroCards } from "./components/HeroCards";
import { ClientsRecords } from "./containers/ClientsRecords";
import { Hero } from "./containers/Hero";
import { PracticeAdvice } from "./containers/PracticeAdvise";

export const App = () => {
    return (
        <>
            <Header />
            <Hero />
            <HeroCards />
            <ClientsRecords />
            <PracticeAdvice />
        </>
    );
};
