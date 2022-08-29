import React from 'react'
import { DeleteTwoTone, EditTwoTone } from '@ant-design/icons'
import { Connect } from 'react-redux'

 export default function List () {
  return (
    <div>
      {/* <>
      <ol>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.title}
            <span
              // onClick={() => removeTodo(todo.id)}
              style={{ margin: '10px', cursor: 'pointer' }}
            >
              <DeleteTwoTone />
            </span>
            <span style={{ margin: '10px', cursor: 'pointer' }}>
              <EditTwoTone />
            </span>
          </li>
        ))}
        </ol>
        </> */}
      jh
    </div>
  )
}

// const mapStateToProps = state => ({
//   todos: state.todos
// })

// const mapDispatchToProps = dispatch => ({
//   getItems: () => dispatch(getPersons()),
//   removeItem: id => dispatch(removePerson(id))
// })

// export default connect(mapStateToProps, mapDispatchToProps)(List)