
let lastId = 0

function reducer(state = [], action) {
    switch (action.type) {
        case 'logAdded': return [...state, {
            id: ++lastId,
            description: action.payload.description,
            resolved: false
        }]
        case 'logRemoved': return state.filter(log => log.id !== action.payload.id)
        default:
            return state
    }
}

export default reducer;