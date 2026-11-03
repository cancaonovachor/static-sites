import React, { useState, useEffect } from 'react'
import Countdown from './util/Countdown'

const TICKET_SALE_DATE = new Date('2026-12-01T00:00:00+09:00')

const Header = () => {
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
    <header id="header">
      <div className="content">
        <div className="inner">
          <h1>
            カンサォン・ノーヴァ {isMobile && <br />}コーラスネクスト 5.0
          </h1>
          <h3>Coming Soon</h3>
          <h2>日程は近日公開</h2>
          <h2>
            デザイン・クリエイティブセンター神戸 {isMobile && <br />}KIITOホール
          </h2>
          <div style={{ height: '1rem' }}></div>
          <h1>チケット販売まで</h1>
          <h1>
            <Countdown targetDate={TICKET_SALE_DATE} />
          </h1>
        </div>
      </div>
    </header>
  )
}

export default Header
