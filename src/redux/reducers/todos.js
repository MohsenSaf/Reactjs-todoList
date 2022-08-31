export function todo (state = {}, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return action.payload

    case 'REMOVE_TODO':
      return action.payload

    default:
      return state
  }
}

export function todos (state = [], action) {
  switch (action.type) {
    case 'TODOS':
      return action.payload

    default:
      return state
  }
}

export function task (state = [], action) {
  switch (action.type) {
    case 'TASK':
      return action.payload

    default:
      return state
  }
}