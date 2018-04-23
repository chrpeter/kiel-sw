import React from 'react'
import PropTypes from 'prop-types'
import { slotClasses } from './'

const BreakSlot = ({ collection }) => {
  return (
    <div {...slotClasses('', 'gray-background')}>
      <span {...slotClasses('time')}>{collection.time}</span>
      <div {...slotClasses('title')}>
        <span>{collection.title}</span>
      </div>
    </div>
  )
}

BreakSlot.propTypes = {
  collection: PropTypes.array,
}

export default BreakSlot
