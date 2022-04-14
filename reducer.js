import storage from "./until/Storage.js"

let init = {
    todos: storage.get(),
    filter: 'all',
    filters: {
        all: () => true,
        active: todo => !todo.completed,
        completed: todo => todo.completed
    },
    startEdit: null
}

const actions = {
    add({ todos }, title) {
        if (title) {
            todos.push({ title, completed: false })
            storage.set(todos)
        }
        // cah 2
        // title && todos.push({ title, completed: false })
        // storage.set(todos)
    },
    toggle({ todos }, index) {
        const check = todos[index]
        check.completed = !check.completed
        storage.set(todos)
    },
    toggle_all({ todos }, completed) {
        todos.forEach((todos) => todos.completed = completed)
        storage.set(todos)
    },
    destroy({ todos }, index) {
        todos.splice(index, 1)
        storage.set(todos)
    },
    switchFilter(state, filter) {
        state.filter = filter
    },
    clearCompleted(state) {
        state.todos = state.todos.filter(state.filters.active)
        storage.set(state.todos)
    },
    startEdit(state, index) {
        state.startEdit = index
    },
    editor(state, title, index) {
        if (state.startEdit != null) {
            if (title) {
                state.todos[index].title = title
                storage.set(state.todos)
            } else {
                this.destroy(state, index)
            }
            state.startEdit = null
        }
    },
    cacelEdit(state) {
        state.startEdit = null
    }
}

export default function reducer(state = init, action, args) {
    // actions[action] && actions[action](state, ...args)
    if (actions[action]) {
        actions[action](state, ...args)
    }
    return state

}