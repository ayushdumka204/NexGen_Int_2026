type BrandProps = {
  light?: boolean
}

export default function Brand({ light = false }: BrandProps) {
  return (
    <a
      className={`brand interactive ${light ? "brand--light" : ""}`}
      href="#top"
      aria-label="NexGen home"
    >
      <img
        className="brand-logo"
        src="/images/nexgen-logo.png"
        alt="NexGen Market Research Services"
      />
    </a>
  )
}
