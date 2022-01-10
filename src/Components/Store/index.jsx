import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
    module: [
        {
            category: "Trabalho",
            text: "To do Teste",
            done: false,
            id: 20,
        },
        {
            category: "Trabalho",
            text: "Entregar Projeto X",
            done: true,
            id: 21,
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

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
