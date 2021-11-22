import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

import { ThemeProvider } from "styled-components";

import { theme } from "./style/theme";
import { ResetStyles } from "./style/ResetStyles";
import { GlobalStyles } from "./style/GlobalStyles";

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />

            <ResetStyles />
            <GlobalStyles />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
