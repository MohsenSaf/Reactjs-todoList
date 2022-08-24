import { useState } from 'react'
import Form, { Input, Button } from '../utils/Form'

export default function Todo () {
  const [loading, setLoading] = useState(false)

  return (
    <div>
      <Form>
        <Input lable='افزودن' />
        <Button loading={loading}>افزودن</Button>
      </Form>

      {/* <form onSubmit={addTodo}>
        <input value={task} onChange={e => setTask(e.target.value)} />
        <button type='submit'>Add todo</button>
      </form>
      <ol>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.id} {todo.title}
            <span
              onClick={() => removeTodo(todo.id)}
              style={{ color: 'red', margin: '10px', cursor: 'pointer' }}
            >
              x
            </span>
          </li>
        ))}
      </ol> */}
    </div>
  )
}
