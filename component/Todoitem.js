import html from "../core.js"
import { connect } from "../store.js"

const connector = connect()


function Todoitem({ todo, index, startEdit }) {

    return html `
        <li class="${todo.completed && 'completed'} ${startEdit === index && 'editing'}">
            <div class="view">
                <input class="toggle" 
                    type="checkbox" 
                    ${todo.completed && 'checked'}
                    onchange = "dispatch('toggle',${index})"
                >
                <label ondblclick="dispatch('startEdit', ${index})">${todo.title}</label>
                <button class="destroy" onclick="dispatch('destroy', ${index})"></button>
            </div>
            <input class="edit" value="${todo.title}" onkeyup ="(event.keyCode === 13) && dispatch('editor', this.value.trim(), ${index}) || (event.keyCode === 27) && dispatch('cacelEdit')"
                onblur = "dispatch('editor', this.value.trim(), ${index})"
            >
        </li>
    `
}


export default connector(Todoitem)