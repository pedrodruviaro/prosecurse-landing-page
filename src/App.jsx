import { Button } from "./components/Button";
import { SectionBox } from "./components/SectionBox";

export const App = () => {
    return (
        <>
            <SectionBox title="React App" description="lorem ipsum dolor" />
            <Button primary>Primary</Button>
            <Button secondary>Secondary</Button>
            <Button gold>Secondary</Button>
            <Button primary squared>
                Secondary
            </Button>
        </>
    );
};
