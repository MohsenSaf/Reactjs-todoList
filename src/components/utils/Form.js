import { Form, Button as AntButton, Input as AntInput } from 'antd'
import React from 'react'

export function Input (lable = 'فعالیت جدید') {
  return (
    <Form.Item label='فعالیت جدید'>
      <AntInput  />
    </Form.Item>
  )
}

export function Button (lable = 'htc,nk', type = 'primary', loading, onClick) {
  return (
    <Form.Item>
      <AntButton type='submit' >
        افزودن
      </AntButton>
    </Form.Item>
  )
}
