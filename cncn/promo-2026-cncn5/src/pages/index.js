import React, { useState, useEffect, useCallback } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'

import Header from '../components/Header'
import Footer from '../components/Footer'
import VideoModal from '../components/VideoModal'
import ogpImage from '../images/cncn5-ogp.jpg'

const DESCRIPTION =
  'カンサォン・ノーヴァ コーラスネクスト 5.0「溺れるほどに満たされて」2027年3月28日 (日) デザイン・クリエイティブセンター神戸 KIITOホール'

const IndexPage = ({ location }) => {
  const [loading, setLoading] = useState('is-loading')
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const closeVideo = useCallback(() => setIsVideoOpen(false), [])

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
          <Header onOpenVideo={() => setIsVideoOpen(true)} />
          <Footer />
          {isVideoOpen && <VideoModal onClose={closeVideo} />}
        </div>
        <div id="bg"></div>
      </div>
    </Layout>
  )
}

export const Head = () => {
  const { site } = useStaticQuery(graphql`
    query SiteMetadataQuery {
      site {
        siteMetadata {
          title
          siteUrl
        }
      }
    }
  `)
  const { title, siteUrl } = site.siteMetadata

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={DESCRIPTION} />
      <meta
        name="keywords"
        content="sample, something, cancaonova, カンサォンノーヴァ, カンサォン・ノーヴァ, cancaonovachor, 演奏会, chorus next, CNCN5.0, cncn5"
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:url" content={`${siteUrl}/`} />
      <meta property="og:image" content={`${siteUrl}${ogpImage}`} />
      <meta property="og:image:width" content="3996" />
      <meta property="og:image:height" content="2250" />
      <meta name="twitter:card" content="summary_large_image" />
    </>
  )
}

export default IndexPage
