import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

export const ReadingBar = () => {
  const [width, setWidth] = useState(0)
  const contentRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight
      const contentHeight = contentRef.current?.clientHeight || 0
      const scrollTop = document.documentElement.scrollTop

      const scrollPercent = (scrollTop / (scrollHeight - contentHeight)) * 100

      setWidth(scrollPercent)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const ReadingBar = () => {
    return (
      <div
        className="flex fixed top-0 h-3 bg-slate-500"
        style={{
          width: width + '%'
        }}
      >
        hello
      </div>
    )
  }

  return createPortal(<ReadingBar />, document.documentElement)
}
