type ArrowProps = {
  diagonal?: boolean
}

export default function Arrow({ diagonal = false }: ArrowProps) {
  return (
    <span
      className={`arrow ${diagonal ? "arrow--diagonal" : ""}`}
      aria-hidden="true"
    >
      →
    </span>
  )
}
