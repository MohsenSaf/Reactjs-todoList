import React, { Component } from 'react'
import { DeleteTwoTone, EditTwoTone } from '@ant-design/icons'
import { connect } from 'react-redux'
import { removeTodo } from '../../redux/actions/todo'

export default function List () {
  return (
    <div>
      <ol>
          <li >
            {/* {this.props} */}
            <span
              // onClick={() => removeTodo(this.props.id)}
              style={{ margin: '10px', cursor: 'pointer' }}
            >
              <DeleteTwoTone />
            </span>
            <span style={{ margin: '10px', cursor: 'pointer' }}>
              <EditTwoTone />
            </span>
          </li>
        </ol>
    </div>
  )
}
