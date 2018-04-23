import React from 'react'
import PropTypes from 'prop-types'
import { slotClasses } from './'

const OtherSlot = ({ collection }) => {
  return (
    <div {...slotClasses('', 'white-background')}>
      <span {...slotClasses('time')}>{collection.time}</span>
      <div {...slotClasses('title')}>
        <span>{collection.title}</span>
      </div>
    </div>
  )
}

OtherSlot.propTypes = {
  collection: PropTypes.array,
}

export default OtherSlot
