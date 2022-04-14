const STORAGE_LOCAL = 'TODOS'

export default {
    get() {
        return JSON.parse(localStorage.getItem(STORAGE_LOCAL)) || []
    },
    set(todos) {
        localStorage.setItem(STORAGE_LOCAL, JSON.stringify(todos))
    }
}