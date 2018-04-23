import React from 'react'
import PropTypes from 'prop-types'
import Link, { withPrefix } from 'gatsby-link'
import { speakersClass } from './'
import Person from '../Icons/Person'

class Speaker extends React.Component {
  constructor() {
    super();
    this.state = { imageError: false };
    this.onImageLoadError = this.onImageLoadError.bind(this);
  }

  onImageLoadError(){
    this.setState({imageError: true});
  }

  render() {
    const { speaker } = this.props;
    return (
      <div {...speakersClass('speaker')}>
        <span key="speaker-img" {...speakersClass('speaker-image')}>
          {speaker.pic && !this.state.imageError ? (
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
        <h3 key="speaker-name">{speaker.name}</h3>
        <p key="speaker-bio">{speaker.bio}</p>
      </div>
    )
  }
}

Speaker.propTypes = {
  speaker: PropTypes.shape({
    img: PropTypes.string,
    name: PropTypes.string.isRequired,
    bio: PropTypes.string,
  }),
}

const Speakers = ({ talk: { speakers, title }, talkKey }) => {
  return (
    <div id={talkKey} {...speakersClass()}>
      <h2 {...speakersClass('talk-title')}>{title}</h2>
      <div {...speakersClass('container')}>
        {speakers.map(speaker => <Speaker speaker={speaker} />)}
      </div>
    </div>
  )
}

Speakers.propTypes = {
  talk: PropTypes.shape({
    title: PropTypes.string.isRequired,
    speakers: PropTypes.arrayOf(
      PropTypes.shape({
        img: PropTypes.string,
        name: PropTypes.string.isRequired,
        bio: PropTypes.string,
      })
    ),
  }).isRequired,
  talkKey: PropTypes.string.isRequired,
}

export default Speakers
