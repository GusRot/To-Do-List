import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import AddList from "./Components/AddList";
import ToDoList from "./Components/ToDoList";
import { GlobalStyle } from "./Styles/Global";
import { lightTheme, darkTheme } from "./Styles/Theme";
import { Provider } from "react-redux";
import store from "./Components/Store";
import Theme from "./Components/Theme";

class App extends Component {
    constructor() {
        super();
        this.theme = {
            theme: lightTheme,
            text: "Claro",
        };
    }

    handleTheme() {
        console.log("ok");
        if (this.theme.theme === darkTheme) {
            this.theme.theme = lightTheme;
            this.theme.text = "Claro";
        } else {
            this.theme.theme = darkTheme;
            this.theme.text = "Escuro";
        }
    }

    render() {
        return (
            <ThemeProvider theme={this.theme.theme}>
                <Provider store={store}>
                    <header>
                        <Theme
                            themeFunction={this.handleTheme.bind(this)}
                            theme={this.theme}
                        />
                        <AddList />
                    </header>
                    <ToDoList />
                </Provider>
                <GlobalStyle />
            </ThemeProvider>
        );
    }
}

export default App;
