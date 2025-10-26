import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import pic02 from '../images/shirotokamojinashi.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import Countdown from './util/Countdown'



const Header = (props) => {
  const [isSp, setIsSp] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsSp(window.innerWidth <= 500);
    };

    // コンポーネントマウント時に一度検出を実行
    handleResize();

    // ウィンドウのリサイズイベントに応じて検出を実行
    window.addEventListener('resize', handleResize);

    // コンポーネントアンマウント時にイベントリスナーをクリーンアップ
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <header id="header" style={props.timeout ? { display: 'none' } : {}}>
      <div className="logo">
      <a href="https://cancaonovachor.com/">
        <img src={pic02} alt="" />
      </a>
    </div>
      <div className="content">
        <div className="inner">
          {
            isSp ? (
              <h1>カンサォン・ノーヴァ{<br/>}コーラスネクスト{<br/>}3.0</h1>
            ) : (
              <h1>カンサォン・ノーヴァ コーラスネクスト 3.0</h1>
            )
          }
          <h3>「怖くて美しい」-陰翳礼賛-</h3>
          {/* <h2>
          <a
            target="_blank"
            className="use-border"
            href="https://docs.google.com/forms/d/e/1FAIpQLSc06sj-4uyOPnM_-bfl0K6bg2dPrcg496mHolNdXvet_C-4-A/viewform"
          >
            音源 / 動画予約受付中
          </a>
        </h2> */}
          <h2>2025年3月9日 (日) </h2>
          <p>1st Session 13:00-14:00</p>
          <p>2nd Session 14:00-15:30</p>
          <p>3rd Session 15:30-16:30</p>
        {
            isSp ? (
              <h2>神戸ファッション美術館{<br/>}オルビスホール</h2>
            ) : (
              <h2>神戸ファッション美術館 オルビスホール</h2>
            )
          }
          
          <h1>
            <a
              className="use-border"
              href="javascript:;"
              onClick={() => {
                props.onOpenArticle('session-docs')
              }}
            >
              Session Docs
            </a>
          </h1>
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
              // href="javascript:;"
              // onClick={() => {
              //   props.onOpenArticle('access')
              // }}
              href="https://www.fashionmuseum.jp/info/access.html"
              target="_blank"
            >
              Access <FontAwesomeIcon icon={faExternalLinkAlt} /> 
            </a>
          </li>
          <li>
            <a
              className="use-border"
              href="javascript:;"
              onClick={() => {
                props.onOpenArticle('ticket')
              }}
              // href="https://passmarket.yahoo.co.jp/event/show/detail/02xa3q79et141.html"
              // target="_blank"
            >
              {/* Ticket */}
              Ticket
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