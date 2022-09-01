import { Form, Input, Button } from 'antd'
import React, { useState ,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo , setTask} from '../../redux/actions/todo'

export default function New () {
  
  const dispatch = useDispatch()

  const data = useSelector(state => state.data)

  
  useEffect(() => {
    localStorage.setItem(`#${data.id} task` , JSON.stringify(data.title) );
  }, [data]);

  return (
    <div>
      <Form
        onFinish={dispatch(addTodo)}
        layout='inline'
        initialValues={{
          layout: 'inline'
        }}
      >
        <Form.Item>
          <Input value={data} onChange={e => setTask(e.target.value)} />
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            افزودن
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
