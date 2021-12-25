import React, { Component } from "react";
import { Container } from "./style";
import { connect } from "react-redux";

class AddList extends Component {
    constructor() {
        super();
        this.titulo = "";
    }

    submit(event) {
        event.preventDefault();
    }

    handleInput(event) {
        this.titulo = event.target.value;
    }

    render() {
        return (
            <Container onSubmit={this.submit.bind(this)}>
                <input
                    type="text"
                    placeholder="Adicione sua Nota"
                    onChange={this.handleInput.bind(this)}
                />
                <button
                    onClick={(e) => {
                        this.props.addTask(e, this.titulo);
                    }}
                >
                    Criar Nota
                </button>
            </Container>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (e, titulo) => dispatch(addTasks(titulo)),
    };
};

function addTasks(titulo) {
    return {
        type: "ADD_TASK",
        content: {
            category: "text",
            text: titulo,
            done: "no",
            id: "",
        },
    };
}

export default connect(null, mapDispatchToProps)(AddList);
