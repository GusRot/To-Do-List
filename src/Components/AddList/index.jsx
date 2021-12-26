import React, { Component } from "react";
import { Container } from "./style";
import { connect } from "react-redux";
class AddList extends Component {
    constructor() {
        super();
        this.title = "";
        this.categories = ["Trabalho", "Casa", "Hobbies"];
        this.categorySelected = "Sem Categoria";
        this.id = 4;
    }

    submit(event) {
        event.preventDefault();
        this.id += 1;
    }

    handleTitle(event) {
        this.title = event.target.value;
    }

    handleCategory(event) {
        this.categorySelected = event.target.value;
        console.log(this.categorySelected);
    }

    render() {
        return (
            <Container onSubmit={this.submit.bind(this)}>
                <div>
                    <input
                        type="text"
                        placeholder="Adicione sua Nota"
                        onChange={this.handleTitle.bind(this)}
                    />
                    <select onChange={this.handleCategory.bind(this)}>
                        <option>Sem Categoria</option>
                        {this.categories.map((category, index) => {
                            return <option key={index}>{category}</option>;
                        })}
                    </select>
                </div>
                <button
                    onClick={(e) => {
                        this.props.addTask(
                            e,
                            this.title,
                            this.categorySelected,
                            this.id
                        );
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
        addTask: (e, title, category, id) =>
            dispatch(addTasks(title, category, id)),
    };
};

function addTasks(title, category, id) {
    const newCategory = category === "Sem Categoria" ? "Geral" : category;
    return {
        type: "ADD_TASK",
        content: {
            category: newCategory,
            text: title,
            done: false,
            id: id,
        },
    };
}

export default connect(null, mapDispatchToProps)(AddList);
