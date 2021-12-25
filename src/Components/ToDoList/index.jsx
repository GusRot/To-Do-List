import React from "react";
import { Container } from "./style";
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
            {modules.map((module, index) => (
                <div key={module.category + index}>
                    <div>
                        <div onClick={() => dispatch(toggleDone(module))}></div>
                        <h1>{module.category}</h1>
                    </div>
                    <div>
                        <p>{module.text}</p>
                    </div>
                </div>
            ))}
        </section>
    </Container>
);

export default connect((state) => ({ modules: state.module }))(ToDoList);
