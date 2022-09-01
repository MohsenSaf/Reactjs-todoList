

export const removeTodo = id => (dispatch, getState) => {
  dispatch(setTodos(dispatch({ type: 'REMOVE_TODO', payload: id })))
}


export const addTodo = task =>(dispatch, getState) => {
  const { newTask } = getState()
  
  if (!newTask) 
    dispatch({ type: 'ADD_TODOS', payload: newTask })
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

