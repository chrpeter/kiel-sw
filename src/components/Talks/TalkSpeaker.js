import React from 'react'
import PropTypes from 'prop-types'
import Link, { withPrefix } from 'gatsby-link'
import { talksClasses } from './'
import Talk from './Talk'
import Person from '../Icons/Person'

class TalkSpeaker extends React.Component {
  constructor() {
    super();
    this.state = { imageError: false };
    this.onImageLoadError = this.onImageLoadError.bind(this);
  }

  onImageLoadError(){
    this.setState({imageError: true});
  }
  
  render() {
    const { speaker, numberOfSpeakers, talkId } = this.props;
    return (
      <div {...talksClasses('speaker')}>
        <span {...talksClasses('speaker-image')}>
          {speaker.pic ? (
            <img
              title={`Image of ${speaker.name}`}
              alt={`Image of ${speaker.name}`}
              src={withPrefix(`/static/pics/${speaker.pic}`)}
              onError={this.onImageLoadError}
            />
          ) : (
            <Person />
          )}
        </span>
        <Link {...talksClasses('speaker-name')} to={`/speakers#${talkId}`}>
          {numberOfSpeakers > 1 ? `${speaker.name} med flere` : speaker.name}
        </Link>
      </div>
    )
  }
}

TalkSpeaker.propTypes = {
  speaker: PropTypes.object.isRequired,
  numberOfSpeakers: PropTypes.number.isRequired,
  talkId: PropTypes.string.isRequired,
}

export default TalkSpeaker
