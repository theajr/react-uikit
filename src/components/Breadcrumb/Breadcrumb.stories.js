import React from 'react'
import { storiesOf } from '@storybook/react'
import Breadcrumb from './Breadcrumb'

storiesOf('Breadcrumb', module).add('Breadcrumb', () => (
  <Breadcrumb>
    <Breadcrumb.Item href='/birth'>Birth</Breadcrumb.Item>
    <Breadcrumb.Item href='/live'>Live</Breadcrumb.Item>
    <Breadcrumb.Item>Death</Breadcrumb.Item>
  </Breadcrumb>
))
