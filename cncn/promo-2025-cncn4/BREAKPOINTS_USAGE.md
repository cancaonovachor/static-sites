# Responsive Breakpoints 使用ガイド（React/JavaScript版）

## 概要

このプロジェクトでは、React/JavaScriptを使用してresponsive対応を実装します。SCSSではなく、コンポーネント内で画面幅を判定して表示を制御します。

## Breakpoint定義

以下の値を基準として使用します（既存skelシステムと互換）：

```js
const BREAKPOINTS = {
  xxsmall: 360,   // 超小型デバイス
  xsmall:  480,   // 小型スマートフォン
  small:   736,   // 大型スマートフォン
  medium:  980,   // タブレット
  large:   1280,  // デスクトップ
  xlarge:  1680   // 大型デスクトップ
}
```

## 基本的な使い方

### 1. useStateとuseEffectで画面幅を監視

```jsx
import React, { useState, useEffect } from 'react'

const MyComponent = () => {
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
    <div>
      {isMobile ? (
        <p>モバイル表示</p>
      ) : (
        <p>デスクトップ表示</p>
      )}
    </div>
  )
}
```

### 2. 条件付きレンダリングで改行を制御

```jsx
<h1>
  カンサォン・ノーヴァ {isMobile && <br />}コーラスネクスト 4.0
</h1>
```

### 3. 条件付きでコンポーネント全体を切り替え

```jsx
{isMobile ? (
  <MobileMenu />
) : (
  <DesktopMenu />
)}
```

### 4. 条件付きでスタイルを適用

```jsx
<div style={{
  display: isMobile ? 'block' : 'flex',
  padding: isMobile ? '10px' : '20px'
}}>
  コンテンツ
</div>
```

## カスタムHookの作成

複数のコンポーネントで使い回せるようにカスタムHookを作成することを推奨します。

### useWindowSize Hook

```jsx
// src/hooks/useWindowSize.js
import { useState, useEffect } from 'react'

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return windowSize
}
```

### useBreakpoint Hook

```jsx
// src/hooks/useBreakpoint.js
import { useState, useEffect } from 'react'

const BREAKPOINTS = {
  xxsmall: 360,
  xsmall: 480,
  small: 736,
  medium: 980,
  large: 1280,
  xlarge: 1680,
}

export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState('')

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth

      if (width <= BREAKPOINTS.xxsmall) {
        setBreakpoint('xxsmall')
      } else if (width <= BREAKPOINTS.xsmall) {
        setBreakpoint('xsmall')
      } else if (width <= BREAKPOINTS.small) {
        setBreakpoint('small')
      } else if (width <= BREAKPOINTS.medium) {
        setBreakpoint('medium')
      } else if (width <= BREAKPOINTS.large) {
        setBreakpoint('large')
      } else {
        setBreakpoint('xlarge')
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return {
    breakpoint,
    isMobile: breakpoint === 'xxsmall' || breakpoint === 'xsmall' || breakpoint === 'small',
    isTablet: breakpoint === 'medium',
    isDesktop: breakpoint === 'large' || breakpoint === 'xlarge',
  }
}
```

### useMediaQuery Hook

```jsx
// src/hooks/useMediaQuery.js
import { useState, useEffect } from 'react'

export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)

    if (media.matches !== matches) {
      setMatches(media.matches)
    }

    const listener = () => setMatches(media.matches)
    media.addListener(listener)

    return () => media.removeListener(listener)
  }, [matches, query])

  return matches
}
```

## 実装例

### Header.jsの実装（実際の使用例）

```jsx
import React, { useState, useEffect } from 'react'

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
    <header>
      <h1>
        カンサォン・ノーヴァ {isMobile && <br />}コーラスネクスト 4.0
      </h1>
      <h2>
        デザイン・クリエイティブセンター神戸 {isMobile && <br />}KIITOホール
      </h2>
    </header>
  )
}
```

### カスタムHookを使った実装

```jsx
import React from 'react'
import { useBreakpoint } from '../hooks/useBreakpoint'

const MyComponent = () => {
  const { isMobile, isTablet, isDesktop } = useBreakpoint()

  return (
    <div>
      <h1>
        タイトル {isMobile && <br />}サブタイトル
      </h1>

      {isMobile && <MobileMenu />}
      {isTablet && <TabletMenu />}
      {isDesktop && <DesktopMenu />}
    </div>
  )
}
```

### useMediaQueryを使った実装

```jsx
import React from 'react'
import { useMediaQuery } from '../hooks/useMediaQuery'

const ResponsiveComponent = () => {
  const isMobile = useMediaQuery('(max-width: 736px)')
  const isTablet = useMediaQuery('(min-width: 737px) and (max-width: 980px)')
  const isDesktop = useMediaQuery('(min-width: 981px)')

  return (
    <div>
      {isMobile && <p>モバイル表示</p>}
      {isTablet && <p>タブレット表示</p>}
      {isDesktop && <p>デスクトップ表示</p>}
    </div>
  )
}
```

### ナビゲーションメニュー

```jsx
const Navigation = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 980)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  return (
    <>
      {isMobile ? (
        <button className="mobile-menu-toggle">Menu</button>
      ) : (
        <nav>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      )}
    </>
  )
}
```

### グリッドレイアウト

```jsx
const GridLayout = ({ items }) => {
  const { breakpoint } = useBreakpoint()

  const getColumns = () => {
    if (breakpoint === 'xxsmall' || breakpoint === 'xsmall') return 1
    if (breakpoint === 'small') return 2
    if (breakpoint === 'medium') return 3
    return 4
  }

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: `repeat(${getColumns()}, 1fr)`,
      gap: breakpoint === 'xxsmall' ? '10px' : '20px'
    }}>
      {items.map(item => (
        <div key={item.id}>{item.content}</div>
      ))}
    </div>
  )
}
```

### 条件付きスタイル

```jsx
const StyledComponent = () => {
  const { isMobile } = useBreakpoint()

  return (
    <div style={{
      fontSize: isMobile ? '14px' : '16px',
      padding: isMobile ? '15px' : '30px',
      display: isMobile ? 'block' : 'flex',
      flexDirection: isMobile ? 'column' : 'row'
    }}>
      コンテンツ
    </div>
  )
}
```

## ベストプラクティス

### 1. カスタムHookを使って再利用性を高める

```jsx
// Good - 再利用可能
const { isMobile } = useBreakpoint()

// Avoid - 各コンポーネントで重複
const [isMobile, setIsMobile] = useState(false)
useEffect(() => { /* ... */ }, [])
```

### 2. パフォーマンスを考慮

不必要なリサイズイベントリスナーは避け、必要最小限のコンポーネントでのみ使用しましょう。

```jsx
// Good - 最上位で判定して子に渡す
const App = () => {
  const { isMobile } = useBreakpoint()
  return <ChildComponent isMobile={isMobile} />
}

// Avoid - 各子コンポーネントで判定
const ChildComponent = () => {
  const { isMobile } = useBreakpoint()  // 重複
  // ...
}
```

### 3. SSR（Server-Side Rendering）を考慮

Gatsbyを使用している場合、初回レンダリング時には`window`が存在しない可能性があります。

```jsx
const [isMobile, setIsMobile] = useState(false)

useEffect(() => {
  if (typeof window === 'undefined') return

  const checkMobile = () => {
    setIsMobile(window.innerWidth <= 736)
  }

  checkMobile()
  window.addEventListener('resize', checkMobile)

  return () => {
    window.removeEventListener('resize', checkMobile)
  }
}, [])
```

### 4. Breakpoint数を最小限

過度な分岐は避け、必要最小限に抑えましょう。

```jsx
// Good - シンプル
const padding = isMobile ? '10px' : '20px'

// Avoid - 過剰
const padding =
  breakpoint === 'xxsmall' ? '8px' :
  breakpoint === 'xsmall' ? '10px' :
  breakpoint === 'small' ? '12px' :
  breakpoint === 'medium' ? '16px' :
  breakpoint === 'large' ? '20px' : '24px'
```

## トラブルシューティング

### リサイズ時に反映されない

イベントリスナーが正しく設定されているか確認してください。

```jsx
useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 736)
  }

  handleResize()  // 初回実行を忘れずに
  window.addEventListener('resize', handleResize)

  return () => {
    window.removeEventListener('resize', handleResize)  // クリーンアップ
  }
}, [])
```

### 初回レンダリングで正しく判定されない

useEffect内で初回実行を行っているか確認してください。

```jsx
useEffect(() => {
  const checkMobile = () => {
    setIsMobile(window.innerWidth <= 736)
  }

  checkMobile()  // これが必要
  window.addEventListener('resize', checkMobile)

  return () => {
    window.removeEventListener('resize', checkMobile)
  }
}, [])
```

### Gatsby/SSRでエラーが出る

`window`の存在チェックを追加してください。

```jsx
useEffect(() => {
  if (typeof window === 'undefined') return

  // window を使う処理
}, [])
```
