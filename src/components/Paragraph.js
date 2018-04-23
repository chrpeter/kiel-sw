import React from 'react'
import PropTypes from 'prop-types'
import BEMHelper from 'react-bem-helper'

const classes = new BEMHelper({
  name: 'paragraph',
  prefix: 'c-',
})

const Paragraph = ({ cssModfier, children }) => (
  <p {...classes('', cssModfier)}>{children}</p>
)

Paragraph.propTypes = {
  cssModfier: PropTypes.string,
}

Paragraph.defaultProps = {
  cssModfier: '',
}

export default Paragraph
