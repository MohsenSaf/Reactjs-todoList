export const removeTodo = id => (dispatch, getState) => {
  const { todos } = getState()
  const newTodos = todos.filter(todo => todo.id !== id)
  dispatch(setTodos(newTodos))
}


export const addTodo = data =>(dispatch, getState) => {
  if (!data) 
    dispatch({ type: 'ADD_TODOS', payload: data })
  setTask('')
  
}

export function setTask (payload){
  return {
    type: 'TASK',
    payload
  }
}



export function setTodo (payload) {
  return {
    type: 'TODO',
    payload
  }
}

export function setTodos (payload) {
  return {
    type: 'TODOS',
    payload
  }
}

function getId (todos) {
  return todos.length ? todos[todos.length - 1].id + 1 : 1
}
