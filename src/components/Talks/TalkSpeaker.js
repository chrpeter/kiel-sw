import React from 'react'
import PropTypes from 'prop-types'
import Link, { withPrefix  } from 'gatsby-link'
import { talksClasses } from './'
import Talk from './Talk'
import Person from '../Icons/Person';

const TalkSpeaker = ({ speaker, numberOfSpeakers, talkId, }) => {
  return (
    <div {...talksClasses('speaker')}>

      <span {...talksClasses('speaker-image')}>{speaker.pic ? <img src={withPrefix(`/static/pics/${speaker.pic}`)} /> : <Person /> }</span>
      <Link {...talksClasses('speaker-name')} to={`/speakers#${talkId}`}>
        {numberOfSpeakers > 1 ? `${speaker.name} med flere` : speaker.name}
      </Link>
    </div>
  )
}

TalkSpeaker.propTypes = {
  speaker: PropTypes.object.isRequired,
  numberOfSpeakers: PropTypes.number.isRequired,
  talkId: PropTypes.string.isRequired,
}

export default TalkSpeaker
