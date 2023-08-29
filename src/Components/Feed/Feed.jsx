import React, { useEffect, useState } from 'react'
import FeedModal from './FeedModal'
import FeedPhotos from './FeedPhotos'

const Feed = ({ user }) => {
  const [modalPhoto, setModalPhoto] = useState(null)
  const [pages, setPages] = useState([1])
  const [infinite, setInfinite] = useState(true)

  useEffect(() => {
    let wait = false
    function infineteScroll() {
      if (infinite) {
        const scroll = window.scrollY
        const height = document.body.offSetHeight - window.innerHeight
        if (scroll > height * 0.75 && !wait) {
          setPages(pages => [...pages, pages.length + 1])
          wait = true
          setTimeout(() => {
            wait = false
          }, 500)
        }
      }
    }

    window.addEventListener('scroll', infineteScroll)
    window.addEventListener('wheel', infineteScroll)
    return () => {
      window.removeEventListener('scroll', infineteScroll)
      window.removeEventListener('wheel', infineteScroll)
    }
  }, [infinite])

  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      {pages.map(page => (
        <FeedPhotos
          key={page}
          user={user}
          page={page}
          setModalPhoto={setModalPhoto}
          setInfinite={setInfinite}
        />
      ))}
    </div>
  )
}

export default Feed
