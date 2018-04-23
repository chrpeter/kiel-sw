import React from 'react'
import Link from 'gatsby-link'
import BEMHelper from 'react-bem-helper'
import viewmodel from '../json'
import Speakers from '../components/Speakers';
import ButtonGroup from '../components/ButtonGroup'

const classes = new BEMHelper({
  name: 'content',
  prefix: 'c-',
})

const buttonClasses = new BEMHelper({
  name: 'button',
  prefix: 'c-',
})

const SpeakersPage = (props) => {
  console.log(props)
  const hash = props.location.hash;
  console.log("TALKS", viewmodel.talks)
  return (
    <div {...classes('', 'speakers')}>
      <h1>Talere</h1>
      <ButtonGroup>
        <Link {...buttonClasses('', 'white')} to="/">
          Forside
        </Link>
        <Link {...buttonClasses('', 'white')} to="/schedule/">
          Skjema
        </Link>
      </ButtonGroup>
      <div {...classes('container')}>
        {Object.keys(viewmodel.talks).map(key => <Speakers key={key} talk={viewmodel.talks[key]} talkKey={key}/>)}
      </div>

    </div>
  )
};

export default SpeakersPage
