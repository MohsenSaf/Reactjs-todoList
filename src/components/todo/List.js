import React, { useState } from 'react'
import { DeleteTwoTone, EditTwoTone } from '@ant-design/icons'
import {Typography } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, setTask } from '../../redux/actions/todo'

const {Text} = Typography 

export default function List () {
  const dispatch = useDispatch()

  const tasks = useSelector(state => state.tasks)
  
  useEffect(() => {
    const tasks = []

  }, [])

  return (
    <div>
      <ol>
        {tasks.map(task => (
        <li>
          {task.title}
          <Text editable={{ onChange : setTask}}>
            {task}
          </Text>

          <span
              onClick={() => {
                localStorage.removeItem(`#${task.id} task`)
                dispatch(removeTodo(task.id))
              }}
            style={{ margin: '10px', cursor: 'pointer' }}
          >
            <DeleteTwoTone />
          </span>
          </li>
          ))}
      </ol>
    </div>
  )
}
