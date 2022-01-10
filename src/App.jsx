import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import AddList from "./Components/AddList";
import ToDoList from "./Components/ToDoList";
import { GlobalStyle } from "./Styles/Global";
import { lightTheme, darkTheme } from "./Styles/Theme";
import { Provider } from "react-redux";
import { store, persistor } from "./Components/Store";
import Theme from "./Components/Theme";
import { PersistGate } from "redux-persist/integration/react";

class App extends Component {
    constructor() {
        super();
        this.state = {
            theme: lightTheme,
            text: "Claro",
        };
    }

    handleTheme() {
        if (this.state.theme === darkTheme) {
            this.setState({
                theme: lightTheme,
                text: "Claro",
            });
        } else {
            this.setState({
                theme: darkTheme,
                text: "Escuro",
            });
        }
    }

    render() {
        return (
            <ThemeProvider theme={this.state.theme}>
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                        <header>
                            <Theme
                                themeFunction={this.handleTheme.bind(this)}
                                theme={this.state}
                            />
                            <AddList />
                        </header>
                        <ToDoList />
                    </PersistGate>
                </Provider>
                <GlobalStyle />
            </ThemeProvider>
        );
    }
}

export default App;
