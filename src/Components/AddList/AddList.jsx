import React, { Component } from "react";
import { Container } from "./style";

class AddList extends Component {
    submit(event) {
        event.preventDefault();
        console.log("ok");
    }
    render() {
        return (
            <Container onSubmit={this.submit.bind(this)}>
                <input type="text" placeholder="Adicione sua Nota" />
                <button>Criar Nota</button>
            </Container>
        );
    }
}

export default AddList;
