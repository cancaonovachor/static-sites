import React, { useState, useEffect } from 'react'
import Layout from '../components/layout'

import Header from '../components/Header'
import Footer from '../components/Footer'

const IndexPage = ({ location }) => {
  const [loading, setLoading] = useState('is-loading')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading('')
    }, 100)

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <Layout location={location}>
      <div className={`body ${loading}`}>
        <div id="wrapper">
          <Header />
          <Footer />
        </div>
        <div id="bg"></div>
      </div>
    </Layout>
  )
}

export default IndexPage
