import { Button as AntButton, Form as AntForm, Input as AntInput } from 'antd'
import React from 'react'

export default  function Form (layout = 'inline') {
  const [form] = AntForm.useForm()
  return (
    <AntForm
      layout={layout}
      form={form}
      initialValues={{
        layout:layout
      }}
    ></AntForm>
  )
}

export function Input (lable) {
  return (
    <AntForm.Item label={lable}>
      <AntInput />
    </AntForm.Item>
  )
}

export function Button (buttonLable, type = 'primary', loading, onClick) {
  return (
    <AntForm.Item>
      <AntButton type={type} onClick={onClick} loading={loading}>
        {buttonLable}
      </AntButton>
    </AntForm.Item>
  )
}
