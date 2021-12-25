import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import AddList from "./Components/AddList";
import ToDoList from "./Components/ToDoList";
import { GlobalStyle } from "./Styles/Global";
import { lightTheme, darkTheme } from "./Styles/Theme";
import { Provider } from "react-redux";
import store from "./Components/Store";

class App extends Component {
    constructor() {
        super();
        this.theme = lightTheme;
    }

    handleTheme() {
        if (this.theme === darkTheme) {
            this.theme = lightTheme;
        } else {
            this.theme = darkTheme;
        }
    }

    render() {
        return (
            <ThemeProvider theme={lightTheme}>
                <Provider store={store}>
                    <AddList />
                    <ToDoList />
                </Provider>
                <GlobalStyle />
            </ThemeProvider>
        );
    }
}

export default App;
