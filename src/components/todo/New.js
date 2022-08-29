import { Form, Input, Button } from 'antd'
import React, { useReducer, useState } from 'react'
import List from './List'



function getId(todos) {
  return todos.length ? todos[todos.length - 1].id + 1 : 1
}

export default function Todo () {
  const [form] = Form.useForm()

  function reducer (state, action) {
    switch (action.type) {
      case 'ADD_TODO':
        return [...state, { title: action.payload, id: getId(state) }]

      case 'REMOVE_TODO':
        return state.filter(todo => todo.id !== action.payload)

      default:
        return state
    }
  }
  const [todos, dispatch] = useReducer(reducer, [])
  const [task, setTask] = useState('')

  function addTodo (e) {
    // e.preventDefault()
    if (!task) return
    dispatch({ type: 'ADD_TODO', payload: task })
    console.log(todos)
    setTask('')
  }


  return (
    <div>
      <Form
        onFinish={addTodo}
        layout='inline'
        form={form}
        initialValues={{
          layout: 'inline'
        }}
      >
        <Form.Item>
          <Input value={task} onChange={e => setTask(e.target.value)} />
        </Form.Item>
        <Form.Item>
          <Button type='primary'>افزودن</Button>
        </Form.Item>
      </Form>

<br/>
          <List todo={todos} />
    </div>
  )
}
