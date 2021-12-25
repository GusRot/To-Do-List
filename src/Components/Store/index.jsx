import { createStore } from "redux";

const initialState = {
    module: [
        {
            category: "work",
            text: "loremssdasasdsadasfsdfdsfdsfdsfdsfsdfdsfdsfdsdsadsadasdsa",
            done: "no",
            id: 1,
        },
        {
            category: "home",
            text: "asdasdwdsadsadas",
            done: "no",
            id: 2,
        },
        {
            category: "Money",
            text: "wwwwwwwwwwww",
            done: "no",
            id: 3,
        },
    ],
};

function reducer(state = initialState, action) {
    if (action.type === "ADD_TASK") {
        console.log({ module: [...state.module, action.content] });
        return {
            module: [...state.module, action.content],
        };
    }

    if (action.type === "TOGGLE_DONE") {
        for (let i = 0; i < state.module.length; i++) {
            if (state.module[i].id === action.module.id) {
                if (action.module.done === "yes") {
                    action.module.done = "no";
                } else action.module.done = "yes";
            }
        }
    }

    return state;
}

const store = createStore(reducer);

export default store;
