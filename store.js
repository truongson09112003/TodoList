import { createStore } from './core.js'
import reducer from './reducer.js'
import Withlogger from "./logger.js"

// console.log(Withlogger(reducer))

const { attach, connect, dispatch } = createStore(Withlogger(reducer))

window.dispatch = dispatch

export {
    attach,
    connect
}