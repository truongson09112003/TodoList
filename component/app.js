import html from "../core.js"
import { connect } from "../store.js"
import Header from "../component/Header.js"
import TodoList from "../component/TodoList.js"
import Footer from "../component/Footer.js"

const connector = connect()


function App({ todos }) {
    return html `
        <section class="todoapp">
            ${Header()}
            ${todos.length > 0 && TodoList()}
            ${Footer()}
        </section>
    `
}


const namei = connector(App)

// console.log(namei)

export default connector(App)