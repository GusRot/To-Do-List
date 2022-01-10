export function addTasks(title, category, id) {
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

export function toggleDone(module) {
    return {
        type: "TOGGLE_DONE",
        module,
    };
}
