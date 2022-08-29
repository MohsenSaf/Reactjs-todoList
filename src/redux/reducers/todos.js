export default function todos (state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { title: action.payload, id: todos.length ? todos[todos.length - 1].id + 1 : 1 }]

    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.payload)
    default:
      return state
  }
}
