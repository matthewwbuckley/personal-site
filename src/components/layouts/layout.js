import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Navigation from '../navigation/navigation'
import { StaticQuery, graphql } from 'gatsby'

import './index.scss'

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
    }
    render={data => (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <link href="https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Noto+Serif:400,400i,700&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Slabo+27px" rel="stylesheet" />

        <div className="main">
          <Navigation />
          {children}
        </div>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
