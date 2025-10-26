import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <p className="copyright">&copy; CancaoNova Chorus Next 4.0</p>
  </footer>
)

Footer.propTypes = {
  timeout: PropTypes.bool,
}

export default Footer
