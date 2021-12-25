import { createStore } from "redux";

const initialState = {
    module: [
        {
            category: "Trabalho",
            text: "Entregar Projeto X dsdsdadsdasdasdsadasdsadsadasdsadsadsadsadsadsadsadsadsadasdsa",
            done: "#2ea44f",
            id: 1,
        },
        {
            category: "Casa",
            text: "Lavar Roupa",
            done: "",
            id: 2,
        },
        {
            category: "Hobbies",
            text: "Jogar Witcher III",
            done: "",
            id: 3,
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
                if (action.module.done === "#2ea44f") {
                    action.module.done = "";
                } else action.module.done = "#2ea44f";
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
