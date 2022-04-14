export default function logger(reducer) {
    return (PrevState, action, args) => {
        console.group(action)
        console.log('PrevState: ', PrevState)
        console.log('Action Arguments: ', args)
        const nexState = reducer(PrevState, action, args)
        console.log('nexState: ', nexState)
        console.groupEnd()

        return nexState
    }
}