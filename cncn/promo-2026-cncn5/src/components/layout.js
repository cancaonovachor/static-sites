import React from 'react'
import PropTypes from 'prop-types'

import '../assets/scss/main.scss'

const Layout = ({ children, location }) => {
  if (location && location.pathname === '/') {
    return <div>{children}</div>
  }

  return (
    <div id="wrapper" className="page">
      <div>{children}</div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
