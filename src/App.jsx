import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./Styles/Global";
import { lightTheme } from "./Styles/Theme";

function App() {
    return (
        <ThemeProvider theme={lightTheme}>
            <div>
                <h1>Hello World</h1>
            </div>
            <GlobalStyle />
        </ThemeProvider>
    );
}

export default App;
