import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import AddList from "./Components/AddList/AddList";
import ToDoList from "./Components/ToDoList/ToDoList";
import { GlobalStyle } from "./Styles/Global";
import { lightTheme } from "./Styles/Theme";

class App extends Component {
    render() {
        return (
            <ThemeProvider theme={lightTheme}>
                <AddList />
                <ToDoList />
                <GlobalStyle />
            </ThemeProvider>
        );
    }
}

export default App;
