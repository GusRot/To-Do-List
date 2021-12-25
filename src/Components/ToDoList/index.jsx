import React from "react";
import { Container, Div } from "./style";
import { connect } from "react-redux";

function toggleDone(module) {
    return {
        type: "TOGGLE_DONE",
        module,
    };
}

const ToDoList = ({ modules, dispatch }) => (
    <Container>
        <section>
            {modules.map((module) => (
                <Div color={module.done} key={module.id}>
                    <div onClick={() => dispatch(toggleDone(module))}>
                        <div></div>
                        <h1>{module.category}</h1>
                    </div>
                    <div>
                        <p>{module.text}</p>
                    </div>
                </Div>
            ))}
        </section>
    </Container>
);

export default connect((state) => ({ modules: state.module }))(ToDoList);
