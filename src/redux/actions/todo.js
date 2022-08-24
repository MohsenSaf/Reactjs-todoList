export function addTodo (payload) {
    return {
      type: 'Todo',
      payload
    }
  }

export const removeTodo = id => (dispatch, getState) => {
    const { toods } = getState()
    const newTodos = toods.fiter(person => person.id !== id)
    dispatch(setTodos(newTodos))
}