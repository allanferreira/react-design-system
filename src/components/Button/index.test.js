import React from 'react'
import { shallow } from 'enzyme'
import Button from './index'

describe('component Button', () => {
    it('deve renderizar', () => {
        const wrapper = shallow(<Button/>)
        expect(wrapper.exists()).toBeTruthy()
    })
})
