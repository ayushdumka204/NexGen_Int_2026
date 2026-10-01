type BrandProps = {
  light?: boolean
}

const logoUrl = `${import.meta.env.BASE_URL}images/nexgen-logo.png`

export default function Brand({ light = false }: BrandProps) {
  return (
    <a
      className={`brand interactive ${light ? "brand--light" : ""}`}
      href="#top"
    >
      <img
        className="brand-logo"
        src={logoUrl}
        alt="NexGen Market Research Services"
      />
    </a>
  )
}
