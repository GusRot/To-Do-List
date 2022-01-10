import { createStore } from "redux";

const initialState = {
    module: [
        {
            category: "Trabalho",
            text: "To do Teste",
            done: false,
            id: 1,
        },
        {
            category: "Trabalho",
            text: "Entregar Projeto X",
            done: true,
            id: 1,
        },
    ],
};

function reducer(state = initialState, action) {
    if (action.type === "ADD_TASK") {
        return {
            module: [...state.module, action.content],
        };
    }

    if (action.type === "TOGGLE_DONE") {
        const arr = [];
        for (let i = 0; i < state.module.length; i++) {
            if (state.module[i].id === action.module.id) {
                if (action.module.done === true) {
                    action.module.done = false;
                } else action.module.done = true;
                arr.push(action.module);
            } else {
                arr.push(state.module[i]);
            }
        }
        return {
            module: [...arr],
        };
    }

    return state;
}

const store = createStore(reducer);

export default store;
