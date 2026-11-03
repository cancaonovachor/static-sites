import React, { useEffect } from 'react'

export const TEASER_MOVIE_ID = 'ysXBB6pNGIg'

const VideoModal = ({ onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key !== 'Escape') {
        return
      }

      onClose()
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <div
      className="video-modal"
      role="dialog"
      aria-modal="true"
      aria-label="ティザー動画"
      onClick={(event) => {
        if (event.target !== event.currentTarget) {
          return
        }

        onClose()
      }}
    >
      <div className="video-modal__content">
        <button
          type="button"
          className="video-modal__close"
          aria-label="閉じる"
          autoFocus
          onClick={onClose}
        >
          &times;
        </button>
        <div className="video-modal__player">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${TEASER_MOVIE_ID}?autoplay=1&rel=0`}
            title="CancaoNova Chorus Next 5.0 ティザー動画"
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  )
}

export default VideoModal
