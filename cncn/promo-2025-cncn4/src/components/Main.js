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
import odorimai from '../images/odorimai.jpg'
import ito from '../images/ito.jpg'
import keyvisual from '../images/keyvisual.png'
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
        {/* <p>
          <a
            className="use-border"
            href="https://twitter.com/honmachi169/"
            target="_blank"
          >
            <b>MC: 川田一輝</b>
          </a>
          <span className="image-main main">
            <img src={kawata} alt="" />
          </span>
        </p>
        <p>
          1990年大阪生まれ。地元Kiss FM
          KOBEのラジオDJ・声優・イベントMCなど幅広く活動。
          子ども達に魚の魅力を伝える「さかなのおにいさん」として書籍の執筆や、テレビ東京「シナぷしゅ」での音楽・アニメーションなども制作。メディア出演・クリエイターとしてもマルチに活動している。
        </p> */}
        <p>
          {/* <b>ピアニスト: 小鳥舞</b> */}
          {/* ピアニスト: 小鳥舞 */}
          {/* <span className="image-main main">
            <img src={odorimai} alt="" />
          </span> */}
        </p>
        {/* <p>
          武庫川女子大学音楽学部演奏学科卒業。兵庫教育大学大学院修了。
          武庫川女子大学新人演奏会をはじめ、リーガロイヤルホテルでのコンサート等、様々な演奏会に出演。また、神戸フィルハーモニック、ウクライナ・リヴィウ国際音楽祭にてLviv
          Virtuosos Academic Chamber Ochestraと共演。
          東京国際芸術協会より受講費全額助成を受け、ウィーン国立音楽大学マスタークラスを修了し、選抜者コンサートに出演。ディプロマを取得。
          現在、アンサンブルピアニストとして幅広く活動中。
          混声合唱フロイデ21、関西大学初等部合唱部常任ピアニスト。
          これまでに、奈良田朋子、木下千代の各氏に師事。
        </p> */}
        <br />

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
        {/* <br />
        <h3>基調講演</h3>

        <b>伊東恵司</b>
        <span className="image-main main">
          <img src={ito} alt="" />
        </span>
        <p>
          あらゆる形式・ジャンルの合唱指導を行い、宝塚国際室内合唱コンクール等でグランプリ、セギッツィ国際合唱コンクールでは総合2位とMauro
          Chiocci特別賞を受賞、世界合唱シンポジウムでは2度にわたり特別招待演奏団体に選出され、講師も務める。現在、全国各地で審査員や合唱指導を引き受けるほか「アルティ声楽アンサンブル」等の各種合唱フェスティバルの企画や主催を行っている。現在、日本合唱指揮者協会理事。カワイ出版より「合唱エクササイズ(育成編･運営編・日本語編)」他、ブレーン株式会社より「合唱のイントロダクション」を上梓。「みなづきみのり」のペンネームで作詞活動展開中。
        </p> */}
        
        <h3>合唱協賛</h3>

        {/* <a
          className="use-border"
          href="https://twitter.com/"
          target="_blank"
        >
          <b>After Times</b>
        </a> */}
        ・
        <a className="use-border" href="https://x.com/camphora_choir" target="_blank">
          合唱団Camphora
        </a>
        <br />・
        <a className="use-border" href="https://cestlavie200910.blogspot.com/" target="_blank">
          女声アンサンブルC'est La Vie
        </a>
        <br />・
        <a className="use-border" href="https://kuc.main.jp/" target="_blank">
          京大合唱団
        </a>
        <br />・
        <a className="use-border" href="https://x.com/chor_hanamizuki" target="_blank">
          混声合唱団「花みずき」
        </a>
        <br />
        {/* <span className="image-main main">
          <img src={tiamo} alt="" />
        </span> */}
        {/* <p>
          ここに文章を挿入
        </p> */}
        <br />
        <h3>飲食協賛</h3>
        <a className="use-border" href="https://ichiji.net/" target="_blank">
          <b>ICHIJI</b>
        </a>
        {/* <span className="image-main main">
          <img src={ichiji} alt="" />
        </span> */}
        <p>
          {/* <br />カカオ豆本来の味わいや香りをお届けしたい。
          <br />そんな思いからICHIJIは生まれました。
          <br />この思いをカタチにすると
          <br />チョコレートができるまでの全工程を自社工房で管理し製造する
          <br />”Bean to Bar Chocolate”になりました。
          <br />
          <br />豆の仕入れから選別、焙煎、摩砕、調合、成形まで
          <br />心をこめて手作業でやらせていただいています。
          <br />
          <br />きっと、チョコレートの概念が変わる
          <br />”Bean to Bar Chocolate”をお楽しみください。
          <br />
          <br />
          皆さんの生活に寄り添うように楽しめて、誰かと食べると会話が生まれる。そんな世界を目指しています。
          <br />
          <br /> */}
          <a
            className="use-border"
            href="https://www.instagram.com/kwkmcoffee/"
            target="_blank"
          >
            <b>川上珈琲</b>
          </a>
          {/* <span className="image-main main">
            <img src={yuge} alt="" />
          </span>
          <br />2013年、兵庫県西宮市の官公庁が多いエリアで創業。
          <br />自家焙煎のスペシャルティコーヒー専門店
          <br />
          <br />イタリア製の完全熱風式焙煎機を使用
          <br />毎朝、珈琲豆を丁寧に焙煎しています
          <br />
          <br />『心に響くコーヒー』
          <br />
          <br />を目指して、日々丁寧に
          <br />取り組んでいます。
          <br />
          <br /> */}
        </p>
        <br />

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
          {' '}
          演奏予定曲：
          <br />・君が代
          <br />・上を向いて歩こう (編曲 北村協一)     
          <br />・中国地方の子守歌 (編曲 三善晃)
          <br />・夕焼小焼 (編曲 三善晃)
          <br />・Furusato (編曲 Philip Lawson)
          <br />・マツリマツル (鈴木憲夫)
          <br />・もちつき (三木稔)
          <br />・天の川 (藤嶋美穂)
        </p>
        {/* <p>
          <a
            className="use-border"
            href="https://twitter.com/honmachi169/"
            target="_blank"
          >
            <b>ストーリーテラー: 川田一輝</b>
          </a>
          <span className="image-main main">
            <img src={kawata} alt="" />
          </span>
        </p> */}
        
        <p>
          {/* <b>ピアニスト: 小鳥舞</b> */}
          ピアニスト: 小鳥舞
          {/* <span className="image-main main">
            <img src={odorimai} alt="" />
          </span> */}
        </p>
        {/* <p>
          武庫川女子大学音楽学部演奏学科卒業。兵庫教育大学大学院修了。
          武庫川女子大学新人演奏会をはじめ、リーガロイヤルホテルでのコンサート等、様々な演奏会に出演。また、神戸フィルハーモニック、ウクライナ・リヴィウ国際音楽祭にてLviv
          Virtuosos Academic Chamber Ochestraと共演。
          東京国際芸術協会より受講費全額助成を受け、ウィーン国立音楽大学マスタークラスを修了し、選抜者コンサートに出演。ディプロマを取得。
          現在、アンサンブルピアニストとして幅広く活動中。
          混声合唱フロイデ21、関西大学初等部合唱部常任ピアニスト。
          これまでに、奈良田朋子、木下千代の各氏に師事。
        </p> */}

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
            <img src={keyvisual} alt="" />
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
        {/* <br /> */}
        {/* <h3>配信チケット (ZAIKO)</h3>
        <span className="image-main main">
          <a
            className="use-border"
            href="https://cancaonova.zaiko.io/e/cancaonova3"
            target="_blank"
          >
            <img src={haishin} alt="" />
          </a>
        </span>
        <p>
          配信チケットは
          <a
            className="use-border"
            href="https://cancaonova.zaiko.io/e/cancaonova3"
            target="_blank"
          >
            こちら
          </a>
          <br />
          遠方にお住まいの方や当日現地にお越し頂けない方も、こちらよりライブ配信を視聴いただけます。
        </p> */}
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
