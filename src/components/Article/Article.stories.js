import React from 'react'
import { storiesOf } from '@storybook/react'
import Article from './Article'

storiesOf('Article', module).add('Article', () => (
  <Article
    title='Introduction to Programming'
    meta='by @theajr - 05th November, 2020'
  />
))
