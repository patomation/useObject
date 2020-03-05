import * as React from 'react'
import { mount } from 'enzyme'

import { MyComponent } from './index'

describe('<MyComponent />', () => {
  it('renders', () => {
    mount(<MyComponent />)
  })
})
