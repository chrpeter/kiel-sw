import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import BEMHelper from 'react-bem-helper'

import Header from '../components/Header'
import './index.css'
import viewmodel from '../json';

export const classes = new BEMHelper({
  name: 'content',
  prefix: 'c-',
})

const TemplateWrapper = ({ children }) => {
  return (
    <div>
      <Helmet
        title="Knowit Objectnet Fagseminar 2018"
        meta={[
          { name: 'description', content: 'Knowit Objectnet arrangerer to fagseminarer årlig. Det er de ansatte selv som lager programmet. Våren 2018 vil den bli avholdt 27. april - 29. april 2018 i Kiel, Tyskland.' },
          { name: 'keywords', content: 'Fagseminar, Kiel, Fag' },
        ]}
      >
        <link
          href="https://fonts.googleapis.com/css?family=Raleway"
          rel="stylesheet"
        />
      </Helmet>
      {children()}
      <div className="google-maps-wrapper">
        <div className="google-maps-blocker" />
          <div className="google-maps-content">
            <h1>Lokasjon</h1>
            <h3>Colorline Oslo-Kiel</h3>
            <h3>Kiel</h3>
          </div>
        <iframe
          className="google-maps"
          src={viewmodel.event.gmapsUrl}
          frameborder='0'
         />
        </div>
    </div>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
