export function addTodo() {
  return (dispatch) => {
    dispatch({ type: 'ADD_TODO', payload: task })
  }
}


export const removePerson = id => (dispatch) => {
  dispatch({ type: 'REMOVE_TODO', payload: id })
}

