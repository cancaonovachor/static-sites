import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import pic02 from '../images/shirotokamojinashi.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import Countdown from './util/Countdown'

const Header = (props) => {
  const target = new Date('2025-12-01T00:00:00')
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 736)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  return (
    <header id="header" style={props.timeout ? { display: 'none' } : {}}>
      <div className="logo">
      <a href="https://cancaonovachor.com/">
        <img src={pic02} alt="" />
      </a>
    </div>
      <div className="content">
        <div className="inner">
          <h1>
            カンサォン・ノーヴァ {isMobile && <br />}コーラスネクスト 4.0
          </h1>
          <h3>やがて朽ちゆく、永遠</h3>
          {/* <h2>
          <a
            target="_blank"
            className="use-border"
            href="https://docs.google.com/forms/d/e/1FAIpQLSc06sj-4uyOPnM_-bfl0K6bg2dPrcg496mHolNdXvet_C-4-A/viewform"
          >
            音源 / 動画予約受付中
          </a>
        </h2> */}
          <h2>2026年3月15日 (日) </h2>
          <p>1st Session 13:00-14:00</p>
        <p>2nd Session 14:00-15:30</p>
        <p>3rd Session 15:30-16:30</p>
          <h2>
            デザイン・クリエイティブセンター神戸 {isMobile && <br />}KIITOホール
          </h2>
          {/* <div style={{ height: '1rem' }}></div>
          <h1>チケット販売まで</h1>
          <h1>
            <Countdown targetDate={target} />
          </h1> */}
        </div>
      </div>
      <nav>
      <ul>
        <li>
          <a
            className="use-border"
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('concept')
            }}
          >
            CONCEPT
          </a>
        </li>
        <li>
          <a
            className="use-border"
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('stage')
            }}
          >
            Stage
          </a>
        </li>
        <li>
          <a
            className="use-border"
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('access')
            }}
          >
            Access
          </a>
        </li>
        <li>
          <a
            className="use-border"
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('ticket')
            }}
            // href="https://passmarket.yahoo.co.jp/event/show/detail/02s2vd2istr41.html"
            // target="_blank"
          >
            Ticket
            {/* Ticket <FontAwesomeIcon icon={faExternalLinkAlt} />  */}
          </a>
        </li>
      </ul>
    </nav>
    </header>
  )
}

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header