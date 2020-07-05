import React from 'react'

import { Button } from 'react-uikit'
import 'react-uikit/dist/index.css'

const App = () => {
  return (
    <div>
      <Button>Hi</Button>
      <Button type='danger'>Hi</Button>
      <Button type='text'>Hi</Button>
      <Button fullWidth size='small' type='primary'>
        Login
      </Button>
    </div>
  )
}

export default App
