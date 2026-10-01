import { useEffect, useState } from "react"

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" })
  }

  return (
    <button
      className={`scroll-to-top interactive ${
        visible ? "scroll-to-top--visible" : ""
      }`}
      type="button"
      aria-label="Scroll back to top"
      onClick={scrollToTop}
    >
      <span aria-hidden="true">↑</span>
    </button>
  )
}
