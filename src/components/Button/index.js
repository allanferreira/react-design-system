import React from 'react'
import PropTypes from 'prop-types'
import * as S from './style'

const Button = ({ text = '' }) => (
    <S.Button>
        {text}
    </S.Button>
)

Button.propTypes = {
    text: PropTypes.string
}

export default Button
