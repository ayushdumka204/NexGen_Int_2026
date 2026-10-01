import { useEffect } from "react"

export default function CustomCursor() {
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return

    const cursor = document.querySelector<HTMLElement>(".custom-cursor")
    const onMove = (event: MouseEvent) => {
      if (cursor) {
        cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`
      }
    }
    const onOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      cursor?.classList.toggle(
        "custom-cursor--active",
        Boolean(target.closest(".interactive, a, button")),
      )
    }

    window.addEventListener("mousemove", onMove)
    document.addEventListener("mouseover", onOver)
    return () => {
      window.removeEventListener("mousemove", onMove)
      document.removeEventListener("mouseover", onOver)
    }
  }, [])

  return <div className="custom-cursor" aria-hidden="true" />
}
