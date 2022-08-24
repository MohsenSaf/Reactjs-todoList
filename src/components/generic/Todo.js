import { useState } from 'react'
import Form, {Input, Button } from '../utils/Form'

export default function Todo () {
  const [loading, setLoading] = useState(false)

  return (
    <div>
      <Form>
        <Input lable='افزودن' />
        <Button loading={loading}>افزودن</Button>
      </Form>

    </div>
  )
}
