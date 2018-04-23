import React from 'react'
import PropTypes from 'prop-types'
import BEMHelper from 'react-bem-helper'

const classes = new BEMHelper({
  name: 'button-group',
  prefix: 'c-',
})

const ButtonGroup = ({ cssModfier, children }) => (
  <div {...classes('', cssModfier)}>{children}</div>
)

ButtonGroup.propTypes = {
  cssModfier: PropTypes.string,
}

ButtonGroup.defaultProps = {
  cssModfier: '',
}

export default ButtonGroup
