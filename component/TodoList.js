import html from "../core.js"
import { connect } from "../store.js"
import Todoitem from "../component/Todoitem.js"

const connector = connect()


function TodoList({ todos, filter, filters }) {
    return html `
        <section class="main">
            <input id="toggle-all" 
                onclick="dispatch('toggle_all',this.checked)" 
                class="toggle-all" type="checkbox"
                ${todos.every(filters.completed) && 'checked'}
            
            >
            <label for="toggle-all" >Mark all as complete</label>
            <ul class="todo-list">
                ${todos.filter(filters[filter]).map((todo, index) => 
                        Todoitem({todo , index}))
                }
            </ul>
        </section>
    `
}


export default connector(TodoList)