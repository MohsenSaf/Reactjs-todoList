import { Button as AntButton, Form, Input as AntInput } from 'antd'
import React from 'react'

export default function From (layout = 'inline') {
  return (
    <Form
      layout={layout}
      initialValues={{
        layout: layout
      }}
    ></Form>
  )
}

export function Input (lable) {
  return (
    <Form.Item label={lable}>
      <AntInput />
    </Form.Item>
  )
}

export function Button (buttonLable, type = 'primary', loading, onClick) {
  return (
    <Form.Item>
      <AntButton type={type} onClick={onClick} loading={loading}>
        {buttonLable}
      </AntButton>
    </Form.Item>
  )
}
