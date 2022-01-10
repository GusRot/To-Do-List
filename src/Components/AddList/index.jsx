import React, { Component } from "react";
import { Container } from "./style";
import { connect } from "react-redux";
class AddList extends Component {
    constructor() {
        super();
        this.state = { title: "" };
        this.categories = ["Trabalho", "Casa", "Hobbies"];
        this.categorySelected = "Sem Categoria";
        this.id = 4;
        this.submit = this.submit.bind(this);
        this.handleTitle = this.handleTitle.bind(this);
        this.handleCategory = this.handleCategory.bind(this);
    }

    submit(event) {
        event.preventDefault();
        this.id += 1;
        this.setState({
            title: "",
        });
    }

    handleTitle(event) {
        this.setState({
            title: event.target.value,
        });
    }

    handleCategory(event) {
        this.categorySelected = event.target.value;
    }

    render() {
        return (
            <Container onSubmit={this.submit}>
                <div>
                    <input
                        name="Title"
                        value={this.state.title}
                        type="text"
                        placeholder="Adicione sua Nota"
                        onChange={this.handleTitle}
                    />
                    <select onChange={this.handleCategory}>
                        <option>Sem Categoria</option>
                        {this.categories.map((category, index) => {
                            return <option key={index + 90}>{category}</option>;
                        })}
                    </select>
                </div>
                <button
                    type="submit"
                    onClick={(e) => {
                        this.props.addTask(
                            e,
                            this.state.title,
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
