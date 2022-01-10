import React from "react";
import { Container, Div } from "./style";
import { connect } from "react-redux";
import { toggleDone } from "../Store/actions";

const ToDoList = ({ modules, dispatch }) => (
    <Container>
        <section>
            {modules.map((module) => (
                <Div color={module.done.toString()} key={module.id + 20}>
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
