import React from 'react'
import PropTypes from 'prop-types'
import { talksClasses } from './'
import Talk from './Talk'

const Talks = ({ collectionTitle, entry }) => {
  return (
    <div {...talksClasses('container')}>
      <span {...talksClasses('type')}>{collectionTitle}</span>
      <span {...talksClasses('room')}>{entry.room}</span>
      {entry.slots.map(talkId => <Talk talkId={talkId} />)}
    </div>
  )
}

Talks.propTypes = {
  collectionTitle: PropTypes.string.isRequired,
  entry: PropTypes.object,
}

export default Talks
