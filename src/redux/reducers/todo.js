export  default function todo (state = [] , action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, { title: action.payload, id: getId(state) }]
      
          case 'REMOVE_TODO':
            return state.filter(todo => todo.id !== action.payload)
        default:
            return state
    }
}

function getId (todos) {
    return todos.length ? todos[todos.length - 1].id + 1 : 1
  }