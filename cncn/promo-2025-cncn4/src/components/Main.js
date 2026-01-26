import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react';
import secoundSession from '../images/2.0-2nd.jpg'
import zentai from '../images/nova-zentai.jpg'
import ichiji from '../images/ichiji.jpg'
import yuge from '../images/yuge.jpg'
import shachiko from '../images/shachiko.jpg'
import tiamo from '../images/tiamo.jpg'
import haishin from '../images/cncn1.0-haishin.jpg'
import nyujo from '../images/panhu.webp'
import kinun from '../images/kinun.jpg'
import hanamizuki from '../images/hanamizuki.jpg'
import manderart from '../images/manderart.jpg'
import volare from '../images/volare.jpeg'
import kiito_senzai from '../images/cncn2-3rd.jpg'
import access from '../images/access.jpg'
import kawata from '../images/kawata.png'
import satotaku from '../images/佐藤拓.jpg'
import odorimai from '../images/小鳥舞.jpg'
import ito from '../images/ito.jpg'
import flyer from '../images/flyer.png'
import kyodaiChorus from '../images/京大合唱団.png'
import camphoraChorus from '../images/合唱団Camphora.png'
import cestLaVieChorus from "../images/女声アンサンブルC'est La Vie.png"
import hanamizukiChorus from '../images/混声合唱団「花みずき」.png'
import { useMediaQuery } from 'react-responsive'


const useSp = () => {
  return useMediaQuery({ maxWidth: 500 }, {noSsr: true})
}

const Main = (props) => {
  let close = (
    <div
      className="close"
      onClick={() => {
        props.onCloseArticle()
      }}
    ></div>
  )
  // const isSp = useSp()
  const [isSp, setIsSp] = useState(false);
  const [activeSessionTab, setActiveSessionTab] = useState('1st');

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
    <div
      ref={props.setWrapperRef}
      id="main"
      style={props.timeout ? { display: 'flex' } : { display: 'none' }}
    >
      <article
        id="concept"
        className={`${props.article === 'concept' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">CONCEPT</h2>
        <div class="youtube">
          <iframe
            width="560"
            height="350"
            src="https://www.youtube.com/embed/XNWAqTNFFLc?si=pGVo7jmn87dS9wix"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <p>
          合唱団{' '}
          <a className="use-border" href="https://cancaonovachor.com/">
            CancaoNova
          </a>
          {' '}
          4回目の定期演奏会
        </p>
        <p>
          私たちが選んだ珠玉の名曲と培ってきたテクノロジーの力を活用し、合唱の今と未来を描き出します。
        </p>
        <p>
          ステージ情報は{' '}
          <a
            className="use-border"
            href="javascript:;"
            onClick={async () => {
              await props.onCloseArticle()
              props.onOpenArticle('stage')
            }}
          >
            こちら
          </a>{' '}
          から
        </p>
        {close}
      </article>

      <article
        id="stage"
        className={`${props.article === 'stage' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">Stage</h2>

        <div className="session-tabs">
          <button
            className={`session-tab ${activeSessionTab === '1st' ? 'active' : ''}`}
            onClick={() => setActiveSessionTab('1st')}
          >
            1st Session
          </button>
          <button
            className={`session-tab ${activeSessionTab === '2nd' ? 'active' : ''}`}
            onClick={() => setActiveSessionTab('2nd')}
          >
            2nd Session
          </button>
          <button
            className={`session-tab ${activeSessionTab === '3rd' ? 'active' : ''}`}
            onClick={() => setActiveSessionTab('3rd')}
          >
            3rd Session
          </button>
        </div>

        {activeSessionTab === '1st' && (
          <div className="session-content">
            <span className="image-main main">
              <img src={zentai} alt="" />
            </span>
            <h3>1st Session</h3>
            <p>
              今年度のコンクール・演奏会で演奏した曲を中心に、詳細な解説を交えてお届けします。
            </p>
            <p>
              入場料￥2500 前売り￥2000
              <br />※前売り価格は2/15 23:59までです。
              <br />※学生の方は全期間を通して各料金から500円引きです。
            </p>
            <p>時間：13:00〜</p>
            <p>
              演奏予定曲：
              <br />・彼岸花 (多田 武彦)
              <br />・薔薇よ (三善 晃)
              <br />・Fleur de quinze ans (Orlande de Lassus)
              <br />・Hymne au printemps (Camille Saint-Saëns)
              <br />・Nonsense Madrigalsより (Ligeti György)
              <br />　・The Alphabet
              <br />　・The Lobster Quadriile
              <br />・Mass for 3 Voices（William Byrd）
            </p>
          </div>
        )}

        {activeSessionTab === '2nd' && (
          <div className="session-content">
            <span className="image-main main">
              <img src={secoundSession} alt="" />
            </span>
            <h3>2nd Session</h3>
            <p>
              全国的な活動を通じて知り合ってきた様々なゲストとともに、今年も「今ここにある合唱」を描き出し、皆さんとともに考えます。<br />
              地元の美味しいコーヒーとチョコレートを堪能しつつ、特別ゲストとの座談会、全国各地の合唱団の演奏、パネルディスカッションなど多様な企画をお楽しみください。
            </p>
            <p>
              料金：無料（どなたでもご来場いただけます)
              <br />時間： 14:00〜
            </p>

            <br />

            <h3>基調講演</h3>

            <b>佐藤 拓</b>
            <p>
              早稲田大学第一文学部卒業後イタリアに渡り声楽を学ぶ。歌手、合唱指揮者として活動しながら、日本や世界の民謡・民俗歌唱の実践と研究に取り組んでいる。近年はボイストレーナーとして自身の考案した「十種発声」を用いた発声指導を行っている。常民一座ビッキンダーズ座長。合唱衆RAZMONEA主宰・指揮者、東京稲門グリークラブ、合唱団ガイスマ指揮者。
            </p>

            <span className="image-main main">
              <img src={satotaku} alt="佐藤拓" />
            </span>

            <br /><br />

            <h3>合唱協賛</h3>

            <a className="use-border" href="https://kuc.main.jp/" target="_blank">
              <b>京大合唱団</b>
            </a>
            <span className="image-main main">
              <img src={kyodaiChorus} alt="京大合唱団" />
            </span>
            <p>
              昭和6年創設の学生合唱団。近年はコロナ禍での団員減少で混声のみの活動となっていましたが、2025年度より伝統的な男女混の体制を復活させました。例年、春の発表会やサマーコンサート、冬の定期演奏会を開催し、様々なジャンルの曲に取り組んでいます。
            </p>
            <br />

            <a className="use-border" href="https://x.com/chor_hanamizuki" target="_blank">
              <b>混声合唱団「花みずき」</b>
            </a>
            <span className="image-main main">
              <img src={hanamizukiChorus} alt="混声合唱団「花みずき」" />
            </span>
            <p>
              尼崎市立立花中学校合唱部の卒業生により2006年に結成。現在は、兵庫県だけでなく全国からメンバーが集い、酒井輝美の音楽観のもと、日々「花みずき」らしい音楽表現を追求している。第4回東京国際合唱コンクール室内部門にて1位金賞および最優秀課題曲賞を受賞し、グランプリコンクールに出場。
            </p>

            <br />

            <a className="use-border" href="https://cestlavie200910.blogspot.com/" target="_blank">
              <b>女声アンサンブルC'est La Vie</b>
            </a>
            <span className="image-main main">
              <img src={cestLaVieChorus} alt="女声アンサンブルC'est La Vie" />
            </span>
            <p>
              CNCN4.0へのお招きありがとうございます。私達は2009年に結成。山口英樹先生を指揮者にお迎えし17年目を迎えます。メンバーはほぼシニア世代になりましたが、クリアなサウンドを求めて日々奮闘しています。春の風に乗って爽やかな演奏ができますように頑張りたいと思います。どうぞよろしくお願いします。
            </p>
            <br />

            <a className="use-border" href="https://x.com/camphora_choir" target="_blank">
              <b>合唱団Camphora</b>
            </a>
            <span className="image-main main">
              <img src={camphoraChorus} alt="合唱団Camphora" />
            </span>
            <p>
              合唱団Camphora(カンフォーラ)です！20代を中心に幅広いメンバーで、林香世先生ご指導のもと活動しています。2025年は多くの演奏機会に恵まれ、団の成長を感じられる一年となりました。2026年も「集いて歌う」喜びを胸に、伸びやかに歌います！
            </p>

            <br />

            <h3>飲食協賛</h3>
            <a className="use-border" href="https://ichiji.net/" target="_blank">
              <b>ICHIJI</b>
            </a>
            {' / '}
            <a
              className="use-border"
              href="https://www.instagram.com/kwkmcoffee/"
              target="_blank"
            >
              <b>川上珈琲</b>
            </a>
            <br /><br />
          </div>
        )}

        {activeSessionTab === '3rd' && (
          <div className="session-content">
            <span className="image-main main">
              <img src={kiito_senzai} alt="" />
            </span>
            <h3>3rd Session</h3>
            <p>
              「やがて朽ちゆく、永遠」<br />
              培ってきたデジタルアート技術を最大限活用し、新たな合唱の地平を切り開きます。
            </p>
            <p>
              入場料￥2500 前売り￥2000
              <br />※前売りは2/15 23:59までです。
              <br />※3rd Sessionには学生割引は存在しません、ご承知おきください。
            </p>
            <p>時間： 15:30〜</p>
            <p>
              演奏予定曲：
              <br />・君が代（編曲 三宅純）
              <br />・君が代（編曲 上野哲生）
              <br />・上を向いて歩こう (編曲 北村協一)
              <br />・Furusato (編曲 Philip Lawson)
              <br />・夕焼小焼 (編曲 三善晃)
              <br />・もちつき (三木稔)
              <br />・中国地方の子守歌 (編曲 三善晃)
              <br />・天の川 (藤嶋美穂)
              <br />・マツリ マツル (鈴木憲夫)
            </p>
            <h3>ピアニスト: 小鳥舞</h3>
            <span className="image-main main">
              <img src={odorimai} alt="" />
            </span>
            <p>
              武庫川女子大学音楽学部演奏学科卒業。兵庫教育大学大学院修了。ピアノを奈良田朋子、木下千代の各氏に師事。武庫川女子大学新人演奏会をはじめ、様々な演奏会に出演。また、神戸フィルハーモニック、ウクライナ・リヴィウ国際音楽祭にてLviv Virtuosos Academic Chamber Ochestraと共演。東京国際芸術協会より受講費全額助成を受け、ウィーン国立音楽大学マスタークラスを修了し、教授選抜によるコンサートに出演。ディプロマを取得。現在、アンサンブルピアニストとして幅広く活動中。歌手・半﨑美子のシングル『地球へ』にピアニスト参加。混声合唱フロイデ21、関西大学初等部合唱部常任ピアニスト。
            </p>
          </div>
        )}

        {close}
      </article>

      <article
        id="access"
        className={`${props.article === 'access' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">Access</h2>
        <span className="image-main main">
          <img src={access} alt="" />
        </span>
        {close}
      </article>

      <article
        id="ticket"
        className={`${props.article === 'ticket' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">Ticket</h2>
        <h3>入場チケット (PassMarket)</h3>
        <span className="image-main main">
          <a
            href="https://passmarket.yahoo.co.jp/event/show/detail/02s2vd2istr41.html"
            target="_blank"
          >
            <img src={flyer} alt="" />
          </a>
        </span>
        <p>
          演奏会への入場チケットは
          <a
            className="use-border"
            href="https://passmarket.yahoo.co.jp/event/show/detail/02s2vd2istr41.html"
            target="_blank"
          >
            こちら
          </a>
          <br />
          私たちが選んだ珠玉の名曲と培ってきたテクノロジーの力を活用し、合唱の今と未来を描き出します。是非とも現場にてお聞き下さい。
        </p>
        <br />
        <h3>配信チケット (ZAIKO)</h3>
        <span className="image-main main">
          <a
            className="use-border"
            href="https://cancaonova.zaiko.io/item/377471"
            target="_blank"
          >
            <img src={haishin} alt="" />
          </a>
        </span>
        <p>
          配信チケットは
          <a
            className="use-border"
            href="https://cancaonova.zaiko.io/item/377471"
            target="_blank"
          >
            こちら
          </a>
          <br />
          遠方にお住まいの方や当日現地にお越し頂けない方も、こちらよりライブ配信を視聴いただけます。
        </p>
        {close}
      </article>

      <article
        id="session-docs"
        className={`${props.article === 'session-docs' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">Session Docs</h2>
        <h3>楽曲曲説＆パンフレット</h3>
        {isSp ? (
          <iframe
            src="https://docs.google.com/presentation/d/e/2PACX-1vQRL034dMBOwWORF3CcUzGPN2Is62FXlp_66g6MEkKMbkjksjL-O5nKOHcVXwARmE1QZYRoY2Uhxfa-/embed?start=false&loop=false&delayms=3000"
            frameborder="0"
            width="100%"
            height="270"
            allowfullscreen="true"
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
          ></iframe>
        ) : (
          <iframe
            src="https://docs.google.com/presentation/d/e/2PACX-1vQRL034dMBOwWORF3CcUzGPN2Is62FXlp_66g6MEkKMbkjksjL-O5nKOHcVXwARmE1QZYRoY2Uhxfa-/embed?start=false&loop=false&delayms=3000"
            frameborder="0"
            width="100%"
            height="565"
            allowfullscreen="true"
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
          ></iframe>
        )}
        <p>CNCN 3.0 の楽曲解説及びパンフレットです。<br />
        元のファイルは
        <a className="use-border" href="https://docs.google.com/presentation/d/1FsZ3mZY7DL0sFOVaTbgWGWxnaYeJT2wPwp1DjHJywH8/edit?usp=sharing">
          こちら
        </a>
        </p>
        <br />
        {close}
      </article>

    </div>
  )
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
