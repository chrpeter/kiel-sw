import React from 'react'
import BEMHelper from 'react-bem-helper'
import Link from 'gatsby-link'
import SadFace from '../components/Icons/SadFace'
import ButtonGroup from '../components/ButtonGroup'

const classes = new BEMHelper({
  name: 'content',
  prefix: 'c-',
})

const buttonClasses = new BEMHelper({
  name: 'button',
  prefix: 'c-',
})

const NotFoundPage = () => (
  <div {...classes('', 'not-found')}>
    <div {...classes('container')}>
      <SadFace />
      <p>Denne siden finnes ikke</p>
      <h2>Men har du prøvd en av disse?</h2>
      <ButtonGroup>
        <Link {...buttonClasses('', 'white')} to="/">
          Forside
        </Link>
        <Link {...buttonClasses('', 'white')} to="/speakers/">
          Talere
        </Link>
        <Link {...buttonClasses('', 'white')} to="/schedule/">
          Program
        </Link>
      </ButtonGroup>
    </div>
  </div>
)

export default NotFoundPage
