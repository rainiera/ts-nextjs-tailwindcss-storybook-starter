import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Tag from '../components/Tag'

storiesOf('Tag', module).add('Just that one tag', () => (
  <Tag key={'0'} name="asdf" />
))

storiesOf('Tag', module).add('Pet tags', () => (
  <div>
    {['cat', 'dog', 'rat'].map(n => (
      <Tag key={n} name={n} />
    ))}
  </div>
))
