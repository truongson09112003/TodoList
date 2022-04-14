import html from "../core.js"
import { connect } from "../store.js"
import Todoitem from "./Todoitem.js"

const connector = connect()

''

function Footer({ todos, filter, filters }) {
    return html `
        <footer class="footer">
            <span class="todo-count">
                <strong>${todos.filter(filters.active).length > 0 ? todos.filter(filters.active).length : ''}</strong> ${todos.filter(filters.active).length > 0 ? 'item left' : 'Hoàn Thành'}
            </span>
            <ul class="filters">
                ${Object.keys(filters).map(type => html`
                    <li>
                        <a class="${filter === type && 'selected'}" href="#/" onclick="dispatch('switchFilter', '${type}')">${type[0].toUpperCase() + type.slice(1)}</a>
                    </li>
                `)}
            </ul>
            ${todos.filter(filters.completed).length > 0 && 
                html`<button class="clear-completed" onclick = "dispatch('clearCompleted')">Clear completed</button>`}
        </footer>
    `
}


export default connector(Footer)