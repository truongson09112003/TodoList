export default function html([first, ...string], ...value) {
    return value.reduce((acc, element) => {
            return acc.concat(element, string.shift())
        }, [first])
        .filter(x => x && x !== true || x === 0)
        .join('')
}

export function createStore(reducer) {
    let state = reducer()
    const roots = new Map()


    // render the store
    function render() {
        for (const [root, component] of roots) {
            const output = component()
            root.innerHTML = output
        }
    }

    // các phương thức làm việc với Store
    return {
        attach(component, root) {
            roots.set(root, component)
            render()
        },
        connect(selector = state => state) {
            return component => (props, ...args) =>
                component(Object.assign({}, props, selector(state), ...args))
        },
        dispatch(action, ...args) {
            state = reducer(state, action, args)
            render()
        }
    }
}