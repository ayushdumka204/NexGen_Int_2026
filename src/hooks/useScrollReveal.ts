import { useEffect } from "react"

export default function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".scroll-reveal")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add("scroll-reveal--visible")
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.14 },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])
}
